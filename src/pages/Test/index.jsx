import DashboardLayout from 'components/layouts/DashboardLayout';
import CustomIframes from 'components/molecules/customIframe';
import ReminderIframe from 'components/molecules/iFrameComp/Reminder';
import React from 'react';
function Test() {
  return (
    <DashboardLayout>
      <CustomIframes>
        <ReminderIframe />
      </CustomIframes>
    </DashboardLayout>
  );
}

export default Test;
