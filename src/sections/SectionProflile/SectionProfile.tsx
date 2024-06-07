import { DeleteUser, GitHub, Logout, Mail, Notifications } from "../../assets";
import FuelCard from "../../components/FuelCard/FuelCard";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useAppSelector } from '../../store/hooks'
import { authSliceSlectors } from '../../store/redux/authSlice/authSlice'
import { Footer, FooterIcons, ProfileBackground, ProfileContainer, ProfileIcons, Section3Background, SectionContainer, SectionWrapper } from "./styles";

const SectionProfile = () => {
  const user = useAppSelector(authSliceSlectors.selectCurrentUser);


  
  return (
    <SectionWrapper>
      { !user && <SectionContainer>
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
      </SectionContainer>}
      <Footer>
        <FooterIcons src={GitHub} />
        <FooterIcons src={Mail} />
      </Footer>
    </SectionWrapper>
  );
};

export default SectionProfile;
