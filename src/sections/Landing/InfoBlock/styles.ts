import styled from "@emotion/styled";

export const InfoAndImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 70px;
`;

export const InfoImgStyle = styled.img`
  width: 360px;
  height: 500px;
`;

export const ImgTitleBlock = styled.div`
  background-color: orange;
  transform: rotate(270deg);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 400px;
  position: relative;
  right: 200px;
  top: 320px;
`;

export const ImgTitle = styled.p`
  font-size: 20px;
  color: white;
  font-weight: 700;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GeoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  margin-top: 20px;
  width: 360px;
  height: 100px;
`;

export const MissionText = styled.div`
  width: 555px;
`;

export const MissionTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const MissionInfo = styled.p`
  margin-top: 20px;
  font-size: 16px;
`;

export const MiniInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MiniInfoTextBlock = styled.div`
  width: 235px;
  margin-left: 30px;
`;

export const MiniInfoTitel = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const MiniInfo = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;

export const Border = styled.div`
  background-color: black;
  height: 150px;
  width: 2px;
`;
