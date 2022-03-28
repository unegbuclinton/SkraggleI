import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const WidgetWrapper = styled.div`
  width: 65rem;

  .active-widget {
    text-decoration: none;
    position: relative;
    margin: 0 0 4.7rem 5.4rem;
    color: ${COLORS['grey-400']};
    font-size: ${FONTSIZES.normal};
    font-weight: ${FONTWEIGHTS.bold};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -1.9rem;
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 50%;
      background-color: ${COLORS.pink};
    }
  }

  .non-active-widget {
    width: 10.3rem;
    text-decoration: none;
    font-size: ${FONTSIZES.normal};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['moore-grey']};
    margin: 0 0 4.7rem 5.4rem;
  }

  .widget-container {
    display: flex;
    gap: 9rem;
    border-bottom: 1px solid ${COLORS['porcelain-white']};

    .widget-links {
      display: flex;
      flex-direction: column;
      margin-top: 3.9rem;
    }
    .widget-content {
      margin: 2.4rem 2.4rem 0 0;
    }
  }
`;

export const WidgetBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2.4rem;
  margin-top: 1.1rem;

  .btn-wrapper {
    width: 14rem;
    margin-bottom: 2.4rem;
  }
  .widget-btn {
    height: 4.8rem;
  }
`;
