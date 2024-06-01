import styled from "@emotion/styled";
import { Sections1Bg } from "../../assets";

export const LandingComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 850px;
  background-image: url("${Sections1Bg}");
  background-repeat: no-repeat;
`;

export const LandingComponentWrapper = styled.div`
  height: 1100px;
`;

export const LoginRegFormsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InfoBlockWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;
`;

export const InfoBlockContainer = styled.div`
display: flex;
justify-content: center;
`;

export const GeoContainer = styled.div`
  width: 45%;
  height: 30px;
  position: relative;
  z-index: 1;
`;

export const YTWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 100px;
  position: relative;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 80%;
  z-index: -1;
`;
