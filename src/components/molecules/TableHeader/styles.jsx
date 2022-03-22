import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .header {
    display: flex;
    gap: 3rem;

    &__header-btn {
      padding: 0;
      border-radius: 0;
      height: 4.8rem;
      width: 14.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      &--icon {
        width: 2rem;
      }
    }
  }
`;
