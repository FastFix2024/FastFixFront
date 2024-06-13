import MapWrapper from 'components/MapWrapper/MapWrapper'
import { Landing } from 'sections/Landing/Landing'
import SectionProfile from 'sections/SectionProflile/SectionProfile'
import { Background2, Background2Container, Background3, Backgrund1, ProfileContainer } from "./styles";

const Background = () => {
  return (
    <div>
      <Backgrund1>
        <Landing />
        <MapWrapper />
      </Backgrund1>
      <ProfileContainer id="section-profile">
        <Background2Container>
          <Background2 />
        </Background2Container>
        <SectionProfile />
      </ProfileContainer>
      <Background3 />
    </div>
  );
};

export default Background;
