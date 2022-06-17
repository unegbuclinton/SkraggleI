import Card from 'components/atoms/Card';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function UpcomingContact() {
  const columns = [
    {
      name: '',
      selector: (row) => row.contact,
      cell: () => <input type="checkbox" />,
      width: '3.069rem'
    },
    {
      name: 'Contact',
      selector: (row) => row.contact
    },
    {
      name: 'TO-DO',
      selector: (row) => row.toDo
    },
    {
      name: 'Due Date',
      selector: (row) => row.dueDate
    },
    {
      name: 'Status',
      selector: (row) => row.status
    }
  ];

  const data = [
    {
      id: 1,
      contact: 'Mohammed Adam',
      toDo: 'Details',
      dueDate: '24th Aug',
      status: 'Incomplete'
    },
    {
      id: 2,
      contact: 'Mohammed Adam',
      toDo: 'Details',
      dueDate: '24th Aug',
      status: 'Incomplete'
    },
    {
      id: 3,
      contact: 'Mohammed Adam',
      toDo: 'Details',
      dueDate: '24th Aug',
      status: 'Incomplete'
    },
    {
      id: 4,
      contact: 'Mohammed Adam',
      toDo: 'Details',
      dueDate: '24th Aug',
      status: 'Incomplete'
    }
  ];
  return (
    <UpcomingWrapper>
      <Card>
        <p className="upcoming-header__text">Upcoming Contact To-Do&#39;s</p>
        <div className="table-container">
          <Table columns={columns} data={data} />
        </div>
      </Card>
    </UpcomingWrapper>
  );
}

export default UpcomingContact;

const UpcomingWrapper = styled.div`
  margin-bottom: 1.6rem;

  .upcoming-header__text {
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
