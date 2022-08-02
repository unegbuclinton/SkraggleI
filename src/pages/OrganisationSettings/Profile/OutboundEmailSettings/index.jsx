import { AssociationContainer, AssociationHeading, AssociationWrapper } from './styles';

function OutBound() {
  return (
    <AssociationWrapper>
      <AssociationHeading>
        <h1 className="heading">Outbound Email Settings</h1>
      </AssociationHeading>
      <AssociationContainer>
        <h2 className="title">SEND FROM</h2>
        <p className="info">TRIAL_AQRpNrDp42rG</p>
      </AssociationContainer>
      <AssociationContainer>
        <h2 className="title">CONTACT REPLY TO</h2>
        <p className="info">TRIAL_AQRpNrDp42r</p>
      </AssociationContainer>
    </AssociationWrapper>
  );
}

export default OutBound;
