import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/CheckBox';
// import SearchBar from 'components/atoms/SearchBar/SearchBar';
import Table from 'components/layouts/Table';
import P2PModalComponent from 'components/molecules/P2P/P2PFundraiserModalComponent/p2pModalComponent';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
// import { DPPlusIcon } from 'icons';
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import datas from 'utilities/filterData';
import { ContainerBody, TableWrapper } from './styles';

const P2PTable = () => {
  const { p2p } = useSelector((state) => state?.campaign);
  const [open, setOpen] = useState(false);
  const columns = [
    {
      name: ' ',
      cell: () => <Checkbox />,
      ignoreRowClick: false,
      width: '5rem'
    },
    {
      name: 'P2P EVENTS NAME',
      selector: (row) => row?.fundraiser_display_name,
      width: '25rem'
    },

    {
      name: 'TYPE',
      selector: (row) => row?.type,
      width: '20rem'
    },
    {
      name: 'RAISED',
      selector: (row) => row?.raised,
      width: '20rem'
    },
    {
      name: 'DONATIONS',
      selector: (row) => row?.offline_donation,
      width: '25rem'
    },
    {
      name: 'STATUS',
      // selector: (row) => row.status,
      cell: () => <Button className="table-button">Active</Button>
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // const [selected, setSelected] = useState('Filters');

  let navigate = useNavigate();
  // const handleButtonClick = () => {
  //   navigate('/peer-to-peer');
  // };
  const onRowClicked = (row) => {
    navigate(`/peer-to-peer/${row?.id}`, { state: row });
  };

  return (
    <div>
      <ContainerBody>
        <P2PModalComponent
          isShown={open}
          row
          onClose={() => {
            setOpen(false);
          }}
        />
        <TableWrapper>
          <TableHeader
            setOpen={setOpen}
            title="Create P2P"
            header={`${p2p?.length} P2P`}
            noFilter
          />
          <Table columns={columns} data={p2p} onRowClicked={onRowClicked} />
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
