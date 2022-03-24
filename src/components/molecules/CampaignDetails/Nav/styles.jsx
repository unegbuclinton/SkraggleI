import styled, { css } from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.div`
  display: flex;
  height: 8rem;
  border: 1px solid #e2e6ff;
  box-sizing: border-box;
  width: 115.2rem;
  margin-top: 1.6rem;
  margin-left: 1.6rem;
`;

export const Navlinks = styled(NavLink)`
  /* text-decoration: none;
  height: 3.2rem;
  margin-left: 9.5rem;
  margin-top: 3.2rem;
  font-family: "Inter";
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.small};
  line-height: 17px;
  text-align: center;
  color: ${COLORS["grey-400"]};

  &.active {
    border-bottom: 2px solid red;
  } */
`;
