import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import EventPackageModal from 'components/molecules/EventsModals/EventPackageModal';
import ClonePackageModal from 'components/molecules/EventsModals/PackageModal/CloneModal/Modal';
import DeletePackageModal from 'components/molecules/EventsModals/PackageModal/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ActionWrapper, PackageWrapper } from './styles';

const Paragraph = ({ row }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '2.4rem', color: '#2e2e2e', fontWeight: '400' }}>{row.name}</h1>

      <p
        style={{
          fontSize: '1.4rem',
          color: '#585858',
          fontWeight: '400'
        }}>{`${row.participants} per package`}</p>
    </div>
  );
};
function Packages() {
  const [open, setOpen] = useState(false);
  const [openCloneModal, setOpenCloneModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const { allPackages } = useSelector((state) => state.events);
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
      cell: (row) => <Paragraph row={row} />,
      width: '35.8rem'
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
      selector: (row) => row.direct_cost,
      Width: '20rem'
    },
    {
      name: 'PACKAGES',
      selector: (row) => row.description,
      Width: '10.8rem'
    },
    {
      name: 'PRIVATE',
      selector: (row) => row.private_package,
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

  const onRowClick = () => {
    setOpenDropdown(true);
  };

  return (
    <PackageWrapper>
      <TableHeader
        header={`${allPackages.length} Packages`}
        title=" Create New"
        setOpen={setOpenDropdown}
      />
      <ClonePackageModal isShown={openCloneModal} onClose={() => setOpenCloneModal(false)} />
      <DeletePackageModal isShown={open} onClose={() => setOpen(false)} />
      <Table
        className="package-table"
        columns={columns}
        data={allPackages}
        onRowClicked={onRowClick}
      />

      {openDropdown && (
        <EventPackageModal isShown={openDropdown} onClose={() => setOpenDropdown(false)} />
      )}
    </PackageWrapper>
  );
}

export default Packages;
