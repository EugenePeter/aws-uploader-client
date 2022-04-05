import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import { DropzoneContainer, UploadIconContainer } from "./styles";

const Dropzone = ({ onDrop, accept, images, isHovered, upload }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  // const [hasSelectedImage, setImage] = useState([]);
  // useEffect(() => {
  //   setImage(images);
  // }, [images]);

  return (
    <DropzoneContainer {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div>
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </DropzoneContainer>
  );
};

export default Dropzone;
