import React from "react";

import DashboardLayout from "components/layouts/DashboardLayout";
import ContactsTable from "components/molecules/Contacts/ContactsTable";
// import CompaniesTable from 'components/molecules/Contacts/CompaniesTable'
// import HouseHoldsTable from 'components/molecules/Contacts/HouseHoldsTable'

function Index() {
  return (
    <DashboardLayout>
      <ContactsTable />
    </DashboardLayout>
  );
}

export default Index;
