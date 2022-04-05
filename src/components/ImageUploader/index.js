import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

import Dropzone from "./components/DropZone.js";
import ImageList from "./components/ImageList";
import { ImageUploaderWrapper, ImageListWrapper } from "./styles";

const UploadImage = (props) => {
  const { upload } = props;
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hover, setHover] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = (e) => {
        const { result = {} } = e.target ?? {};
        console.log("result", e.target);
        console.log("FILE:", file);
        setImages([{ id: uuidv4(), src: result, filename: file.name, file }]);
      };

      reader.readAsDataURL(file);
      // reader.readAsArrayBuffer(file);

      setIsLoading(true);
      return file;
    });
  }, []);

  useEffect(() => {
    if (images) setIsLoading(false);
  }, [images]);

  const uploadImage = async (file) => {
    console.log("file uploadImage :", file);
    try {
      const uploadConfig = await axios.get("http://localhost:1010/image");
      // const upload_result = await axios.put(
      //   '"https://clever-gene-bucket.s3.ap-southeast-1.amazonaws.com/clevergene/9bc44945-362f-42c5-9ba2-3c7ea89067ac.jpeg?AWSAccessKeyId=AKIA2I46K5WEI4ACS35L&Content-Type=image%2Fjpeg&Expires=1637133454&Signature=FuGd4NYDe8FCJ%2BeRJcEeDqv6%2Fzo%3D"',
      //   file,
      //   {
      //     headers: {
      //       "Content-Type": file.type,
      //     },
      //   }
      // );
      // const url = uploadConfig.url;
      // console.log("URL:", url);
      const upload_results = await axios.put(uploadConfig.data.url, file, {
        headers: {
          "Content-Type": file.type,
        },
      });
      console.log("uploadConfig:", uploadConfig.data);
      console.log("FILE TYPE:", images[0].file);
      console.log("upload_results:", upload_results);
    } catch (err) {
      console.log("ERROR:", err);
      console.error(JSON.stringify(err, undefined, 2));
    }
  };

  useEffect(() => {
    console.log("YOOO:", images);
    if (images.length > 0) uploadImage(images[0].file);
  }, [images]);

  const handleUploadImageMouseOver = () => {
    setHover(true);
  };
  const handleUploadImageMouseLeave = () => {
    setHover(false);
  };

  return (
    <ImageUploaderWrapper
      onMouseOver={handleUploadImageMouseOver}
      onMouseLeave={handleUploadImageMouseLeave}
    >
      <Dropzone
        onDrop={onDrop}
        acceptedFiles={"image/*"}
        images={images}
        isHovered={hover}
        upload={upload}
      />
      <ImageListWrapper>
        {isLoading ? <h1>...LOADING</h1> : ""}
        <ImageList images={images} />
      </ImageListWrapper>
    </ImageUploaderWrapper>
  );
};

export default UploadImage;
