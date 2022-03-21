import React from "react";
import CompaniesTable from "./CompaniesTable";
import ContactsTable from "./ContactsTable";
import HouseHoldsTable from "./HouseHoldsTable";
import SegmentsTable from "./SegmentsTable";
import TagsTable from "./TagsTable";

function Contacts() {
  return (
    <div>
      <ContactsTable />
      <br />
      <div>Blabla</div>
      <br />
      <CompaniesTable />
      <br />
      <div>Blabla</div>
      <br />
      <HouseHoldsTable />
      <br />
      <div>Blabla</div>
      <br />
      <TagsTable />
      <br />
      <div>Blabla</div>
      <br />
      <SegmentsTable />
    </div>
  );
}

export default Contacts;
