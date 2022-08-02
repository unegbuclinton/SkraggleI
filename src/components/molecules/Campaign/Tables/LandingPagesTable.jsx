import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import Table from 'components/layouts/Table';
import Pagination from 'components/molecules/Pagination';
import { DPPlusIcon } from 'icons';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { landingPagesData } from 'utilities/campaigndata';
import { ContainerBody, TableHeaderWrapper, TableWrapper } from './styles';

const LandingPagesTable = () => {
  const columns = [
    {
      name: ' ',
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: '5rem'
    },
    {
      name: 'ID',
      selector: (row) => row.uid,
      width: '20rem'
    },

    {
      name: 'NAME',
      selector: (row) => row.name,
      width: '20rem'
    },
    {
      name: 'CAMPAIGN',
      selector: (row) => row.campaign,
      width: '20rem'
    },
    {
      name: 'TYPE',
      selector: (row) => row.type,
      width: '20rem'
    },
    {
      name: 'ACTION',
      selector: (row) => row.action,
      cell: () => (
        <span>
          <Button className="table-button__clone">Clone</Button>
          <Button className="table-button__edit">Edit</Button>
          <Button className="table-button__remove">Active</Button>
        </span>
      ),
      width: '35rem'
    },
    {
      name: 'ADVANCE',
      selector: (row) => row.advance,
      cell: () => (
        <span className="table-button__span">
          <Button className="table-button__view">View</Button>
          <Button className="table-button__testing">A/B Testing</Button>
        </span>
      )
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexLastList = currentPage * itemsPerPage;
  const indexFirstList = indexLastList - itemsPerPage;

  const tableData = landingPagesData.map((landingData, index) => ({
    key: index,
    uid: landingData.uid,
    name: landingData.name,
    campaign: landingData.campaign,
    type: landingData.type,
    action: landingData.action,
    advance: landingData.advance
  }));

  const currentList = tableData.slice(indexFirstList, indexLastList);

  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/landing-page');
  };

  return (
    <div>
      <ContainerBody>
        <TableWrapper>
          <TableHeaderWrapper className="table-header">
            <div className="table-header__left">
              <h1>88 Landing Pages</h1>
            </div>
            <div className="table-header__right">
              <SearchBar className="search-icon" />
              <Button className="campaign-button" onClick={() => handleButtonClick()}>
                <DPPlusIcon className="plus-icon" />
                Create New
              </Button>
            </div>
          </TableHeaderWrapper>
          <Table columns={columns} data={currentList} />
        </TableWrapper>
      </ContainerBody>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        data={landingPagesData}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default LandingPagesTable;
