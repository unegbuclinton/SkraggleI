import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ContainerBody = styled(Card)`
  margin-top: 1.6rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  padding-bottom: 2.4rem;
`;

export const TableWrapper = styled(Card)`
  padding: 2.4rem;
  margin-top: 1.6rem;
`;

export const TableHeaderWrapper = styled.div`
  display: flex;
  padding-top: 1.6rem;
  margin-bottom: 1.6rem;
  h1 {
    display: flex;
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.lg};
    line-height: 21px;
    color: ${COLORS['gray-1']};
  }

  .table-header {
    &__left {
      display: flex;
      flex-direction: row;
      padding-top: 0.8rem;
    }

    &__right {
      display: flex;
      flex-grow: 9;
      flex-direction: row;
      justify-content: right;

      .dropdown-filter {
        margin-right: 1.6rem;
      }

      .p2p-button {
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        width: 18.3rem;
        height: 4.8rem;
        margin-left: 1.6rem;
      }

      .plus-icon {
        margin-right: 0.6rem;
      }
    }
  }
`;

export const Box = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ArchiveWrapper = styled.div`
  display: flex;

  .archive-wrapper {
    &__box {
      width: 100%;
      height: 7rem;
      border: 0.852273px solid #e2e6ff;
      display: flex;
      margin-top: 3.2rem;
      padding-left: 3.6rem;
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
    }

    &__heading {
      font-style: normal;
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.lg};
      line-height: 2.1rem;
      text-align: center;
      color: ${COLORS['black-shade']};
    }
  }
`;
