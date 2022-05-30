import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ModalWrapper = styled.form`
  padding: 2.4rem 2.4rem 5.8rem 2.4rem;

  .buttons-container {
    display: flex;
    justify-content: right;
    margin-top: 4rem;
  }
  .add-address-button {
    display: flex;
    justify-content: right;
    margin-top: 4rem;
  }
`;

export const ModalLabel = styled.label`
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
`;

export const ModalInput = styled(Input)`
  border: 1px solid ${COLORS['gray-500']};
  width: 100%;
  margin: 0.9rem 0rem 1.6rem 0rem;
  padding: 2.5rem 2rem 2.5rem 2rem;
  font-size: ${FONTSIZES.xsmall};
  color: ${COLORS['gray-500']};
  border: 1px solid ${COLORS['gray-500']};
`;

export const AddAddressButton = styled(Button)`
  width: 18.2rem;
  height: 5.1rem;
  background-color: ${COLORS.torquoise};
  border-radius: 0.340356rem;
  font-weight: ${FONTWEIGHTS.xbold};
  font-size: 1.47038rem;
  color: ${COLORS['grey-400']};
`;

export const CancelButton = styled(Button)`
  width: 10.7rem;
  height: 5.1rem;
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 0.340356rem;
  background-color: transparent;
  color: ${COLORS['gray-500']};
  margin-right: 1.6rem;
`;

export const SaveButton = styled(Button)`
  width: 20.5rem;
  height: 5.1rem;
  background-color: ${COLORS.pink};
  color: ${COLORS.white};
  border-radius: 0.340356rem;
  font-weight: ${FONTWEIGHTS.xbold};
`;
