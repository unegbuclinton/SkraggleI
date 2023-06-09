import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.596rem;
  .dropdown-btn {
    height: 3.4rem;
    background-color: ${COLORS.white};
    color: ${COLORS.pink};
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    border: 0.1rem ${COLORS.pink} solid;
    width: 10rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    .icon-dropdown {
      fill: ${COLORS.pink};
      stroke: ${COLORS.pink};
      margin-left: 1rem;
    }
    &:hover {
      background-color: ${COLORS.pink};
      color: ${COLORS.white};
      .icon-dropdown {
        color: ${COLORS.white};
        fill: ${COLORS.white};
      }
    }
  }
  .header {
    display: flex;
    gap: 3rem;
    .select-dropdown {
      width: 14.4rem;
    }

    .react-select__control {
      height: 4.8rem;
      border-radius: 0;
      border: 1px solid ${COLORS['porcelain-white']};
    }

    .react-select__placeholder {
      color: ${COLORS['grey-400']};
    }

    .react-select__dropdown-indicator {
      color: ${COLORS['grey-400']};
    }

    &__header-btn {
      padding: 0 1.5rem 0 1.5rem;
      border-radius: 0;
      height: 4.8rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      &--icon {
        width: 2rem;
      }
    }

    .header-button {
      padding: 0 3.5rem 0 3.5rem;
      border-radius: 0;
      height: 4.8rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      .dropdown-icon {
        fill: ${COLORS.white};
      }
    }
  }
`;

export const ActionWrapper = styled.div`
  text-align: center;
  position: absolute;
  width: 15rem;
  background-color: ${COLORS.white};
  z-index: 1;
  top: 5rem;
  box-shadow: -0.5rem 0.5rem 0.5rem rgb(0 0 0 / 8%);
  .delete-icon {
    fill: ${COLORS.black};
  }
`;

export const Action = styled.p`
  font-size: ${FONTSIZES.small};
  cursor: pointer;
`;

export const HeadingAction = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  align-items: center;
`;

export const ActionContentWrapper = styled.div``;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownInfo = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['header-grey']};
  margin-top: 1.52rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem;
  &:hover {
    background-color: ${COLORS['garage-mix-grey']};
  }
  .achived-icon {
    width: 2rem;
    height: 2.1rem;
  }
`;
