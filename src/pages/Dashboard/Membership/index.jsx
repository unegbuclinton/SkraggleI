import React from "react";
import { MembershipBody, MembershipWrapper } from "./styles";
import Button from "components/atoms/Button/Button";
import { DPIconMembership } from "icons";
import Card from "components/atoms/Card";
import { useNavigate } from "react-router-dom";

function Membership() {
  const navigate = useNavigate();

  const NavigateTo =()=>[
    navigate('/contacts')
  ]
  return (
    <MembershipWrapper>
      <Card>
        <p className="membership-text">Membership</p>
        <MembershipBody>
          <DPIconMembership />
          <p className="membership-content">No Expiring Memberships</p>
          <Button className="membership-btn" action onClick={NavigateTo}>
            Go to contact
          </Button>
        </MembershipBody>
      </Card>
    </MembershipWrapper>
  );
}

export default Membership;
