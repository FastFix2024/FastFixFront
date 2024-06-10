import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 350px;
  top: -300px;
`;

export const Section3Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ProfileIcons = styled.img`
  width: 50px;
  cursor: pointer;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  gap: 30px;
`;

export const ProfileButtons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -45%;
  right: 10%;
  margin: 30px;
  gap: 20px;
`;

export const ProfileBackground = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: lightgrey;
  height: 640px;
  width: 80%;
  border-radius: 20px;
`;

export const FooterIcons = styled.img`
  width: 40px;
  position: relative;
  bottom: 20px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  height: 445;
  width: 100%;
  display: flex;
  justify-content: end;
  padding-right: 100px;
  gap: 20px;
`;
