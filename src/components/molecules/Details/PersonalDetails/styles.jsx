import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import { FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const CardWrapper = styled(Card)`
  padding: 0 0.8rem 2.488rem 0.8rem;
  min-width: 34.628rem;
  height: 80%;
  overflow-y: auto;
`;

export const ContentsWrapper = styled.div`
  .icon-container {
    display: flex;
    justify-content: flex-end;
    position: relative;
    right: 2.4rem;
    bottom: 0;
    top: 1.6rem;
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
    }
  }
  .highlight {
    padding: 9.954rem 0 0 2.526rem;
    &__heading {
      color: ${COLORS.deepPurple};
      font-weight: ${FONTWEIGHTS.medium};
      font-size: ${FONTSIZES.base};
    }

    &__phone {
      color: ${COLORS['grey-200']};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.xsmall};
      padding-top: 3.2rem;
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

  .address {
    padding: 3.2rem 0 0 2.526rem;
    &__heading {
      color: ${COLORS['grey-200']};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.xsmall};
    }

    &__container {
      color: ${COLORS.deepPurple};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.small};
      padding-top: 0.8rem;
      width: 17rem;
      line-height: 2rem;
    }
  }

  .assignee {
    padding: 3.2rem 0 0 2.526rem;
    &__heading {
      color: ${COLORS['grey-200']};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.xsmall};
    }

    &__name {
      color: ${COLORS.deepPurple};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.small};
      padding-top: 0.8rem;
    }
  }

  .priority {
    padding: 3.2rem 0 0 2.526rem;
    &__heading {
      color: ${COLORS['grey-200']};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.xsmall};
    }

    &__name {
      color: ${COLORS.deepPurple};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.small};
      padding-top: 0.8rem;
    }
  }

  .tags {
    padding: 3.2rem 0 0 2.526rem;
    &__heading {
      color: ${COLORS['grey-200']};
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.xsmall};
    }

    .tags__btn {
      background-color: ${COLORS['bg-grey-btn']};
      color: ${COLORS['gray-500']};
      margin-top: 1.4rem;
    }
  }
`;

export const Line = styled.div`
  width: 33.028rem;
  border: 0.1rem ${COLORS.torquoise} solid;
  margin-top: 1.6rem;
`;
