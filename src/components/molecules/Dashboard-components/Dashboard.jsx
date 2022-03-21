import DashboardLayout from 'components/layouts/DashboardLayout'
import React from 'react'
import GeneralUpdate from './GeneralUpdate/GeneralUpdate'
import Membership from './Membership/Membership'
import PotentialDonor from './Potential/PotentialDonor'
import ThankYou from './Thankyou/ThankYou'

function Dashboard() {
  return (
   <DashboardLayout >
       <GeneralUpdate />
       <ThankYou />
       <PotentialDonor />
       <Membership />
   </DashboardLayout>
  )
}

export default Dashboard