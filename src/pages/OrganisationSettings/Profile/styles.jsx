import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  overflow: hidden;
  height: 100%;
  margin-top: 1.6rem;
  padding-bottom: 4rem;
`;

export const CardWrapper = styled(Card)`
  padding: 0 0.8rem 0rem 0.8rem;
  height: 100%;
  /* overflow-y: auto; */
`;

export const ContentsWrapper = styled.div`
  .icon-container {
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin: 6.2rem 9.436rem 0 0;
    left: 3rem;
    top: 2rem;
    bottom: 0;
    &__pen-icon {
      width: 2.6rem;
    }
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__circle {
      background-color: ${COLORS.deepPurple};
      height: 8rem;
      width: 8rem;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.846rem;
      &--text {
        color: ${COLORS.white};
        font-size: ${FONTSIZES.xxlarge};
        font-weight: ${FONTWEIGHTS.bold};
      }
    }
    &__name {
      color: ${COLORS.deepPurple};
      font-weight: ${FONTWEIGHTS.bold};
      font-size: ${FONTSIZES.base};
      margin-bottom: 6.154rem;
    }
  }
  .highlight {
    padding: 0 0 0 2.526rem;
    &__phone {
      color: ${COLORS['grey-200']};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.xsmall};
      padding-top: 2.4rem;
    }
    &__phone-number {
      color: ${COLORS.deepPurple};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.small};
      padding-top: 0.8rem;
    }
  }

  .primary {
    padding: 2.4rem 0 0 2.526rem;
    &__heading {
      color: ${COLORS['grey-200']};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.xsmall};
    }
    &__email {
      color: ${COLORS.deepPurple};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.small};
      padding-top: 0.8rem;
    }
  }
`;

export const Line = styled.div`
  width: 33.028rem;
  border: 0.1rem ${COLORS.torquoise} solid;
  margin-top: 1.6rem;
`;

export const Container = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
`;
