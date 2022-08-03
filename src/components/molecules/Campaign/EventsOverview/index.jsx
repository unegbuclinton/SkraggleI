import React from 'react';
import CampaignLayout from '..';
import EventsTable from '../Tables/EventsTable';

function EventsOverview() {
  return (
    <CampaignLayout>
      <EventsTable />
    </CampaignLayout>
  );
}

export default EventsOverview;
