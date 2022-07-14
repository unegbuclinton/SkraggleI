import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import { DPIconEmtyState } from 'icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MembershipBody, MembershipWrapper } from './styles';

function Membership() {
  const navigate = useNavigate();

  const NavigateTo = () => [navigate('/contacts')];
  return (
    <MembershipWrapper>
      <Card>
        <p className="membership-text">Membership</p>
        <MembershipBody>
          <DPIconEmtyState />
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
