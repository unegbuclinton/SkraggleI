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
    background-color: rgba(125, 194, 55, 0.2);
    border-radius: 40px;
    color: #00913a;
    text-align: center;
    line-height: 140%;

    &__clone {
      font-size: ${FONTSIZES.xsmall};
      line-height: 1.4rem;
      width: 4rem;
      height: 3rem;
      margin-right: 4.6rem;
      background-color: ${COLORS.white};
      color: ${COLORS.black};
      border: none;
      text-align: center;
    }
    &__edit {
      font-size: ${FONTSIZES.xsmall};
      line-height: 1.4rem;
      width: 4rem;
      height: 3rem;
      margin-right: 4.6rem;
      background-color: ${COLORS.white};
      color: ${COLORS.black};
      border: none;
      text-align: center;
    }
    &__remove {
      font-size: ${FONTSIZES.xsmall};
      line-height: 1.4rem;
      width: 4rem;
      height: 3rem;
      background-color: ${COLORS.white};
      color: ${COLORS.pink};
      border: none;
      text-align: center;
    }
    &__view {
      font-size: ${FONTSIZES.xsmall};
      line-height: 1.4rem;
      margin-right: 4.5rem;
      width: 4rem;
      height: 3rem;
      color: rgba(0,0,0,1);
      background-color: ${COLORS.white};
      border: none;
      text-align: center;
    }
    &__testing {
      font-size: ${FONTSIZES.xsmall};
      line-height: 1.4rem;
      margin-right: 4.5rem;
      width: 7rem;
      height: 3rem;
      color: rgba(0,0,0,1);
      background-color: ${COLORS.white};
      border: none;
      text-align: center;
    }
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
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 0.6rem;
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

export const Box = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  /* background-color: ${COLORS.torquoise}; */
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
