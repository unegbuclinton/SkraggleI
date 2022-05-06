import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from 'components/atoms/SearchBar/SearchBar';
import Table from 'components/layouts/Table';
import Button from 'components/atoms/Button/Button';
import Pagination from 'components/molecules/Pagination';
import Checkbox from 'components/atoms/CheckBox';

import { DPPlusIcon } from 'icons';

import datas from 'utilities/filterData';

import { EventsData } from 'utilities/campaigndata';

import { TableWrapper, TableHeaderWrapper, ContainerBody } from './styles';
import DropdownComponent from 'components/atoms/Dropdown';

const EventsTable = () => {
  const [selected, setSelected] = useState('Filters');

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
      width: '45rem'
    },
    {
      name: 'CAMPAIGN',
      selector: (row) => row.campaign,
      width: '30rem'
    },
    {
      name: 'STATUS',
      selector: (row) => row.status,
      cell: () => <Button className="table-button">Active</Button>
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexLastList = currentPage * itemsPerPage;

  const indexFirstList = indexLastList - itemsPerPage;

  const tableData = EventsData.map((eventsData, index) => ({
    key: index,
    uid: eventsData.uid,
    name: eventsData.name,
    campaign: eventsData.campaign,
    status: eventsData.status
  }));

  const currentList = tableData.slice(indexFirstList, indexLastList);

  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/events');
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
              <DropdownComponent
                selected={selected}
                setSelected={setSelected}
                data={datas}
                className="dropdown-campaign"
              />
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
        data={EventsData}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default EventsTable;
