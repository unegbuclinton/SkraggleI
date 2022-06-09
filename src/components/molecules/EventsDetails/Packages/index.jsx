import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import EventPackageModal from 'components/molecules/EventsModals/EventPackageModal';
import ClonePackageModal from 'components/molecules/EventsModals/PackageModal/CloneModal/Modal';
import DeletePackageModal from 'components/molecules/EventsModals/PackageModal/DeleteModal/Modal';
import React, { useState } from 'react';
import { ActionWrapper, ContentsWrapper, PackageWrapper } from './styles';

function Packages() {
  const [open, setOpen] = useState(false);
  const [openCloneModal, setOpenCloneModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const onpenDelete = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const openClone = (e) => {
    e.stopPropagation();
    setOpenCloneModal(true);
  };

  const columns = [
    {
      name: 'NAME & DETAILS',
      cell: () => (
        <ContentsWrapper>
          <h2 className="heading">Gift pack</h2>
          <p className="heading-text">5 participants per package</p>
        </ContentsWrapper>
      ),
      width: '20.8rem'
    },
    {
      name: 'STATUS',
      cell: () => <Switch />,
      width: '10.8rem'
    },
    {
      name: 'PRICE',
      selector: (row) => row.price,
      Width: '10.8rem'
    },
    {
      name: 'DIRECT COST',
      selector: (row) => row.directcost,
      Width: '20rem'
    },
    {
      name: 'PACKAGES',
      selector: (row) => row.packages,
      Width: '10.8rem'
    },
    {
      name: 'PRIVATE',
      selector: (row) => row.private,
      Width: '10.8rem'
    },
    {
      name: '',
      // selector: (row) => row.tags
      cell: () => (
        <ActionWrapper>
          <p className="action">Edit</p>
        </ActionWrapper>
      ),
      Width: '4rem'
    },
    {
      name: '',
      // selector: (row) => row.tags
      cell: () => (
        <ActionWrapper>
          <p className="action" onClick={openClone}>
            Clone
          </p>
        </ActionWrapper>
      ),
      Width: '4rem'
    },
    {
      name: '',
      // selector: (row) => row.tags
      cell: () => (
        <ActionWrapper>
          <p className="delete" onClick={onpenDelete}>
            Delete
          </p>
        </ActionWrapper>
      ),
      Width: '4rem'
    }
  ];

  const data = [
    {
      name: '',
      status: '',
      price: '$20.00',
      directcost: '$4.0',
      packages: '(0 sold)',
      private: 'No'
    }
  ];
  const onRowClick = () => {
    setOpenDropdown(true);
  };

  return (
    <PackageWrapper>
      <ClonePackageModal isShown={openCloneModal} onClose={() => setOpenCloneModal(false)} />
      <DeletePackageModal isShown={open} onClose={() => setOpen(false)} />
      <Table className="package-table" columns={columns} data={data} onRowClicked={onRowClick} />

      {openDropdown && (
        <EventPackageModal isShown={openDropdown} onClose={() => setOpenDropdown(false)} />
      )}
    </PackageWrapper>
  );
}

export default Packages;
