import Button from 'components/atoms/Button/Button';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'constants/colors';
import { FONTWEIGHTS } from 'constants/font-spec';

function SmartWidget() {
  return (
    <>
      <WidgetCard>
        <div className="card-detail">
          <h1 className="card-detail__header">Donation Goals</h1>
          <p className="card-detail__description">
            View and manage your organization&#39;s donation goals
          </p>
        </div>
        <div>
          <Button className="btn-card" auth>
            Add
          </Button>
        </div>
      </WidgetCard>
    </>
  );
}

export default SmartWidget;

const WidgetCard = styled.div`
  width: 39.5rem;
  margin: 2.4rem 0 0.8rem 0;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${COLORS['porcelain-white']};
  padding: 1.6rem 1rem 2.2rem 1.6rem;
  margin: 2.4rem 0 0.8rem 0;

  .btn-card {
    width: 7.2rem;
    height: 3.6rem;
  }

  .card-detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__header {
      font-size: 1.4rem;
      margin-bottom: 0.6rem;
      font-weight: ${FONTWEIGHTS.normal};
    }
    &__description {
      font-size: 1.2rem;
      color: ${COLORS['grey-200']};
    }
  }
`;
