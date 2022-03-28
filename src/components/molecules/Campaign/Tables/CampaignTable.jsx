import Button from "components/atoms/Button/Button";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Pagination from "components/molecules/Pagination";
import { DPPlusIcon } from "icons";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableContacts } from "utilities/campaigndata";
import datas from "utilities/filterData";
import { Box, ContainerBody, TableHeaderWrapper, TableWrapper } from "./styles";
import NewCampaignModal from "../CreateCampaignModal";

const CampaignTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Box type="checkbox"></Box>,
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

  const tableData = TableContacts.map((Campaigndata, index) => ({
    key: index,
    created: Campaigndata.created,
    campaign: Campaigndata.campaign,
    goals: Campaigndata.goals,
    status: Campaigndata.status,
  }));

  let navigate = useNavigate();

  const onRowClicked = (row, event) => {
    navigate(`/campaign/${row.key + 1}`);
    console.log(row.key);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexLasttList = currentPage * itemsPerPage;
  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = tableData.slice(indexFirstList, indexLasttList);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ContainerBody>
      <TableWrapper>
        <TableHeaderWrapper className="table-header">
          <div className="table-header__left">
            <h1>15 Campaigns</h1>
          </div>

          <div className="table-header__right">
            <CustomDropdown className="dropdown-filter" data={datas} />
            <SearchBar className="search-icon" />
            <Button
              className="campaign-button"
              onClick={() => setModalIsOpen(true)}
            >
              <DPPlusIcon className="plus-icon" />
              New Campaign
            </Button>
            {modalIsOpen && (
              <NewCampaignModal
                onClose={() => {
                  setModalIsOpen(false);
                }}
              />
            )}
          </div>
        </TableHeaderWrapper>
        <Table columns={columns} data={tableData} onRowClicked={onRowClicked} />
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          data={tableData}
          setCurrentPage={setCurrentPage}
        />
      </TableWrapper>
    </ContainerBody>
  );
};

export default CampaignTable;
