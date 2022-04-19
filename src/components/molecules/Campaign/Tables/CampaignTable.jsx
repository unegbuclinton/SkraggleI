import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableContacts } from "utilities/campaigndata";

import Button from "components/atoms/Button/Button";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Pagination from "components/molecules/Pagination";
import Checkbox from "components/atoms/CheckBox";
import { DPPlusIcon } from "icons";

import datas from "utilities/filterData";
import { ContainerBody, TableHeaderWrapper, TableWrapper } from "./styles";
import CreateCampaignModal from "../CreateCampaignModal";
import DropdownComponent from "components/atoms/Dropdown";

const CampaignTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: "5rem",
    },
    {
      name: "CREATED",
      selector: (row) => row.created,
      width: "20rem",
    },

    {
      name: "CAMPAIGN",
      selector: (row) => row.campaign,
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (col) => <Button className="table-button">Active</Button>,
    },
    {
      name: "FUNDRAISING GOALS",
      selector: (row) => row.goals,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexLastList = currentPage * itemsPerPage;

  const indexFirstList = indexLastList - itemsPerPage;

  const tableData = TableContacts.map((Campaigndata, index) => ({
    key: index,
    created: Campaigndata.created,
    campaign: Campaigndata.campaign,
    goals: Campaigndata.goals,
    status: Campaigndata.status,
  }));

  const currentList = tableData.slice(indexFirstList, indexLastList);

  let navigate = useNavigate();

  const onRowClicked = (row) => {
    navigate(`/campaign/${row.key + 1}`, { state: row });
  };

  const [selected, setSelected] = useState("Filters");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <ContainerBody>
        <TableWrapper>
          <TableHeaderWrapper className="table-header">
            <div className="table-header__left">
              <h1>15 Campaigns</h1>
            </div>

            <div className="table-header__right">
              <DropdownComponent selected={selected} setSelected={setSelected} data={datas} className="dropdown-campaign" />
              <SearchBar className="search-icon" />
              <Button
                className="campaign-button"
                onClick={() => setModalIsOpen(true)}
              >
                <DPPlusIcon className="plus-icon" />
                New Campaign
              </Button>
              {modalIsOpen && (
                <CreateCampaignModal
                  isShown={modalIsOpen}
                  onClose={() => {
                    setModalIsOpen(false);
                  }}
                />
              )}
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
        data={TableContacts}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CampaignTable;
