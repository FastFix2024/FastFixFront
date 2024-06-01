import { Header } from "./Header/Header";
import InfoBlock from "./InfoBlock/InfoBlock";
import LoginRegForms from "./LoginRegForms/LoginRegForms";
import { GeolocationContainer, LandingComponent, LoginRegFormsContainer, YTWrapper } from "./styles";
import Geolocation from "../../components/Geolocation/Geolocation";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";

export const Landing = () => {
  return (
    <LandingComponent>
      <Header />
      <LoginRegFormsContainer>
        <LoginRegForms />
      </LoginRegFormsContainer>
      <InfoBlock />

      <GeolocationContainer>
        <Geolocation />
      </GeolocationContainer>

      <Geolocation />
      <YTWrapper>
        <YoutubeEmbed />
      </YTWrapper>
    </LandingComponent>
  );
};
