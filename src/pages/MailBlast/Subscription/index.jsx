import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';
import Table from 'components/layouts/Table';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Subscription() {
  const { subscriptionStatus } = useSelector((state) => state.mailBlast);

  const [getId, setGetId] = useState([]);
  const [rowCount, setRowCount] = useState(null);
  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };
  const columns = [
    {
      name: 'FULL NAME',
      selector: (row) => row?.name || `${row?.first_name} ${row?.last_name}`,
      width: '20.9rem'
    },
    {
      name: 'PRIMARY EMAIL',
      selector: (row) => row.primary_email || row.email
    },
    {
      name: 'EMAIL SUBSCRIPTION STATUS',
      cell: (row) => {
        return row.is_subscribed_to_mailblasts ? (
          <Button success pill>
            OPT-IN
          </Button>
        ) : (
          <Button error pill>
            OPT-OUT
          </Button>
        );
      }
    },
    {
      name: 'TAG',
      cell: (row) => {
        return <TableBtn tags={row.tags} />;
      }
    }
  ];

  return (
    <MailWrapper>
      <Card className="mail-card">
        <TableHeader
          header={`${subscriptionStatus?.length} Subscription`}
          selectRow={`${rowCount} Selected`}
          show={!!getId.length}
        />

        <Table
          columns={columns}
          data={subscriptionStatus}
          selectableRows
          selectableRowsComponent={Checkbox}
          handleRowSelect={handleSelect}
        />
      </Card>
    </MailWrapper>
  );
}

export default Subscription;

const MailWrapper = styled.div`
  margin-top: 1.6rem;

  .mail-card {
    padding: 2.4rem;
  }
`;
