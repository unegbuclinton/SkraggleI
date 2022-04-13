import { COLORS } from "constants/colors";
import styled from "styled-components";

export const SearchbarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${COLORS.white};
  border: 0.1rem solid ${COLORS["porcelain-white"]};

  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.barOpened ? "30rem" : "2rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 4.8rem;

  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Input = styled.input`
  font-size: 1.4rem;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: ${COLORS.black};
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export const IconWrapper = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  .search-icon {
    width: 2.01rem;
    .icon-container {
      width: 2.01rem;
      height: 2rem;
    }
  }
`;
