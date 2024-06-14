import { DeleteUser, GitHub, Logout, Mail } from "../../assets";
import FuelCard from "../../components/FuelCard/FuelCard";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { authSliceActions, authSliceSelectors } from "../../store/redux/authSlice/authSlice";
import { usersSliceSelectors } from "../../store/redux/usersSLice/usersSlice";
import {
  Footer,
  FooterIcons,
  ProfileBackground,
  ProfileButtons,
  ProfileContainer,
  ProfileIcons,
  ReminderContent,
  Section3Background,
  SectionContainer,
  SectionWrapper,
} from "./styles";
import { useEffect } from "react";

const SectionProfile = () => {
  const user = useAppSelector(authSliceSelectors.selectCurrentUser);

  const dispatch = useAppDispatch();

  function logoutHandler() {
    // dispatch(usersSliceActions.logoutUser());
  }
  function deleteHandler() {
    const isConfirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (isConfirmed) {
      dispatch(authSliceActions.deleteCurrentUser())
    } else {
      console.log('Account deletion aborted.');
    }
  }

  // const userProfile = useAppSelector(usersSliceSelectors.selectCurrentUser);
  // console.log(userProfile);

  //
  // useEffect(() => {
  //   axios.get("api/users/my/profile")
  //     .then((res) => {
  //       const data = res.data;
  //
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <SectionWrapper>
      {user && (
        <SectionContainer>
          <Section3Background>
            <ProfileBackground>
              <ProfileButtons>
                <ProfileIcons src={DeleteUser} onClick={deleteHandler} />
                <ProfileIcons src={Logout} onClick={logoutHandler} />
              </ProfileButtons>
              <ProfileContainer>
                <FuelCard />
              </ProfileContainer>
              <ProfileContainer>
                <ReminderContent>
                Dear , <br/>As seasons change, remember to switch your car's tires. German law requires winter tires during icy, snowy, and slushy
                conditions, typically from autumn to spring. Summer tires are best when temperatures consistently exceed 7°C. Ensure your tires have
                the correct tread depth: at least 1.6 mm by law, but ideally 3 mm for summer tires and 4 mm for winter tires for optimal safety. Stay
                safe and enjoy your drive! Best regards, [Your Name/Your Company]
              </ReminderContent>  
              </ProfileContainer>
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
