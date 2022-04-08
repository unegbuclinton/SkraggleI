import DashboardLayout from "components/layouts/DashboardLayout";
import Tabs from "components/molecules/Tabs";
import React, { useState } from "react";
import MailContent from "../Content";
import Overview from "../Overview";
import NewsTellerAction from "components/molecules/ActionComponents";
import ActionDropDown from "components/molecules/ActionDropDown";
import SendMailBlastModal from "../MailblasModals/SendMailBlast";

function MonthlyNewsteller() {
  const [showModal, setShowModal] = useState(false);
  const ShowSendBlast = () => setShowModal(true);
  const mail = [
    {
      title: "Overview",
      component: <Overview />,
      actionComponent: <ActionDropDown />,
    },
    {
      title: "Content",
      component: <MailContent />,
      actionComponent: <NewsTellerAction ShowSendBlast={ShowSendBlast} />,
    },
  ];
  return (
    <DashboardLayout>
      <Tabs tabs={mail} />
      {showModal && (
        <SendMailBlastModal
          isShown={setShowModal}
          onCloseModal={() => setShowModal(false)}
        />
      )}
    </DashboardLayout>
  );
}

export default MonthlyNewsteller;
