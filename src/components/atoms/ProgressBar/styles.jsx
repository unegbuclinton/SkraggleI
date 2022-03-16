import styled from 'styled-components';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';


export const ProgressBarWrapper = styled.div `
 
margin: 10rem;
 width: 57rem;
 display:flex;
 justify-content: center;
 flex-direction: column;
 align-items:center;

`;

export const Container = styled.div`
 .text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.base};
    line-height: 1.9rem;
    margin-bottom: 0.8rem;
    letter-spacing: 0.02em;
    color: ${COLORS.deepPurple};
 }

 .label {
     display: flex;
     justify-content: space-between;
     padding-top: 1rem;

     .container {
         display:flex;
         gap: 0.7rem;
     }

     .amount {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: ${FONTWEIGHTS.bold};
      font-size: ${FONTSIZES.small};
      line-height: 1.6rem;
      letter-spacing: 0.02em;
      color: ${COLORS.pink};
   }

    .raised__target{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.small};
      line-height: 1.6rem;
      letter-spacing: 0.02em;
      color: ${COLORS.grey};
   }

    .percent{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.small};
      line-height: 1.6rem;
      letter-spacing: 0.02em;
      color: ${COLORS.deepPurple};
   }
 }

`

export const ProgressBarOuter = styled.div`

height:2rem;
width:40.8rem;
background: ${COLORS['garage-mix-grey']};

border-radius: 2rem;

`;

export const Percentage = styled.div`
width: 20.4rem;
height: 2rem;
background: ${COLORS.pink};
border-radius: 2rem;
`;