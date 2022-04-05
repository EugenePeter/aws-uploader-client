import React from "react";
import { DropzonePreview, ImageContainer, ImageWrapper, Img } from "./styles";
import { v4 as uuidv4 } from "uuid";
const ImageList = ({ images }) => {
  return (
    <DropzonePreview className="file-list">
      {images.map((images, index) => {
        return (
          <>
            <ImageContainer key={uuidv4()}>
              <Img src={images.src} />
            </ImageContainer>
          </>
        );
      })}
    </DropzonePreview>
  );
};

export default ImageList;
