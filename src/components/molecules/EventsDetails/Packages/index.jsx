import Switch from 'components/atoms/Switch/Switch';
import Table from 'components/layouts/Table';
import EventPackageModal from 'components/molecules/EventsModals/EventPackageModal';
import EditPackageModal from 'components/molecules/EventsModals/EventPackageModal/EditPackageModal';
import ClonePackageModal from 'components/molecules/EventsModals/PackageModal/CloneModal/Modal';
import DeletePackageModal from 'components/molecules/EventsModals/PackageModal/DeleteModal/Modal';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { clonePackage, delPackage, getAllPackages, packageInfo } from 'features/events/eventSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionText, NameContainer, PackageWrapper } from './styles';

const Paragraph = ({ row }) => {
  return (
    <NameContainer>
      <h1>{row.name}</h1>

      <p>{`${row.participants} per package`}</p>
    </NameContainer>
  );
};
function Packages() {
  const [getRowId, setGetRowId] = useState('');
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openCloneModal, setOpenCloneModal] = useState(false);
  const [openPackageModal, setOpenPackageModal] = useState(false);
  const [openEditPackageModal, setOpenEditPackageModal] = useState(false);

  const { allPackages } = useSelector((state) => state.events);

  const openDelete = (id) => {
    setOpen(true);
    setGetRowId(id);
  };

  const deletePackage = (id) => {
    const body = {
      packages: [id]
    };
    dispatch(delPackage(body)).then(() => {
      setOpen(false);
      dispatch(getAllPackages());
    });
  };

  const cloneModal = (id) => {
    setOpenCloneModal(true);
    setGetRowId(id);
  };

  const createClonePackage = (id) => {
    const body = {
      packages: [id]
    };
    dispatch(clonePackage(body)).then(() => {
      setOpenCloneModal(false);
      dispatch(getAllPackages());
    });
  };

  const EditPackage = (id) => {
    setGetRowId(id);
    setOpenEditPackageModal(true);
    dispatch(packageInfo(getRowId));
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
      width: '10.8rem'
    },
    {
      name: 'DIRECT COST',
      selector: (row) => row.direct_cost,
      width: '20rem'
    },
    {
      name: 'PACKAGES',
      selector: (row) => row.description,
      width: '15.8rem'
    },
    {
      name: 'PRIVATE',
      selector: (row) => row.private_package,
      width: '10.8rem'
    },
    {
      cell: (row) => <ActionText onClick={() => EditPackage(row.id)}>Edit</ActionText>,
      width: '8rem'
    },
    {
      cell: (row) => <ActionText onClick={() => cloneModal(row.id)}>Clone</ActionText>,
      width: '8rem'
    },
    {
      cell: (row) => (
        <ActionText onClick={() => openDelete(row.id)} red>
          Delete
        </ActionText>
      )
    }
  ];

  const onRowClick = () => {};

  return (
    <PackageWrapper>
      <TableHeader
        header={`${allPackages.length} Packages`}
        title=" Create New"
        setOpen={setOpenPackageModal}
      />
      <ClonePackageModal
        isShown={openCloneModal}
        onClose={() => setOpenCloneModal(false)}
        onClick={() => createClonePackage(getRowId)}
      />
      <DeletePackageModal
        isShown={open}
        onClose={() => setOpen(false)}
        onClick={() => deletePackage(getRowId)}
      />
      <Table
        className="package-table"
        columns={columns}
        data={allPackages}
        onRowClicked={onRowClick}
      />
      <EditPackageModal
        isShown={openEditPackageModal}
        onClose={() => setOpenEditPackageModal(false)}
      />

      {openPackageModal && (
        <EventPackageModal isShown={openPackageModal} onClose={() => setOpenPackageModal(false)} />
      )}
    </PackageWrapper>
  );
}

export default Packages;
