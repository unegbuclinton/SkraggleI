import { COLORS } from 'constants/colors';
import { FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const GeneralWrapper = styled.div`
  .general-card {
    padding-bottom: 7.527rem;
    margin-bottom: 1.6rem;
  }
  .general-update-dropdown {
    width: 14.4rem;
    position: relative;
  }
  .react-select__control {
    height: 4.8rem;
    border-radius: 0;
    border: 1px solid ${COLORS['porcelain-white']};
  }
`;

export const GeneralHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.6rem 1.2rem 3.9rem;

  .body-text {
    font-size: 1.8rem;
    font-weight: ${FONTWEIGHTS.bold};
    color: ${COLORS['header-grey']};
  }
  .dropdown {
    width: 14.4rem;
    height: 4.8rem;
    background-color: white;
    color: #000;
  }
`;

export const GeneralBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  margin: 0rem 3.1rem 0rem 3.9rem;
  padding-top: 5.227rem;
  border-top: 1px solid ${COLORS.torquoise};
  .body--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__number {
      font-size: 2.4rem;
      font-weight: ${FONTWEIGHTS.bold};
      margin: 0;
    }
    &__text {
      font-size: 1.2rem;
      margin: 0;
      padding-top: 2.146rem;
      font-weight: ${FONTWEIGHTS.normal};
      color: #13293d;
      opacity: 0.6;
    }
  }
`;
