import { DeleteUser, Logout, Notifications } from "../../assets";
import FuelCard from "../../components/FuelCard/FuelCard";
import UserInfo from "../../components/UserInfo/UserInfo";
import { Footer, ProfileBackground, ProfileContainer, ProfileIcons, Section3Background, SectionContainer, SectionWrapper } from "./styles";

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
        <h1>Контакты:</h1>
        <h3>Email: delatMneNetchego@skutchno.com</h3>
        <h3>Телефон: 087823 6294691488 (лучше никогда не звонить этому человеку)</h3>
        <h3>Автор: Ночная Сова🦉</h3>
        <h3>P.S: Всем спокойного утра 😂😝</h3>
      </Footer>
    </SectionWrapper>
  );
};

export default SectionProfile;
