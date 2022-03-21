import React from "react";

import DashboardLayout from "components/layouts/DashboardLayout";
import Nav from "../Nav/Nav";


const Campaign = () => {
  const links = [
    {
      path: "/overview",
      label: "Overview",
      exact: "true",
    },
    {
      path: "/form",
      label: "Form",
      exact: "true",
    }
  ];
  
  return (
    <DashboardLayout>
        <Nav links={links}></Nav>
    </DashboardLayout>

  );
};

export default Campaign;
