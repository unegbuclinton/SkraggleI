import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import BarChart from 'components/organisms/BarChart';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconMembership } from 'icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function DonorReadiness() {
  const navigate = useNavigate();

  const NavigateTo = () => {
    navigate('/contacts');
  };
  const series = [
    {
      name: 'Skraggle',
      data: [39, 30, 35, 25, 40, 15, 52, 44, 25, 35, 44, 55],
      color: '#FF6868'
    }
  ];
  return (
    <ReadyWrappe>
      <div className="donor-readiness">
        <DonorWrapper>
          <Card>
            <p className="Donor-text">Donor</p>
            <DonorBody>
              <DPIconMembership />
              <p className="Donor-content">No Expiring Donors</p>
              <Button className="Donor-btn" action onClick={NavigateTo}>
                Go to contact
              </Button>
            </DonorBody>
          </Card>
        </DonorWrapper>
      </div>

      <div className="duration-wrapper">
        <DonorWrapper>
          <Card className="duration-card">
            <p className="duration-text">Time of year</p>
            <div className="duraton-chart">
              <BarChart
                series={series}
                categories={[
                  'Jan',
                  'Feb',
                  'Mar',
                  'April',
                  'May',
                  'June',
                  'July',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
                ]}
                height={385}
              />
            </div>
          </Card>
        </DonorWrapper>
      </div>
    </ReadyWrappe>
  );
}

export default DonorReadiness;

const ReadyWrappe = styled.div`
  display: flex;
  gap: 1.6rem;

  .donor-readiness {
    width: 100%;
    flex: 1;
  }
  .duration-wrapper {
    flex: 1;
    width: 100%;
  }
`;

const DonorWrapper = styled.div`
  margin-bottom: 1.6rem;

  .duration-card {
  }

  .Donor-text,
  .duration-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    margin: 0;
    padding: 2.4rem 0rem 1.7rem 4rem;
  }
`;
const DonorBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 39.9rem;
  margin: 0rem 3.1rem 0rem 3.9rem;
  border-top: 1px solid ${COLORS.torquoise};

  .Donor-content {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    margin-bottom: 3rem;
  }
  .Donor-btn {
    font-size: ${FONTSIZES.xsmall};
    padding: 1.1rem 0;
  }
`;
