import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const DetailsSubHeading = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xlarge};
  color: ${COLORS.black};
  margin-bottom: 1.6rem;
  /* padding-left: 2.5rem; */
`;

export const DetailLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
`;

export const EventWrapper = styled.div`
  border-bottom: ${COLORS.torquoise} 0.1rem solid;
  width: 100%;
  /* padding-left: 2.5rem; */

  .text-editor {
    width: 614px;
    height: 306px;
    border: 1px solid #9a9aa9;
    border-radius: 5px;
    margin-bottom: 2.4rem;
  }

  .details-input {
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 2.4rem 0;
  }

  .message-input {
    height: 10.9rem;
    width: 100%;
    margin-top: 0.8rem;
    padding: 2.2rem 0 6.6rem 2.083rem;
  }

  .editor-container {
    /* display: flex;
    gap: 4.6rem; */
    &__upload {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin-bottom: 2.4rem;
    }
    .upload-button {
      width: 12.6rem;
      height: 8.1rem;
    }
  }
`;
