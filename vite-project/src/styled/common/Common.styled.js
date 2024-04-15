import styled from 'styled-components';
import { css } from "styled-components";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Button = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;
`;
export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;
export const WrapperSignupSignin = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6;
`;

export const H2 = styled.h2`
  
`;

export const hover01 = css`
&:hover {
  background-color: #33399b;
}
`;

export const hover02 = css`
&:hover {
  color: #33399b;
}
`;

export const hover03 = css`
&:hover {
    color: #FFFFFF;
    background-color: #33399b
}
`;