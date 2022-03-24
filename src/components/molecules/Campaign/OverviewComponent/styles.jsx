import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";
import Card from "components/atoms/Card/Card";

export const MainWrapper =styled.div`
display: flex;
flex-direction: row;
margin-top: 1.6rem;
`

export const LeftSection = styled(Card)`
display: flex;
height: 400px;
flex-grow: 3;
background-color: red;
margin-right: 1.6rem;
`

export const RightSection = styled(Card)`
display: flex;
flex-grow: 8;
height: 400px;
background-color: green;
`