import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import BarChart from 'components/organisms/BarChart';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconTransaction } from 'icons';
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
      name: 'Above Target',
      data: [39, 30, 35, 25, 40, 15, 52, 44, 25, 35, 44, 55],
      color: '#FF576B'
    },
    {
      name: 'Target',
      data: [20, 25, 30, 35, 40, 15, 52, 44, 25, 35, 44, 55],
      color: '#1E003E'
    }
  ];

  return (
    <ReadyWrappe>
      <div className="donor-readiness">
        <DonorWrapper>
          <Card>
            <p className="Donor-text">Donor</p>
            <DonorBody>
              <DPIconTransaction />
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
          <BarchartWrapper>
            <div className="duraton-chart">
              <BorderBottom />
              <BarChart
                series={series}
                chart={{ stacked: true }}
                legend={{
                  show: true,
                  position: 'top',
                  offsetY: -34,
                  horizontalAlign: 'right',
                  fontSize: '12px',
                  markers: {
                    width: '16px',
                    height: '16px',
                    offsetY: 3,
                    offsetX: -2
                  },
                  itemMargin: {
                    horizontal: 10
                  }
                }}
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
            <div className="donattion-title">Donors likely to donate each month</div>
          </BarchartWrapper>
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

const BarchartWrapper = styled(Card)`
  padding: 5.4rem 3.1rem 3.5rem 2.6rem;
  overflow: auto;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  text-align: center;
  .donattion-title {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xsmall};
    letter-spacing: 0.02em;
    color: ${COLORS.deepPurple};
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
    margin: 2rem 0 3rem 0;
  }
  .Donor-btn {
    font-size: ${FONTSIZES.xsmall};
    padding: 1.1rem 0;
  }
`;

const BorderBottom = styled.div`
  width: 100%;
  background-color: ${COLORS.torquoise};
  height: 0.1rem;
  position: relative;
  margin-bottom: -3.5rem;
  /* margin-left: 1rem; */
`;
