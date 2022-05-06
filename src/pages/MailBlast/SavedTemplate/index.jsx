import React, { useState } from 'react';
import styled from 'styled-components';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import Card from 'components/atoms/Card';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import Pagination from 'components/molecules/Pagination';
import CreateTemplateModal from '../MailblasModals/CreateTemplate';
import Checkbox from 'components/atoms/CheckBox';

function SavedTemplate() {
  const [show, setShow] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const columns = [
    {
      name: '',
      selector: (row) => row.contact,
      cell: (row) => <Checkbox />,
      width: '3.069rem'
    },
    {
      name: 'NAME',
      selector: (row) => row.name,
      width: '78.7rem'
    },
    {
      name: 'CREATED',
      selector: (row) => row.created
    }
  ];

  const data = [
    {
      action: '',
      name: 'Monthly newsletter',
      created: 'Dec 7, 2021'
    }
  ];

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);

  return (
    <TemplateWrapper>
      <Card className="template-card">
        <div className="template-header">
          <TableHeader
            className="table-header"
            header="1 Custom Template"
            title="Create Template"
            setOpen={setShow}
          />
          {show && <CreateTemplateModal isShown={show} onCloseModal={() => setShow(false)} />}
        </div>

        <div className="table-container">
          <Table
            columns={columns}
            currentList={currentList}
            data={data}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </Card>
      <Pagination
        currentList={currentList}
        data={data}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </TemplateWrapper>
  );
}

export default SavedTemplate;

const TemplateWrapper = styled.div`
  margin-bottom: 1.6rem;

  .template-card {
    padding-top: 1.6rem;
    margin-top: 1.6rem;
  }

  .template-header {
    margin: 1.6rem 2.4rem 0 3.6rem;

    .template-btn {
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

  .template-btn {
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
