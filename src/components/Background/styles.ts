import styled from "@emotion/styled";
import { Sections1Bg } from "../../assets";
import { Sections2Bg } from "../../assets";
import { Section3Bg } from "../../assets";


export const Backgrund1 = styled.div`
    background-image: url('${Sections1Bg}');
    background-repeat: no-repeat;
    height: 1600px;
    position: relative;
`;

export const MapContainer = styled.div`
    display: flex;
    justify-items: center;
`;

export const Background2Container = styled.div`
    background-color: rgba(0,92,208,1);
    height: 690px;
    position: relative;
    z-index: -1;
`;

export const Background2 = styled.div`
    background-image: url('${Sections2Bg}');
    background-repeat: no-repeat;
    width: 655px;
    height: 690px;
    position: absolute;
    right: 0;
`;

export const Background3 = styled.div`
    background-image: url('${Section3Bg}');
    background-repeat: no-repeat;
    height: 450px;
    position: relative;
    z-index: -2;
`;

export const ProfileContainer = styled.div`
    height: 640px;
`; 