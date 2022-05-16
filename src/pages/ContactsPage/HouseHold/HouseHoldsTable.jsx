import Table from 'components/layouts/Table';
import HouseHoldModal from 'components/molecules/Contacts/Modals/houseHoldModal/mainModal/index';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { allHouseHold } from 'features/contact/contactSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { columns } from 'utilities/houseHoldData';
// import { useNavigate } from "react-router-dom";
import { TableWrapper } from './styles';

function HouseHoldsTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allHouseHold());
  }, []);
  const { houseHoldData } = useSelector((state) => state.contact);
  const tableDatas = houseHoldData.map((tableData) => {
    return {
      familyName: tableData.name,
      created: tableData.created_on
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = tableDatas.slice(indexFirstList, indexLasttList);

  // const navigate = useNavigate();

  // const onRowClicked = () => {
  //   let path = "/contact-profile";
  //   navigate(path);
  // };

  return (
    <div>
      <TableWrapper>
        <TableHeader title="Add Household" header="15 Household" setOpen={setOpen} />
        <Table
          columns={columns}
          data={currentList}
          // onRowClicked={onRowClicked}
        />
      </TableWrapper>

      <HouseHoldModal isShown={open} onClose={() => setOpen(false)} />

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        data={tableDatas}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default HouseHoldsTable;
