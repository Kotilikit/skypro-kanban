import { styled } from "styled-components";
import { hover03 } from "../../../styled/common/Common.styled";
import { topicStyles } from "../../../lib/topic";

export const PopBrowseBtnExit = styled.span`
  display: flex;
  height: 30px;
  width: 90px;
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  align-items: center;
  justify-content: center;

  ${hover03}
`;

export const PopBrowseDiv = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const CategoriesThemeDiv = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94a6be"};
  color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
  opacity: 1 !important;
  align-items: center;
`;

export const TopicText = styled.p`
  font-weight: bold;
`;

export const PopBrowseСonteinerDiv = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlockDiv = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 680px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrowseContentDiv = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlockDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseStatusDiv = styled.div`
  margin-bottom: 11px;
`;

export const StatusPsubTtlP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PopBrowseWrapDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowseBlockDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTtl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 300px;
`;

export const BtnBrowseDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 0px;
  cursor: pointer;
  outline: none;
`;

export const BtnGroupDiv = styled.div`
  display: flex;
  margin-right: 8px;
`;

export const BtnEdit = styled.span`
  display: flex;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  height: 30px;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
  padding-left: 3px;
  padding-right: 3px;

  ${hover03}
`;

export const StatusThemeActiveDiv = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background: #94a6be;
  color: #ffffff;
`;

export const StatusThemeLabel = styled.label`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  &:hover {
    background: #94a6be;
    color: #ffffff;
  }
`;

export const StatusThemeInput = styled.input`
  display: none;
  &:checked + label {
    background: #94a6be;
    color: #ffffff;
  }
`;
