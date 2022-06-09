import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import DeletePromoCodeModal from 'components/molecules/EventsModals/PromocodeModal/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { getEachPromoCode } from 'features/events/eventSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PromoCodeModal from '../PromocodeModal';
import EditPromoCodeModal from '../PromocodeModal/EditPromoCodeModal';
// import PromoCodeDropdown from '../DropdownComponents/PromoCodeDropdown';
import { ActionWrapper, ContentsWrapper, PromoCodeWrapper } from './styles';

function PromoCodes() {
  const [openDelete, setOpenDelete] = useState(false);
  const [createPromoCodeModal, setCreatePromoCodeModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const { allPromoCode } = useSelector((state) => state.events);

  const dispatch = useDispatch();

  const OpenDeleteModal = (e) => {
    e.stopPropagation();
    setOpenDelete(true);
  };

  const columns = [
    {
      name: 'NAME',
      cell: () => (
        <ContentsWrapper>
          <h2 className="heading">Save15</h2>
          <p className="heading-text">test</p>
        </ContentsWrapper>
      ),
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
      selector: (row) => row.end_date,
      Width: '16.8rem'
    },
    {
      name: '',
      // selector: (row) => row.tags
      cell: () => (
        <ActionWrapper>
          <p className="action">Edit</p>
        </ActionWrapper>
      )
    },
    {
      name: '',
      // selector: (row) => row.tags
      cell: () => (
        <ActionWrapper>
          <p className="delete" onClick={OpenDeleteModal}>
            Delete
          </p>
        </ActionWrapper>
      )
    }
  ];

  const onRowClick = ({ id }) => {
    console.log(id);
    dispatch(getEachPromoCode(id));

    setEditModal(true);
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
      <DeletePromoCodeModal isShown={openDelete} onClose={() => setOpenDelete(false)} />
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
