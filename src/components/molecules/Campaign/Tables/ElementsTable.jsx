import Checkbox from 'components/atoms/CheckBox';
// import { useNavigate } from 'react-router-dom';
import Table from 'components/layouts/Table';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import CreateFormModal from 'pages/Forms/FormModal/CreateFormModal';
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { ElementsData } from 'utilities/campaigndata';
import { ContainerBody, TableWrapper, Wrapper } from './styles';

const ElementsTable = () => {
  const { elementsData } = useSelector((state) => state.campaign);
  // const { campaignByID } = useSelector((state) => state.campaign);
  // const id = campaignByID.id;
  // const dispatch = useDispatch();

  const [rowCount, setRowCount] = useState(null);
  const [getId, setGetId] = useState([]);
  const handleSelect = (row) => {
    const checkedRows = row.selectedRows.map((cur) => cur.id);
    setGetId(checkedRows);
    setRowCount(row.selectedCount);
  };

  // const handleDelete = () => {
  //   const body = {
  //     forms: getId
  //   };
  //   dispatch(removeForm(body)).then(() => {
  //     dispatch(getFormsByID(id));
  //     setGetId([]);
  //   });
  // };

  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  // const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const columns = [
    {
      name: 'ID',
      selector: (row) => row?.id,
      width: '15rem'
    },

    {
      name: 'NAME',
      selector: (row) => row?.name,
      width: '30rem'
    },
    {
      name: 'TYPE',
      selector: (row) => row?.type,
      width: '15rem'
    },
    {
      name: 'CAMPAIGN',
      selector: (row) => row?.campaign_id,
      width: '20rem'
    },
    {
      name: 'STATISTICS',
      selector: (row) => row.statistics,
      width: '30rem'
    },
    {
      name: 'LAST SEEN',
      selector: (row) => row?.updated_at
    }
  ];

  // let navigate = useNavigate();
  // const handleButtonClick = () => {
  //   navigate('/elements');
  // };

  return (
    <Wrapper>
      <CreateFormModal
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      {/* <DeleteModal
        isShown={openDeleteModal}
        handleDelete={handleDelete}
        onClose={() => setOpenDeleteModal(false)}
        warning="Warning: This will delete these campaign permanently from your Skraggle account. This
        action cannot be undone"
      /> */}
      <ContainerBody>
        <TableWrapper>
          <TableHeader
            title="Create Elements"
            header={`${elementsData?.length} Elements`}
            setOpen={setOpen}
            // setOpenDeleteModal={setOpenDeleteModal}
            selectRow={`${rowCount} Selected`}
            show={!!getId.length}
            // onChange={(e) => setInput(e.target.value)}
          />
          <Table
            columns={columns}
            data={elementsData}
            // onRowClicked={onRowClicked}
            selectableRows
            selectableRowsComponent={Checkbox}
            handleRowSelect={handleSelect}
          />
        </TableWrapper>
      </ContainerBody>
      <Pagination currentPage={currentPage} data={ElementsData} setCurrentPage={setCurrentPage} />
    </Wrapper>
  );
};

export default ElementsTable;
