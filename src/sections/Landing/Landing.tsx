import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed'
import InfoBlock from './InfoBlock/InfoBlock'
import LoginRegForms from './LoginRegForms/LoginRegForms'
import { LandingComponentWrapper, LandingComponent, LoginRegFormsContainer, YTWrapper } from './styles'


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
