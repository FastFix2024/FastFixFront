import styled from "@emotion/styled";
import { Sections2Bg } from "../../assets";

export const Section2 = styled.div`
  position: relative;
  top: 150px;
  width: 100%;
  height: 700px;
  background-color: rgba(9, 105, 184, 1);
`;

export const Section2Baground = styled.div`
  position: absolute;
  right: 0;
  width: 655px;
  height: 700px;
  background-image: url("${Sections2Bg}");
  background-repeat: no-repeat;
`;
