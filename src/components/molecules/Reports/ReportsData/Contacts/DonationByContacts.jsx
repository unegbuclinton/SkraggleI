import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconChevronDown } from 'icons';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatDate } from 'utilities/helpers';

function DonationByContacts() {
  const { contactDonation } = useSelector((state) => state.report);
  const columns = [
    {
      name: '',
      selector: (row) => row.contact,
      cell: () => <Checkbox />,
      width: '3.069rem'
    },
    {
      name: 'ID',
      selector: (row) => row.id
    },
    {
      name: 'NAME',
      cell: (row) => {
        row?.contact?.first_name;
      }
    },
    {
      name: 'DATE',
      selector: (row) => formatDate(row.created_at)
    },
    {
      name: 'STATUS',
      selector: (row) => row.status
    },
    {
      name: 'METHOD',
      selector: (row) => row.method
    },
    {
      name: 'AMOUNT',
      selector: (row) => row.amount
    },
    {
      name: 'SOURCE',
      selector: (row) => row.source
    }
  ];

  return (
    <TableWrapper>
      <TableHeader>
        <h1>DONATIONS BY CONTACTS</h1>
        <DPIconChevronDown />
      </TableHeader>
      <Table columns={columns} data={contactDonation} />
    </TableWrapper>
  );
}

export default DonationByContacts;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 4rem;
`;

export const TableHeader = styled.div`
  display: flex;
  background-color: ${COLORS.torquoise};
  justify-content: space-between;
  padding: 1.3rem 3.3rem 1.3rem 4.5rem;
  align-items: center;
  h1 {
    font-size: ${FONTSIZES.xsmall};
    font-weight: ${FONTWEIGHTS.normal};
    line-height: 14px;
    color: ${COLORS['grey-400']};
  }
`;
