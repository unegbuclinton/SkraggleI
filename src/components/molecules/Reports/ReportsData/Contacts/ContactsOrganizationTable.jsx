import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconChevronDown } from 'icons';
import React from 'react';
import styled from 'styled-components';

function ContactsOrganizationTable() {
  const columns = [
    {
      name: '',
      selector: (row) => row.contact,
      cell: () => <Checkbox />,
      width: '3.069rem'
    },
    {
      name: 'ORGANIZATIONS',
      selector: (row) => row.organization,
      width: '30.725rem'
    },
    {
      name: 'NO OF CONTACTS',
      selector: (row) => row.contact,
      width: '30.766rem'
    },
    {
      name: '% OF CONTACTS',
      selector: (row) => row.noOfContacts,
      width: '35.494rem'
    }
  ];

  const recurringData = [
    {
      id: 1,
      organization: 'Lorem Ipsam',
      contact: '$500.00',
      noOfContacts: 'Monthly'
    },
    {
      id: 2,
      organization: 'Lorem Ipsam',
      contact: '$500.00',
      noOfContacts: 'Monthly'
    },
    {
      id: 3,
      organization: 'Lorem Ipsam',
      contact: '$500.00',
      noOfContacts: 'Monthly'
    },
    {
      id: 4,
      organization: 'Lorem Ipsam',
      contact: '$500.00',
      noOfContacts: 'Monthly'
    },
    {
      id: 5,
      organization: 'Lorem Ipsam',
      contact: '$500.00',
      noOfContacts: 'Monthly'
    },
    {
      id: 6,
      organization: 'Lorem Ipsam',
      contact: '$500.00',
      noOfContacts: 'Monthly'
    }
  ];

  return (
    <TableWrapper>
      <TableHeader>
        <h1>CONTACTS BY ORGANIZATION</h1>
        <DPIconChevronDown />
      </TableHeader>
      <Table columns={columns} data={recurringData} />
    </TableWrapper>
  );
}

export default ContactsOrganizationTable;

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
