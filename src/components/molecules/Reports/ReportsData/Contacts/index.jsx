import { COLORS } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import ContactsMetrics from './ContactsMetrics';
import ContactsOrganizationTable from './ContactsOrganizationTable';
import DonationByContacts from './DonationByContacts';

function Contacts() {
  return (
    <ContactsWrapper>
      <ContactsHeader>
        <h1>Contacts</h1>
      </ContactsHeader>
      <ContactsMetrics />
      <ContactsOrganizationTable />
      <DonationByContacts />
    </ContactsWrapper>
  );
}

export default Contacts;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.4rem 1.8rem 2.4rem 1.8rem;
  border: 1px solid ${COLORS['porcelain-white']};
  margin-top: 2.4rem;
`;

export const ContactsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 3.4rem 2.4rem 0rem;
`;
