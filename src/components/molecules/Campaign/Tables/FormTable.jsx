import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import Table from "components/layouts/Table";
import Button from "components/atoms/Button/Button";
import Pagination from "components/molecules/Pagination";
import { DPPlusIcon } from "icons";

import datas from "utilities/filterData";

import { CampaignForm } from "utilities/campaigndata";

import { ContainerBody, TableWrapper, TableHeaderWrapper} from "./styles";
import DropdownComponent from "components/atoms/Dropdown";
import Checkbox from "components/atoms/CheckBox";

const FormsTable = () => {
  const columns = [
    {
      name: " ",
      cell: () => <Checkbox/>,
      ignoreRowClick: false,
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexLastList = currentPage * itemsPerPage;
  const indexFirstList = indexLastList - itemsPerPage;

  const tableData = CampaignForm.map((campaignData, index) => ({
    key: index,
    name: campaignData.name,
    type: campaignData.type,
    raised: campaignData.raised,
    donations: campaignData.donations,
    status: campaignData.status,
  }));

  const currentList = tableData.slice(indexFirstList, indexLastList);

  const onRowClicked = (row, event) => {
    console.log(row, event);
  };

  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/forms");
  };

  return (
    <div>
      <ContainerBody>
        <TableWrapper>
          <TableHeaderWrapper className="table-header">
            <div className="table-header__left">
              <h1>88 Forms</h1>
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
        data={CampaignForm}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default FormsTable;
