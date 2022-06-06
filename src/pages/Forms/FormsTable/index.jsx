import Table from 'components/layouts/Table';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { columns, data } from 'utilities/formsData';
import { TableWrapper } from './styles';
function FormsTable() {
  const navigate = useNavigate();
  const onRowClicked = () => {
    let path = 'general-settings';
    navigate(path);
  };
  return (
    <TableWrapper>
      <TableHeader header="88 Forms" title="Create New" />
      <Table columns={columns} onRowClicked={onRowClicked} data={data} />
    </TableWrapper>
  );
}

export default FormsTable;
