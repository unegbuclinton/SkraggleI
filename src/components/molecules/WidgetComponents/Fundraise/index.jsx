import Button from "components/atoms/Button/Button";
import React from "react";
import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTWEIGHTS } from "constants/font-spec";

function FundRaise() {
  return (
    <>
      <WidgetCard>
        <div className="card-detail">
          <h1 className="card-detail__header">Donation Goals</h1>
          <p className="card-detail__description">
            View and manage your organization's donation goals
          </p>
        </div>
        <div>
          <Button className="btn-card" auth>
            Add
          </Button>
        </div>
      </WidgetCard>
      <WidgetCard>
        <div className="card-detail">
          <h1 className="card-detail__header">Revenue Goals</h1>
          <p className="card-detail__description">
            View and manage your organization's revenue goals
          </p>
        </div>
        <div>
          <Button className="btn-card" auth>
            Add
          </Button>
        </div>
      </WidgetCard>
      <WidgetCard>
        <div className="card-detail">
          <h1 className="card-detail__header">Recent Transactions</h1>
          <p className="card-detail__description">
            View the recent Donations and Revenues contributed to your
            organization
          </p>
        </div>
        <div>
          <Button className="btn-card" auth>
            Add
          </Button>
        </div>
      </WidgetCard>
      <WidgetCard>
        <div className="card-detail">
          <h1 className="card-detail__header">
            Upcoming Recurring Transactions
          </h1>
          <p className="card-detail__description">
            View the upcoming recurring transactions
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

export default FundRaise;

const WidgetCard = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${COLORS["porcelain-white"]};
  padding: 1.6rem 1rem 2.2rem 1.6rem;
  margin-bottom: 0.8rem;

  .btn-card {
    width: 7.2rem;
    height: 3.6rem;
  }

  .card-detail{
    display: flex;
    flex-direction:column;
    align-items: flex-start;
  

    &__header{
      font-size: 1.4rem;
      margin-bottom: .6rem;
      font-weight: ${FONTWEIGHTS.normal}
    }
    &__description{
      font-size: 1.2rem;
      color: ${COLORS['grey-200']};

    }
  }
`;
