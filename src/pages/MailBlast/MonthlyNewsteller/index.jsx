import PageLinks from 'components/atoms/PageLinks';
import DashboardLayout from 'components/layouts/DashboardLayout';
import NewsTellerAction from 'components/molecules/ActionComponents';
import ActionDropDown from 'components/molecules/ActionDropDown';
import Tabs from 'components/molecules/Tabs';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MailContent from '../Content';
import SendMailBlastModal from '../MailblasModals/SendMailBlast';
import Overview from '../Overview';

function MonthlyNewsteller() {
  const [showModal, setShowModal] = useState(false);
  const ShowSendBlast = () => setShowModal(true);
  const mail = [
    {
      title: 'Overview',
      component: <Overview />,
      actionComponent: <ActionDropDown />
    },
    {
      title: 'Content',
      component: <MailContent />,
      actionComponent: <NewsTellerAction ShowSendBlast={ShowSendBlast} />
    }
  ];
  const name = useLocation()?.state?.name;

  return (
    <DashboardLayout
      pageLinks={<PageLinks pageLinkBefore="Mail-Blast" to="/mail-blasts" names={name} />}>
      <Tabs tabs={mail} scroll />
      {showModal && (
        <SendMailBlastModal isShown={setShowModal} onCloseModal={() => setShowModal(false)} />
      )}
    </DashboardLayout>
  );
}

export default MonthlyNewsteller;
