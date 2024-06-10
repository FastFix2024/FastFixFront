import styled from "@emotion/styled";
import { HeaderBg } from "../../../assets";
import { FastFixLogo } from "../../../assets";

export const HeaderWpapper = styled.div`
  margin-bottom: 50px;
`;

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 170px;
  background-image: url('${HeaderBg}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
`;

export const HeaderComponentContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 150px;
  width: 80%;
  height: 70px;
`;

export const HeaderMotto = styled.p`
  font-size: 30px;
  color: white;
`;

export const NavMenu = styled.div`
  display: flex;
  height: 70px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 100%, transparent 70%);
  padding: 10px 30px;
  position: relative;
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%);
`;

export const NavMenuButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-left: 30px;
`;

export const HeaderText = styled.div`
  font-size: 25px;
  color: white;
  cursor: pointer;
`;

export const SeparationLine = styled.div`
  position: absolute;
  top: 170px;
  right: 0;
  width: 80%;
  height: 10px;
  background-color: #f59a31;
`;

export const HeaderLogoContainer = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  right: 150px;
  bottom: 160px;
`;

export const HeaderLogo = styled.img`
  width: 250px;
  height: 250px;
`;
HeaderLogo.defaultProps = { src: FastFixLogo };

export const BackToTopButton = styled.img`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  z-index: 10;
  opacity: 0.7;
  width: 80px;

  &:hover {
    opacity: 1;
  }
`;