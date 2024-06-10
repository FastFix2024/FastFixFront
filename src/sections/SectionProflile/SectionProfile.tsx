import { DeleteUser, GitHub, Logout, Mail } from "../../assets";
import FuelCard from "../../components/FuelCard/FuelCard";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useAppSelector } from '../../store/hooks'
import { authSliceSlectors } from '../../store/redux/authSlice/authSlice'
import { Footer, FooterIcons, ProfileBackground, ProfileButtons, ProfileContainer, ProfileIcons, Section3Background, SectionContainer, SectionWrapper } from "./styles";

const SectionProfile = () => {
  const user = useAppSelector(authSliceSelectors.selectCurrentUser);


  
  return (
    <SectionWrapper>
      { !user && <SectionContainer>
        <Section3Background>
          <ProfileBackground>
          <ProfileButtons>
              <ProfileIcons src={Logout} />
              <ProfileIcons src={DeleteUser} />
            </ProfileButtons>
            <ProfileContainer>
              <FuelCard />
            </ProfileContainer>
            <ProfileContainer>
              Здесь контет напоминания
            </ProfileContainer>
            <ProfileContainer>
              <UserInfo />
            </ProfileContainer>
          </ProfileBackground>
        </Section3Background>
      </SectionContainer>}
      <Footer>
        <FooterIcons src={GitHub} />
        <FooterIcons src={Mail} />
      </Footer>
    </SectionWrapper>
  );
};

export default SectionProfile;
