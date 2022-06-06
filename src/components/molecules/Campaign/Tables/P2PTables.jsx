import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import DropdownComponent from 'components/atoms/Dropdown';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import Table from 'components/layouts/Table';
import Pagination from 'components/molecules/Pagination';
import { DPPlusIcon } from 'icons';
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import datas from 'utilities/filterData';
import { ContainerBody, TableHeaderWrapper, TableWrapper } from './styles';

const P2PTable = () => {
  const { p2p } = useSelector((state) => state.campaign);

  const columns = [
    {
      name: ' ',
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: '5rem'
    },
    {
      name: 'P2P EVENTS NAME',
      selector: (row) => row.fundraiser_display_name,
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
      selector: (row) => row.offline_donation,
      width: '35rem'
    },
    {
      name: 'STATUS',
      // selector: (row) => row.status,
      cell: () => <Button className="table-button">Active</Button>
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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
              <h1>{`${p2p.length} P2P`}</h1>
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
          <Table columns={columns} data={p2p} />
        </TableWrapper>
      </ContainerBody>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        data={p2p}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default P2PTable;
