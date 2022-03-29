import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import { DPIconClose } from "icons";
import React from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";

const Modal = ({
  isShown,
  hide,
  modalContent,
  header,
  children,
  className,
  rounded,
  showClose,
  ...rest
}) => {
  const modal = (
    <div>
      <Backdrop onClick={hide} />
      <Wrapper rounded {...rest}>
        <Header rounded>
          {showClose && <DPIconClose className="close-btn" onClick={hide} />}
          {header}
        </Header>
        <Content className={className} rounded>
          {modalContent ?? children}
        </Content>
      </Wrapper>
    </div>
  );

  return isShown ? createPortal(modal, document.body) : null;
};

export default Modal;

export const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 8rem;
  z-index: 700;
  width: 65rem;
  outline: 0;
  transform: translateX(-50%);
  max-height: calc(100vh - 14rem);
  /* height: 100%; */
  display: flex;
  flex-direction: column;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${COLORS["shim-black"]};
  z-index: 500;
  cursor: pointer;
`;

export const Header = styled.div`
  background-color: ${COLORS.deepPurple};
  min-height: 7.2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.lg};
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 5px 5px 0 0;
    `};
  .close-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2.1rem;
    cursor: pointer;
  }
`;

export const Content = styled(Card)`
  overflow-y: auto;
  max-height: max-content;
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 0 0 5px 5px;
    `};
`;
