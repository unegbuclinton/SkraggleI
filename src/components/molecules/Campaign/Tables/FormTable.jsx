import { React, useState } from "react";

import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Button from "components/atoms/Button/Button";
import Modal from "components/layouts/Modal";
import { DPPlusIcon } from "icons";

import datas from "utilities/filterData";

import { CampaignForm } from "utilities/campaigndata";

import { TableWrapper, TableHeaderWrapper, Box } from "./styles";

const FormsTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Box type="checkbox"></Box>,
      ignoreRowClick:false,
      width: "5rem",
    },
    {
      name: "FORM NAME",
      selector: (row) => row.name,
      width: "35rem",
    },

    {
      name: "FORM TYPE",
      selector: (row) => row.type,
      width: "20rem",
    },
    {
        name: "RAISED",
        selector: (row) => row.raised,
      width: "20rem",
    },
    {
        name: "DONATIONS",
        selector: (row) => row.donations,
      width: "35rem",
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (col) => <Button className="table-button">Active</Button>,
    },  
  ];

  const data = CampaignForm.map((d, index) => ({
    key: index,
    name: d.name,
    type: d.type,
    raised: d.raised,
    donations: d.donations,
    status:d.status
  }));

  const onRowClicked = (row, event) => { console.log(row,event) };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <TableWrapper>
      <TableHeaderWrapper className="table-header">
        <div className="table-header__left">
          <h1>88 Forms</h1>
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
      <Table
        columns={columns}
        data={data}
        onRowClicked={onRowClicked}
      />
    </TableWrapper>
  );
};

export default FormsTable;
