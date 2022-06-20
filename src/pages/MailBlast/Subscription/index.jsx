// import Button from 'components/atoms/Button/Button';
import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
// import DropdownComponent from 'components/atoms/Dropdown';
// import SelectDropDown from 'components/atoms/GenericDropdown';
// import SearchBar from 'components/atoms/SearchBar/SearchBar';
import TableBtn from 'components/atoms/TableButton/TableBtn';
import Table from 'components/layouts/Table';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
// import { COLORS } from 'constants/colors';
// import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import MailButton from '../MailButtons';

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
      selector: (row) => row.first_name + row.last_name,
      width: '20.9rem'
    },
    {
      name: 'PRIMARY EMAIL',
      selector: (row) => row.primary_email
    },
    {
      name: 'EMAIL SUBSCRIPTION STATUS',
      cell: (row) => {
        return row.is_subscribed_to_mailblasts ? (
          <Button pill> OPT-IN</Button>
        ) : (
          <Button> OPT-OUT</Button>
        );
      }
    },
    {
      name: 'TAG',
      cell: (row) => <TableBtn tags={row.tags} />
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
