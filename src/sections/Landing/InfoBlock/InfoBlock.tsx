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
  ImgContainer,
  GeoContainer,
} from "./styles";
import Emergency from "../../../components/Emergency/Emergency";

const InfoBlock = () => {
  return (
    <InfoAndImgWrapper>
      <ImgContainer>
        <ImgTitleBlock>
          <ImgTitle>More than Just Experience</ImgTitle>
        </ImgTitleBlock>
        <InfoImgStyle src={InfoImg} />
        <GeoContainer>
          <div>
            <Emergency />
          </div>
        </GeoContainer>
      </ImgContainer>
      <InfoWrapper>
        <MissionText>
          <MissionTitle>Our Company Mission</MissionTitle>
          <MissionInfo>
          Our company specializes in providing comprehensive services for more convenient maintenance of your vehicle. 
          We focus on high-quality standards and customer satisfaction, 
          and we strive to build trust with our clients by offering only proven solutions and a personalized approach to each vehicle.
          <br />
          <br />
          Our goal is to ensure the long-term reliability of your vehicle and your peace of mind on the road.
          </MissionInfo>
        </MissionText>

        <MiniInfoWrapper>
          <MiniInfoTextBlock>
            <MiniInfoTitel>Our Team</MiniInfoTitel>
            <MiniInfo>
            The principles of honesty, transparency, and professionalism are at the core of our work.<br /> <br /> We understand how important your vehicle is to you, 
            which is why we put in maximum effort to conveniently keep it in excellent condition.
            <br />
            <br />
            We take pride in offering qualified service for selecting repairs and maintenance that ensure the safety and longevity of your vehicle.<br /><br />
            With our service, you won’t need dozens of apps or hundreds of websites to find information and services on the go. 
            <br />
            We provide you with everything you need.
            </MiniInfo>
          </MiniInfoTextBlock>

          <Border />

          <MiniInfoTextBlock>
            <MiniInfoTitel>Advantages</MiniInfoTitel>
            <MiniInfo>
              We offer a wide range of services, from basic maintenance to complex repairs, from finding the nearest gas stations to selecting the cheapest fuel.
              <br />
              Our service helps you find highly qualified specialists who use modern technology and equipment to provide you with the best service. 
              <br /> <br />
              With us, you won’t forget to change your seasonal tires or to perform mandatory maintenance on time.
              <br />
              Entrust your time to us, and you will quickly resolve all issues related to your vehicle.
            </MiniInfo>
          </MiniInfoTextBlock>
        </MiniInfoWrapper>
      </InfoWrapper>
    </InfoAndImgWrapper>
  );
};
export default InfoBlock;
