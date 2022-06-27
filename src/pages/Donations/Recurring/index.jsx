import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RecurringModal from '../DonationModals/RecurringModal';

function DonationRecurring() {
  const { recurringData } = useSelector((state) => state.donation);

  const [showModal, setShowModal] = useState(false);
  const columns = [
    {
      name: '',
      cell: () => <Checkbox />,
      width: '3.069rem'
    },
    {
      name: 'Contact',
      selector: (row) => row?.contact_id,
      width: '30.725rem'
    },
    {
      name: 'AMOUNT',
      selector: (row) => row?.amount,
      width: '30.766rem'
    },
    {
      name: 'BILLING CYCLE',
      selector: (row) => row?.billing_cycle,
      width: '20.494rem'
    },
    {
      name: 'STATUS',
      cell: (row) => (
        <Button pill success>
          {row?.status}
        </Button>
      ),
      width: '20.494rem'
    },
    {
      name: 'TYPE',
      selector: (row) => row?.type
    }
  ];

  return (
    <RecurringWrapper>
      <Card className="recurring-card">
        <div className="recurring-header">
          <TableHeader
            className="table-header"
            header={`${recurringData?.length} Recurrings`}
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
          <Table columns={columns} data={recurringData} />
        </div>
      </Card>
    </RecurringWrapper>
  );
}
export default DonationRecurring;

const RecurringWrapper = styled.div`
  margin-bottom: 1.6rem;
  height: 100%;
  overflow: auto;
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
      color: ${COLORS['header-grey']};
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
