import { Header } from "./Header/Header";
import InfoBlock from "./InfoBlock/InfoBlock";
import LoginRegForms from "./LoginRegForms/LoginRegForms";
import { LandingComponent, LoginRegFormsContainer } from "./styles";
import Geolocation from "../../components/Geolocation/Geolocation";

export const Landing = () => {
  return (
    <LandingComponent>
      <Header />
      <LoginRegFormsContainer>
        <LoginRegForms />
      </LoginRegFormsContainer>
      <InfoBlock />
      <Geolocation />
    </LandingComponent>
  );
};
