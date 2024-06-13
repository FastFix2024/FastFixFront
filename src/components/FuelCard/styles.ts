import styled from '@emotion/styled';

export const FuelCardContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.53);
    padding: 0px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: Arial, Helvetica, sans-serif;
    width: 120%;
    height:80px;
`;

export const Price = styled.p`
    background-color: rgba(6, 3, 80, 1);
    border-radius: 10px 0 0 10px;
    color: #eaeaea;
    flex: 0 0 45%;    
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1px; 
    height:100%;
    
`;

export const FuelDetails = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

    export const FuelDetailsText = styled.p`
    font-size: 16px;
   

`