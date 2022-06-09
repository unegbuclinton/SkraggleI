import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import DeletePromoCodeModal from 'components/molecules/EventsModals/PromocodeModal/DeleteModal/Modal';
import React, { useState } from 'react';
import PromoCodeModal from '../PromocodeModal';
// import PromoCodeDropdown from '../DropdownComponents/PromoCodeDropdown';
import { ActionWrapper, ContentsWrapper, PromoCodeWrapper } from './styles';

function PromoCodes() {
  // const [dropdown, setDropdown] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
      selector: (row) => row.uses,
      Width: '16.8rem'
    },
    {
      name: 'TIMES USED',
      selector: (row) => row.timeused,
      Width: '16.8rem'
    },
    {
      name: '',
      // selector: (row) => row.tags
      cell: () => (
        <ActionWrapper>
          <p className="action">Edit</p>
          <p className="delete" onClick={OpenDeleteModal}>
            Delete
          </p>
        </ActionWrapper>
      )
    }
  ];

  const data = [
    {
      name: 'NAME',
      status: '',
      discount: '15%',
      uses: '1',
      timeused: '0'
    }
  ];

  const onRowClicked = () => {
    setModalIsOpen(true);
  };

  return (
    <PromoCodeWrapper>
      <DeletePromoCodeModal isShown={openDelete} onClose={() => setOpenDelete(false)} />
      <Table columns={columns} data={data} onRowClicked={onRowClicked} />
      {modalIsOpen && (
        <PromoCodeModal
          onClose={() => {
            setModalIsOpen(false);
          }}
        />
      )}
    </PromoCodeWrapper>
  );
}

export default PromoCodes;
