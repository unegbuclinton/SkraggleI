import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ActiveInactiveWrapper = styled(Card)`
  padding: 3.1rem 2.4rem 2.4rem 2.4rem;
  margin-top: 1.6rem;
`;

export const Container = styled.div`
  .events-table {
    .rdt_ {
      &TableRow {
        padding-left: 3rem;
      }
      &TableHeadRow {
        padding-left: 3rem;
      }
    }
  }
`;

export const ViewWrapper = styled.div`
  text-align: justify;
  .title {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS['gray-500']};
  }

  .view {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS['grey-400']};
    white-space: nowrap;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  .action {
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['grey-500']};
    cursor: pointer;
  }

  .delete {
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS.pink};
    cursor: pointer;
  }
`;
