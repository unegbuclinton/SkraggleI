import Table from 'components/layouts/Table';
import HouseHoldModal from 'components/molecules/Contacts/Modals/houseHoldModal/mainModal/index';
import Pagination from 'components/molecules/Pagination';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { allHouseHold } from 'features/contact/contactSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { columns, data } from 'utilities/houseHoldData';
// import { useNavigate } from "react-router-dom";
import { TableWrapper } from './styles';

function HouseHoldsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const itemsPerPage = 5;

  const indexLasttList = currentPage * itemsPerPage;

  const indexFirstList = indexLasttList - itemsPerPage;

  const currentList = data.slice(indexFirstList, indexLasttList);

  // const navigate = useNavigate();

  // const onRowClicked = () => {
  //   let path = "/contact-profile";
  //   navigate(path);
  // };
  const dispatch = useDispatch();
  const { houseHoldData } = useSelector((state) => state.contact);
  console.log(houseHoldData);
  useEffect(() => {
    dispatch(allHouseHold());
  }, []);

  // const tableDatas = houseHoldData.map((tableData) => {
  //   return [
  //     {
  //       name: tableData.name,
  //       created: tableData.created_on
  //     }
  //   ];
  // });
  // console.log(tableDatas);

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
        data={data}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default HouseHoldsTable;
