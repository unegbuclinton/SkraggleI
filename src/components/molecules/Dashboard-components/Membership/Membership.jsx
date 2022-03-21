import React from "react";
import { MembershipBody, MembershipWrapper } from "./styles";
import Button from "components/atoms/Button/Button";
import { DPIconMembership } from "icons";

function Membership() {
  return (
    <MembershipWrapper>
      <p className="membership-text">Membership</p>
      <MembershipBody>
        <DPIconMembership />
        <p className="membership-content">No Expiring Memberships</p>
        <Button className="membership-btn" action>
          Go to contact
        </Button>
      </MembershipBody>
    </MembershipWrapper>
  );
}

export default Membership;
