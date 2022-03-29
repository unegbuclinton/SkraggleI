import DashboardLayout from "components/layouts/DashboardLayout";
import React from "react";
import { ArchivedContainer, ArchivedWrapper } from "./styles.";

function Archived() {
  return (
    <DashboardLayout>
      <ArchivedWrapper>
        <ArchivedContainer>
          <h1 className="message">There are no archived elements.</h1>
        </ArchivedContainer>
      </ArchivedWrapper>
    </DashboardLayout>
  );
}

export default Archived;
