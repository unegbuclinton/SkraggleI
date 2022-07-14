import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import DeletePromoCodeModal from 'components/molecules/EventsModals/PromocodeModal/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { delPromoCode, getAllPromoCode, getEachPromoCode } from 'features/events/eventSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from 'utilities/helpers';
import PromoCodeModal from '../PromocodeModal';
import EditPromoCodeModal from '../PromocodeModal/EditPromoCodeModal';
import { ActionText, NameContainer, PromoCodeWrapper } from './styles';

const Paragraph = ({ row }) => {
  return (
    <NameContainer>
      <h1>{row.code}</h1>

      <p>{row.description}</p>
    </NameContainer>
  );
};
function PromoCodes() {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [createPromoCodeModal, setCreatePromoCodeModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [getRowId, setGetRowId] = useState('');

  const { allPromoCode } = useSelector((state) => state.events);

  const dispatch = useDispatch();

  const openDelete = (id) => {
    setOpenDeleteModal(true);
    setGetRowId(id);
  };
  const deletePackage = (id) => {
    const body = {
      promocodes: [id]
    };
    dispatch(delPromoCode(body)).then(() => {
      setOpenDeleteModal(false);
      dispatch(getAllPromoCode());
    });
  };

  const OpenEdit = (id) => {
    setGetRowId(id);
    setEditModal(true);
    dispatch(getEachPromoCode(getRowId));
  };

  const columns = [
    {
      name: 'NAME',
      cell: (row) => <Paragraph row={row} />,
      width: '20.8rem'
    },
    {
      name: 'STATUS',
      cell: () => <Switch />,
      width: '16.8rem'
    },
    {
      name: 'DISCOUNT',
      selector: (row) => row.discount,
      Width: '16.8rem'
    },
    {
      name: 'MAXIMUM USES',
      selector: (row) => row.max_user,
      Width: '16.8rem'
    },
    {
      name: 'TIMES USED',
      selector: (row) => formatDate(row.end_date),
      Width: '16.8rem'
    },
    {
      cell: (row) => <ActionText onClick={() => OpenEdit(row.id)}>Edit</ActionText>,
      width: '8rem'
    },
    {
      name: '',
      cell: (row) => (
        <ActionText className="delete" onClick={() => openDelete(row.id)} red>
          Delete
        </ActionText>
      )
    }
  ];

  const onRowClick = ({ id }) => {
    dispatch(getEachPromoCode(id)).then(() => {
      setEditModal(true);
    });
  };
  return (
    <PromoCodeWrapper>
      {editModal && (
        <EditPromoCodeModal
          isShown={editModal}
          onCloseModal={() => {
            setEditModal(false);
          }}
        />
      )}
      <DeletePromoCodeModal
        isShown={openDeleteModal}
        onClose={() => openDeleteModal(false)}
        onClick={() => deletePackage(getRowId)}
      />
      <TableHeader
        header="Promo Codes"
        title="Create New"
        eventHeader
        setOpen={setCreatePromoCodeModal}
      />
      <Table columns={columns} data={allPromoCode} onRowClicked={onRowClick} />

      {createPromoCodeModal && (
        <PromoCodeModal
          onClose={() => {
            setCreatePromoCodeModal(false);
          }}
        />
      )}
    </PromoCodeWrapper>
  );
}

export default PromoCodes;
