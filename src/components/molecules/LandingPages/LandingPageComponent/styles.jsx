import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const LandingPageWrapper = styled.div`
  position: relative;
  /* background: ${COLORS.torquoise}; */
  height: 100%;
  padding-bottom: 4rem;
`;
export const LandingPageEditArea = styled.div`
  width: 100%;
  max-width: 103.1rem;
  height: 61.7rem;
  background-color: ${COLORS.white};
`;

export const LandingPageToolBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7.2rem;
  background-color: ${COLORS.deepPurple};
  padding: 1.2rem 1.6rem;
  margin: 1.6rem 8rem 7.1rem 8rem;
  overflow-x: auto;
`;
export const LandingPageContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  .exit-btn {
    width: 7.9rem;
    height: 4.8rem;
    background-color: ${COLORS['shin-blue']};
    padding: 1.2rem 1.2rem 1.5rem 1.2rem;
  }

  .tool-btn {
    width: 5.4rem;
    height: 4.8rem;
    background-color: ${COLORS['shin-blue']};
  }

  .element-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 10rem;
    height: 4.8rem;
    background-color: ${COLORS['shin-blue']};
  }

  .active {
    background-color: ${COLORS.pink};
  }
`;

export const LandingPageBody = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.7rem;
`;

export const LandingPageSideTools = styled.div`
  width: 35.5rem;

  .add-element__card {
    height: 61.7rem;
    overflow: auto;
  }
`;
4;
export const LandingPageSideToolsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.bold};
  font-size: ${FONTSIZES.lg};
  width: 100%;
  height: 4.8rem;
  background: ${COLORS.deepPurple};
`;
