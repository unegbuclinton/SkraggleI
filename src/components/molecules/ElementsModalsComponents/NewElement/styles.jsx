import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ElementModalWrapper = styled.div`
  padding: 3.2rem 0 3.2rem 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  .input-field {
    border-radius: 0;
    width: 100%;
    background-color: ${COLORS.torquoise};
    margin-bottom: 3.2rem;
  }
`;

export const SearchWrapper = styled.div`
  height: 4.4rem;
  width: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid ${COLORS.torquoise};
  .search {
    width: 1.5rem;
  }
`;

export const ElementWrapper = styled.div`
  border-top: 0.1rem solid ${COLORS.torquoise};
  padding-left: 4.2rem;
`;

export const ElementButton = styled.h2`
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['navy-blue']};
  padding-top: 2.4rem;
  cursor: default;
`;

export const ElementText = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.base};
  color: ${COLORS['grey-400']};
  padding: 0.8rem 0 2.4rem 0;
`;
