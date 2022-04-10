import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Button from "components/atoms/Button/Button";
import Pagination from "components/molecules/Pagination";
import { DPPlusIcon } from "icons";

import datas from "utilities/filterData";

import { mailBlastData } from "utilities/campaigndata";

import { TableWrapper, TableHeaderWrapper, Box, ContainerBody } from "./styles";
import DropdownComponent from "components/atoms/Dropdown";
import Checkbox from "components/atoms/CheckBox";

const MailBlastTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Checkbox/>,
      ignoreRowClick: false,
      width: "5rem",
    },
    {
      name: "NAME",
      selector: (row) => row.name,
      width: "20rem",
    },

    {
      name: "ASSIGNEE",
      selector: (row) => row.assignee,
      cell: (col) => <span>Tillie Mendoza</span>,
      width: "45rem",
    },
    {
      name: "TYPE",
      selector: (row) => row.type,
      width: "30rem",
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (col) => <Button className="table-button">Active</Button>,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexLastList = currentPage * itemsPerPage;
  const indexFirstList = indexLastList - itemsPerPage;

  const tableData = mailBlastData.map((mailData, index) => ({
    key: index,
    name: mailData.name,
    assignee: mailData.assignee,
    type: mailData.type,
    status: mailData.status,
  }));

  const currentList = tableData.slice(indexFirstList, indexLastList);

  const onRowClicked = (row, event) => {
    console.log(row, event);
  };

  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/mail-blast");
  };

  return (
    <div>
      <ContainerBody>
        <TableWrapper>
          <TableHeaderWrapper className="table-header">
            <div className="table-header__left">
              <h1>34 Events</h1>
            </div>

            <div className="table-header__right">
              <DropdownComponent data={datas} className="dropdown-campaign" />
              <SearchBar className="search-icon" />
              <Button
                className="campaign-button"
                onClick={() => handleButtonClick()}
              >
                <DPPlusIcon className="plus-icon" />
                Create New
              </Button>
            </div>
          </TableHeaderWrapper>
          <Table
            columns={columns}
            data={currentList}
            onRowClicked={onRowClicked}
          />
        </TableWrapper>
      </ContainerBody>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        data={mailBlastData}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MailBlastTable;
