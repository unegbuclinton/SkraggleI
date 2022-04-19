import React, { useState } from "react";
import styled from "styled-components";
import Table from "components/layouts/Table";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import Card from "components/atoms/Card";
import TableHeader from "components/molecules/TableHeader/TableHeader";
import Button from "components/atoms/Button/Button";
import RecurringModal from "../DonationModals/RecurringModal";
import Checkbox from "components/atoms/CheckBox";

function DonationRecurring() {
  const [showModal, setShowModal] = useState(false);
  const columns = [
    {
      name: "",
      selector: (row) => row.contact,
      cell: (row) => <Checkbox />,
      width: "3.069rem",
    },
    {
      name: "Contact",
      selector: (row) => row.contact,
      width: "30.725rem",
    },
    {
      name: "AMOUNT",
      selector: (row) => row.amount,
      width: "30.766rem",
    },
    {
      name: "BILLING CYCLE",
      selector: (row) => row.billingCycle,
      width: "35.494rem",
    },
    {
      name: "STATUS",
      cell: (ow) => (
        <Button pill success className="mail-btn">
          Active
        </Button>
      ),
      width: "35.494rem",
    },
    {
      name: "TYPE",
      selector: (row) => row.type,
    },
  ];

  const recurringData = [
    {
      id: 1,
      contact: "Mohammed Adam",
      amount: "$500.00",
      billingCycle: "Monthly",
      status: "",
      type: "Gift",
    },
    {
      id: 2,
      contact: "Mohammed Adam",
      amount: "$500.00",
      billingCycle: "Monthly",

      type: "Gift",
    },
    {
      id: 3,
      contact: "Mohammed Adam",
      amount: "$500.00",
      billingCycle: "Monthly",
      type: "Gift",
    },
    {
      id: 4,
      contact: "Mohammed Adam",
      amount: "$500.00",
      billingCycle: "Monthly",
      type: "Gift",
    },
    {
      id: 5,
      contact: "Mohammed Adam",
      amount: "$500.00",
      billingCycle: "Monthly",
      type: "Gift",
    },
    {
      id: 6,
      contact: "Mohammed Adam",
      amount: "$500.00",
      billingCycle: "Monthly",
      type: "Gift",
    },
    {
      id: 7,
      contact: "Mohammed Adam",
      amount: "$500.00",
      billingCycle: "Monthly",
      type: "Gift",
    },
    {
      id: 8,
      contact: "Mohammed Adam",
      amount: "$500.00",
      billingCycle: "Monthly",
      type: "Gift",
    },
    {
      id: 9,
      contact: "Mohammed Adam",
      amount: "$500.00",
      billingCycle: "Monthly",
      type: "Gift",
    },
    {
      id: 10,
      contact: "Mohammed Adam",
      amount: "$500.00",
      billingCycle: "Monthly",
      type: "Gift",
    },
  ];

  const mail = recurringData.map((data, index) => ({
    key: index,
    contact: data.contact,
    amount: data.amount,
    date: data.date,
    billingCycle: data.billingCycle,
    type: data.type,
  }));

  return (
    <RecurringWrapper>
      <Card className="recurring-card">
        <div className="recurring-header">
          <TableHeader
            className="table-header"
            header="1,014 recurrings"
            title="Create New"
            setOpen={setShowModal}
          />
          {showModal && (
            <RecurringModal
              onCloseModal={() => {
                setShowModal(false);
              }}
            />
          )}
        </div>
        <div className="table-container">
          <Table columns={columns} data={mail} />
        </div>
      </Card>
    </RecurringWrapper>
  );
}
export default DonationRecurring;

const RecurringWrapper = styled.div`
  margin-bottom: 1.6rem;
  .recurring-card {
    padding-top: 1.6rem;
    margin-top: 1.6rem;
  }
  .recurring-header {
    margin: 1.6rem 2.4rem 0 3.6rem;
    .recurring-btn {
      width: 18.3rem;
      height: 4.8rem;
      text-align: center;
    }
    &__right {
      display: flex;
      gap: 1.6rem;
    }
    .table-header {
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS["header-grey"]};
    }
  }
  .recurring-btn {
    width: 9.173rem;
    height: 3rem;
  }
  .table-container {
    padding: 1.6rem 2.4rem 4.2rem 2.4rem;
    .rtd_ {
      &TableCol {
        padding-left: 3.4rem;
      }
    }
  }
`;
