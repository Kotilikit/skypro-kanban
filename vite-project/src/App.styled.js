import { styled, createGlobalStyle } from "styled-components";

export const WrapperDiv = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
  font-family: "Roboto", sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
  background-color: #ffffff;
}
`;