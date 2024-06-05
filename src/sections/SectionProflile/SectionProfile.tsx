import { DeleteUser, GitHub, Logout, Mail, Notifications } from "../../assets";
import FuelCard from "../../components/FuelCard/FuelCard";
import UserInfo from "../../components/UserInfo/UserInfo";
import { Footer, FooterIcons, ProfileBackground, ProfileContainer, ProfileIcons, Section3Background, SectionContainer, SectionWrapper } from "./styles";

const SectionProfile = () => {
  return (
    <SectionWrapper>
      <SectionContainer>
        <Section3Background>
          <ProfileBackground>
            <ProfileContainer>
              <UserInfo />
            </ProfileContainer>
            <ProfileContainer>
              <FuelCard />
            </ProfileContainer>
            <ProfileContainer>
              <ProfileIcons src={Notifications} />
              <ProfileIcons src={Logout} />
              <ProfileIcons src={DeleteUser} />
            </ProfileContainer>
          </ProfileBackground>
        </Section3Background>
      </SectionContainer>
      <Footer>
        <FooterIcons src={GitHub} />
        <FooterIcons src={Mail} />
      </Footer>
    </SectionWrapper>
  );
};

export default SectionProfile;
