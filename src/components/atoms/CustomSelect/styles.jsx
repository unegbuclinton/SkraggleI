import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const DropdownWrapper = styled.div`
  .dropdown {
    position: relative;

    &__selected {
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      padding: 0 20px 0 10px;
      font-size: 14px;
      border: 1px solid $border-color;
      position: relative;
      cursor: pointer;
      transition: box-shadow 0.3s ease;

      &::after {
        top: calc(50% - 2px);
        right: 10px;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        border-top-color: #000;
        border-width: 4px;
        margin-left: -4px;
      }

      &:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      }
    }

    &__menu {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      border: 1px solid $border-color;
      border-top: 0;
      background-color: #fff;
      z-index: 5;

      &_items {
        max-height: 210px;
        overflow-y: auto;
      }

      &_search {
        display: block;
        width: 100%;
        border: 0;
        border-bottom: 1px solid $border-color;
        padding: 12px;
        outline: 0;
        background-color: $bg-color;
      }

      &_item {
        padding: 10px;
        border-bottom: 1px solid $border-color;
        font-size: 14px;
        cursor: pointer;

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          background-color: $border-color;
        }

        &.selected,
        &.selected:hover {
          background-color: $primary-color;
          color: #fff;
        }
      }
    }
  }
`;

export const FormWrapper = styled.div`
  .form {
    border: 1px solid $border-color;
    padding: 40px;

    &__group {
      margin-bottom: 20px;

      &:focus {
        outline: 0;
      }

      label {
        display: block;
        font-size: 14px;
        margin-bottom: 5px;
      }
    }
  }
`;
