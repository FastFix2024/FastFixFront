import { DeleteUser, GitHub, Logout, Mail, Notifications } from "../../assets";
import FuelCard from "../../components/FuelCard/FuelCard";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { authSliceSelectors } from '../../store/redux/authSlice/authSlice'
import { usersSlice } from '../../store/redux/usersSlice/usersSlice'
import { Footer, FooterIcons, ProfileBackground, ProfileContainer, ProfileIcons, Section3Background, SectionContainer, SectionWrapper } from "./styles";

const SectionProfile = () => {
  const user = useAppSelector(authSliceSelectors.selectCurrentUser);
  const dispatch = useAppDispatch()

  function logoutHandler() {
   dispatch(usersSlice.logoutUser())
 }


  
  return (
    <SectionWrapper>
      { user && <SectionContainer>
        <Section3Background>
          <ProfileBackground>
            <ProfileContainer>
              <UserInfo />
            </ProfileContainer>
            <ProfileContainer>
              <FuelCard />
            </ProfileContainer>
            <ProfileContainer>
              <ProfileIcons src={Logout} onClick={logoutHandler}/>
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
