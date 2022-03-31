import Tabs from "components/molecules/Tabs";

import React from "react";
import DefaultTemplate from "../DefaultTemplate";
import SavedTemplate from "../SavedTemplate";

function Template({onClose}) {
  const templates = [
    { title: "Default Template", component: <DefaultTemplate  onClose={onClose}/> },
    { title: "Saved Template", component: <SavedTemplate /> },
  ];
  return <Tabs tabs={templates} />;
}

export default Template;
