import { DeleteUser, GitHub, Logout, Mail } from "../../assets";
import FuelCard from "../../components/FuelCard/FuelCard";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { authSliceSelectors } from "../../store/redux/authSlice/authSlice";
import { usersSlice, usersSliceActions } from "../../store/redux/usersSlice/usersSlice";
import {
  Footer,
  FooterIcons,
  ProfileBackground,
  ProfileButtons,
  ProfileContainer,
  ProfileIcons,
  Section3Background,
  SectionContainer,
  SectionWrapper,
} from "./styles";

const SectionProfile = () => {
  const user = useAppSelector(authSliceSelectors.selectCurrentUser);
  
  const dispatch = useAppDispatch();


  function logoutHandler() {
     dispatch(usersSliceActions.logoutUser())
  }
  function deleteHandler() {
  // dispatch(usersSliceActions.deleteUser())
}

  return (
    <SectionWrapper>
      {!user && (
        <SectionContainer>
          <Section3Background>
            <ProfileBackground>
              <ProfileButtons>
                <ProfileIcons src={Logout} onClick={logoutHandler} />
                <ProfileIcons src={DeleteUser} onClick={()=>{}}/>
              </ProfileButtons>
              <ProfileContainer>
                <FuelCard />
              </ProfileContainer>
              <ProfileContainer>Здесь контет напоминания</ProfileContainer>
              <ProfileContainer>
                <UserInfo />
              </ProfileContainer>
            </ProfileBackground>
          </Section3Background>
        </SectionContainer>
      )}
      <Footer>
        <FooterIcons src={GitHub} />
        <FooterIcons src={Mail} />
      </Footer>
    </SectionWrapper>
  );
};

export default SectionProfile;
