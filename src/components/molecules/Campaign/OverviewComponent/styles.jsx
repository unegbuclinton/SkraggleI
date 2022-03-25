import Card from "components/atoms/Card";
import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  margin-top: 1.6rem;
`;

export const LeftSection = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: right;
  flex-grow: 3;
  margin-right: 1.6rem;

  .action-button {
    display: flex;
    flex-direction: row;
    justify-content: right;
    background-color: red;
  }
`;

export const RightSection = styled(Card)`
  display: flex;
  flex-grow: 8;
`;
