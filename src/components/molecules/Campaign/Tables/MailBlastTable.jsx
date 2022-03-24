import { React, useState } from "react";

import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Button from "components/atoms/Button/Button";
import Modal from "components/layouts/Modal";
import { DPPlusIcon } from "icons";

import datas from "utilities/filterData";

import { mailBlastData } from "utilities/campaigndata";

import { TableWrapper, TableHeaderWrapper, Box } from "./styles";

const MailBlastTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Box type="checkbox"></Box>,
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
      cell: (col) => 
      <span>Tillie Mendoza</span>,
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

  const data = mailBlastData.map((d, index) => ({
    key: index,
    name: d.name,
    assignee: d.assignee,
    type: d.type,
    status: d.status,
  }));

  const onRowClicked = (row, event) => {
    console.log(row, event);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <TableWrapper>
      <TableHeaderWrapper className="table-header">
        <div className="table-header__left">
          <h1>34 Events</h1>
        </div>

        <div className="table-header__right">
          <CustomDropdown className="dropdown-filter" data={datas} />
          <SearchBar className="search-icon" />
          <Button
            className="campaign-button"
            onClick={() => setModalIsOpen(true)}
          >
            <DPPlusIcon className="plus-icon" />
            Create New
          </Button>
          <Modal isShown={modalIsOpen} showClose></Modal>
        </div>
      </TableHeaderWrapper>
      <Table columns={columns} data={data} onRowClicked={onRowClicked} />
    </TableWrapper>
  );
};

export default MailBlastTable;
