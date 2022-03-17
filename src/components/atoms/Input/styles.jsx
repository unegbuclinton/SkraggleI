import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES } from "constants/font-spec";

export const InputWrapper = styled.input`
outline: none;
  width: 37.52rem;
  height: 6.4rem;
  background-color: ${COLORS["light-gray"]};
  padding: ${({large}) => large ? '1.6rem 0' : '1.1rem 0'};
  margin-top: 1.6rem;
  margin-left: 1.6rem;
  border-radius: 5px;
  font-size: ${FONTSIZES.small};
`;


