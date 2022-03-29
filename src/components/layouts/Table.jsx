import { COLORS } from "constants/colors";
import React from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";

const Table = ({ data, columns, handleRowSelect, isLoading, onRowClicked }) => {
  const TableData = React.useMemo(() => data, [data]);
  const TableColumns = React.useMemo(() => columns, [columns]);

  return (
    <TableWrapper>
      <DataTable
        columns={TableColumns}
        data={TableData}
        // selectableRows={!handleRowSelect}
        onRowClicked={onRowClicked}
        onSelectedRowsChange={handleRowSelect}
<<<<<<< HEAD
   
=======
>>>>>>> e738325fd7cd8cd1bb50b3fe13d6293779a0a0fd
      />
    </TableWrapper>
  );
};

export default Table;

const TableWrapper = styled.div`
  .rdt_ {
    &TableRow {
      height: 6.2rem;
      border: 0.0852273px solid ${COLORS["porcelain-white"]};
      border-top: 0;
      cursor: pointer;

      :first-of-type {
        border-top: 0.0852273px solid ${COLORS["porcelain-white"]};
      }
    }
    &TableHeadRow {
      height: 6.1rem;
      background-color: ${COLORS.torquoise};
      border-bottom: 0;
      margin-bottom: 1.6rem;
    }
  }

  #pagination-first-page,
  #pagination-last-page {
    display: none;
  }
`;
