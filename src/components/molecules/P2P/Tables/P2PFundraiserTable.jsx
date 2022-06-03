import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
import DropdownComponent from 'components/atoms/Dropdown';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import Table from 'components/layouts/Table';
import Pagination from 'components/molecules/Pagination';
import { getEachP2p } from 'features/p2p/p2pslice';
import { DPPlusIcon } from 'icons';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import datas from 'utilities/filterData.json';
import P2PModalComponent from '../P2PFundraiserModalComponent';
import { ContainerBody, TableHeaderWrapper, TableWrapper } from './styles';

function P2PTable() {
  const { p2pData } = useSelector((state) => state.p2p);
  console.log(p2pData);

  const columns = [
    {
      name: ' ',
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: '5rem'
    },
    {
      name: 'CAMPAIGN',
      selector: (row) => row.name || row.campaign_id,
      width: '20rem'
    },

    {
      name: 'FUNDRAISER',
      selector: (row) => row.fundraiser_display_name,
      width: '20rem'
    },
    {
      name: 'GOAL',
      selector: (row) => row.goal,
      width: '20rem'
    },
    {
      name: 'RAISED',
      selector: (row) => row.offline_amount,
      width: '20rem'
    },
    {
      name: 'CREATED',
      selector: (row) => row.created_at,
      width: '20rem'
    },
    {
      name: 'GOAL DATE',
      selector: (row) => row.goal_date,
      width: '20rem'
    },
    {
      name: '1M STATISTICS -_-_',
      selector: (row) => row.sn,
      width: '15rem'
    }
  ];

  const [selected, setSelected] = useState('Filters');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRowClicked = (row) => {
    navigate(`/peer-to-peer/${row.key + 1}`, { state: row });
    dispatch(getEachP2p(row.id));
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <ContainerBody>
        <TableWrapper>
          <TableHeaderWrapper className="table-header">
            <div className="table-header__left">
              <h1>{`${p2pData?.length} P2P`}</h1>
            </div>

            <div className="table-header__right">
              <DropdownComponent
                selected={selected}
                setSelected={setSelected}
                className="dropdown-filter"
                data={datas}
              />
              <SearchBar className="search-icon" />
              <Button className="p2p-button" onClick={() => setModalIsOpen(true)}>
                <DPPlusIcon className="plus-icon" />
                New P2P Fundraiser
              </Button>
              {modalIsOpen && (
                <P2PModalComponent
                  isShown={modalIsOpen}
                  onClose={() => {
                    setModalIsOpen(false);
                  }}
                />
              )}
            </div>
          </TableHeaderWrapper>
          <Table columns={columns} data={p2pData} onRowClicked={onRowClicked} />
        </TableWrapper>
      </ContainerBody>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        data={p2pData}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default P2PTable;
