import styled, { keyframes } from "styled-components";

export const brandColor = "#4285F4";
export const subColorGrey = "#BDBDBD";
export const mainColorBlack = "black";

export const DropzoneContainer = styled.div`
  position: relative;
  z-index: 100;
  border: solid 0.11rem ${subColorGrey};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 40px; */
  text-align: center;
  box-sizing: border-box;
  /* overflow: hidden; */
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DropzonePreview = styled.div`
  position: relative;
  height: 300px;
  background-color: pink;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  border: solid 2px ${brandColor};
  position: relative;
  display: flex;

  height: 40px;
  margin-bottom: 10px;
  span {
    padding: 10px;
    box-sizing: border-box;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
`;

const appear = keyframes`
  from {
   opacity: 0
  }

  to {
    opacity: .1
  }
`;

export const Img = styled.img`
  max-width: 50%;
`;
export const UploadIconContainer = styled.div`
  animation: ${appear} cubic-bezier(0.71, 0.01, 0.49, 1) 0.3s alternate;
  background-color: black;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
  /* border-radius: 50%; */
  cursor: pointer;
  background-color: green;
`;
