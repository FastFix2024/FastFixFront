import { VideoContainer } from "./styles";

const YoutubeEmbed = () => (
  <VideoContainer>
    <iframe
      width="640"
      height="360"
      src="https://www.youtube.com/embed/R-F38m8k_u8?rel=0&disablekb=1&enablejsapi=1&fs=0&modestbranding=1&color=white&iv_load_policy=3&autoplay=0&mute=0&loop=1&controls=0&color=white&
      modestbranding=0&showinfo=0&playsinline=1&enablejsapi=1&
      playlist=PLR-F38m8k_u8"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoContainer>
);

export default YoutubeEmbed;

