import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from 'components/atoms/SearchBar/SearchBar';
import Table from 'components/layouts/Table';
import Button from 'components/atoms/Button/Button';
import Pagination from 'components/molecules/Pagination';
import { DPPlusIcon } from 'icons';

import datas from 'utilities/filterData';

import { P2PForm } from 'utilities/campaigndata';

import { TableWrapper, TableHeaderWrapper, ContainerBody } from './styles';
import DropdownComponent from 'components/atoms/Dropdown';
import Checkbox from 'components/atoms/CheckBox';

const P2PTable = () => {
  const columns = [
    {
      name: ' ',
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: '5rem'
    },
    {
      name: 'P2P EVENTS NAME',
      selector: (row) => row.name,
      width: '35rem'
    },

    {
      name: 'TYPE',
      selector: (row) => row.type,
      width: '20rem'
    },
    {
      name: 'RAISED',
      selector: (row) => row.raised,
      width: '20rem'
    },
    {
      name: 'DONATIONS',
      selector: (row) => row.donations,
      width: '35rem'
    },
    {
      name: 'STATUS',
      selector: (row) => row.status,
      cell: (col) => <Button className="table-button">Active</Button>
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexLastList = currentPage * itemsPerPage;
  const indexFirstList = indexLastList - itemsPerPage;

  const tableData = P2PForm.map((p2pData, index) => ({
    key: index,
    name: p2pData.name,
    type: p2pData.type,
    raised: p2pData.raised,
    donations: p2pData.donations,
    status: p2pData.status
  }));

  const currentList = tableData.slice(indexFirstList, indexLastList);

  const [selected, setSelected] = useState('Filters');

  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/peer-to-peer');
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
        data={P2PForm}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default P2PTable;
