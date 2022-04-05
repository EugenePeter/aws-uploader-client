import styled from "styled-components";

export const mainColorGreen = "#3BC453";
export const subColorGrey = "grey";
export const mainColorBlack = "black";

export const ImageUploaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageListWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  bottom: 0rem;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;
