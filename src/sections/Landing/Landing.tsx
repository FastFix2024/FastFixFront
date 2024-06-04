import { Header } from "./Header/Header";
import InfoBlock from "./InfoBlock/InfoBlock";
import LoginRegForms from "./LoginRegForms/LoginRegForms";
import { LandingComponent, LoginRegFormsContainer, YTWrapper, LandingComponentWrapper } from "./styles";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";

export const Landing = () => {
  return (
    <LandingComponentWrapper>

      <LandingComponent>

        <LoginRegFormsContainer>
          <LoginRegForms />
        </LoginRegFormsContainer>

        <InfoBlock />

      </LandingComponent>

      <YTWrapper>
        <YoutubeEmbed />
      </YTWrapper>
    </LandingComponentWrapper>
  );
};
