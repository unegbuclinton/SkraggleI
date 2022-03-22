import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const TableWrapper = styled.div`
  .campaign-table {
    margin-top: 1.6rem;
  }

  .table-button {
    padding: 0;
    width: 9.173rem;
    height: 3rem;
    background-color: #7dc237;
    opacity: 0.2;
    border-radius: 40px;
    color: #00913a;
    text-align: center;
    line-height: 140%;
  }
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
    color: ${COLORS["gray-1"]};
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

      .campaign-button {
        width: 14.4rem;
        height: 4.8rem;
        margin-left: 1.6rem;
      }

      .plus-icon {
        margin-right: 0.6rem;
      }
    }
  }
`;

export const Box = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${COLORS.torquoise};
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
      color: ${COLORS["black-shade"]};
    }
  }
`;
