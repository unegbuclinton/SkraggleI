import Card from 'components/atoms/Card';
import Table from 'components/layouts/Table';
import NameLogo from 'components/molecules/NameLogo';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconMessage } from 'icons';
import React from 'react';
import styled from 'styled-components';

function AddedContact() {
  const columns = [
    {
      name: 'FULL NAME',
      cell: (row) => <NameLogo dashboardLogo text={row.fullName} />
    },
    {
      name: 'PRIMARY EMAIL',
      selector: (row) => row.primaryEmail
    },
    {
      name: 'ASSIGNEE',
      selector: (row) => row.assignee,
      when: (row) => row.assignee < 0,
      style: (row) => ({
        color: row.isSpecial ? '#1E003E' : '#1E003E'
      })
      // style: { color: 'yellow' }
    },
    {
      name: 'CREATED',
      selector: (row) => row.created
    },
    {
      name: 'ACTION',
      selector: (row) => row.action,
      cell: () => <DPIconMessage />
    }
  ];

  const data = [
    {
      id: 1,
      fullName: 'Mohammed Adam',
      primaryEmail: 'pqvd@gmailer.com',
      assignee: 'Tushar Imran',
      created: '24th Aug',
      action: ''
    },
    {
      id: 2,
      fullName: 'Mohammed Adam',
      primaryEmail: 'pqvd@gmailer.com',
      assignee: 'Tushar Imran',
      created: '24th Aug',
      action: ''
    },
    {
      id: 3,
      fullName: 'Mohammed Adam',
      primaryEmail: 'pqvd@gmailer.com',
      assignee: 'Tushar Imran',
      created: '24th Aug',
      action: ''
    },
    {
      id: 4,
      fullName: 'Mohammed Adam',
      primaryEmail: 'pqvd@gmailer.com',
      assignee: 'Tushar Imran',
      created: '24th Aug',
      action: ''
    },
    {
      id: 5,
      fullName: 'Mohammed Adam',
      primaryEmail: 'pqvd@gmailer.com',
      assignee: 'Tushar Imran',
      created: '24th Aug',
      action: ''
    }
  ];

  return (
    <AddedContactWrapper>
      <Card>
        <p className="added-contact__text">Recently Added Contacts</p>
        <div className="table-container">
          <Table columns={columns} data={data} />
        </div>
      </Card>
    </AddedContactWrapper>
  );
}

export default AddedContact;

const AddedContactWrapper = styled.div`
  margin-bottom: 1.6rem;

  .added-contact__text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    margin: 0rem 3.9rem 0 3.6rem;
    padding: 2.4rem 0rem 1.7rem 0rem;
    border-bottom: 1px solid ${COLORS.torquoise};
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
