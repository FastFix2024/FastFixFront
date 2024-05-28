import styled from "@emotion/styled";
import { HeaderBg } from "../../../assets";

export const HeaderWrapper = styled.div`
  height: 35vh;
`;

export const HeaderComponent = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${HeaderBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  justify-content: space-between;
`;

export const HeaderMotto = styled.div`
  display: flex;
  font-size: 2.8vh;
  padding: 13vh 0 0 30vw;
`;

export const HeaderText = styled.div`
  font-size: 3vh;
  width: fit-content;
  color: white;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 5vw;
  padding: 29.7vh 2vw 0 0;
  font-size: 30px;
  color: white;
`;

export const SeparationLine = styled.div`
  width: 100%;
  height: 1vh;
  background-color: orange;
`;
