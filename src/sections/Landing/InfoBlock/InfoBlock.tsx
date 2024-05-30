import { InfoImg } from "../../../assets";
import {
  InfoImgStyle,
  InfoAndImgWrapper,
  MiniInfoTextBlock,
  MiniInfoTitel,
  MissionInfo,
  MissionText,
  MissionTitle,
  InfoWrapper,
  MiniInfo,
  Border,
  MiniInfoWrapper,
  ImgTitleBlock,
  ImgTitle,
} from "./styles";

const InfoBlock = () => {
  return (
    <InfoAndImgWrapper>
      <div>
        <ImgTitleBlock>
          <ImgTitle>More than Just Experience</ImgTitle>
        </ImgTitleBlock>
        <InfoImgStyle src={InfoImg} />
      </div>
      <InfoWrapper>
        <MissionText>
          <MissionTitle>Our Company Mission</MissionTitle>
          <MissionInfo>
            Our mission is to provide top-quality automotive care with integrity, efficiency, and expertise. We strive to ensure the safety and
            satisfaction of our customers by offering reliable maintenance, repairs, and personalized service.
            <br />
            <br />
            Our dedicated team is committed to keeping your vehicle in peak condition, ensuring a smooth and worry-free driving experience
          </MissionInfo>
        </MissionText>

        <MiniInfoWrapper>
          <MiniInfoTextBlock>
            <MiniInfoTitel>Our management team</MiniInfoTitel>
            <MiniInfo>
              is dedicated to excellence, ensuring quality service, customer satisfaction, and continuous improvement in all operations.
            </MiniInfo>
          </MiniInfoTextBlock>

          <Border />

          <MiniInfoTextBlock>
            <MiniInfoTitel>Our mechanics</MiniInfoTitel>
            <MiniInfo>
              are skilled professionals committed to providing top-notch service, ensuring your vehicle runs smoothly and safely at all times.
            </MiniInfo>
          </MiniInfoTextBlock>
        </MiniInfoWrapper>
      </InfoWrapper>
    </InfoAndImgWrapper>
  );
};
export default InfoBlock;
