import Button from 'components/atoms/Button/Button';
import RadioGroup from 'components/atoms/RadioGroup';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconBenchMail } from 'icons';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

function BenchMark() {
  const [activeTab, setActiveTab] = useState(0);
  const fundRaiseData = [
    {
      header: 'Smart Benchmark',
      text: 'The benchmark you choose will be applied to all KPI’s. Where a benchmark may be unavailable, the KPI will default to a Skraggle Smart Benchmark.'
    },
    {
      header: 'Cause Area',
      text: 'Cause Area Benchmarks use the median KPIs across organizations of similar causes.'
    },
    {
      header: 'Organization Revenue Size',
      text: 'Revenue Size Benchmarks use the median KPIs across organizations of similar revenue sizes.'
    },
    {
      header: 'M + R Benchmark',
      text: 'M + R Benchmarks uses data taken from the most recent M + R Benchmark Study. M + R Benchmark'
    },
    {
      header: 'FEP Benchmark',
      text: 'Fundraising Effectiveness Project (FEP) Benchmarks uses data taken from the most recent FEP report. FEP'
    }
  ];
  return (
    <div>
      <BenchMarkBox>
        <BenchMarkIcon>
          <DPIconBenchMail />
        </BenchMarkIcon>
        <BenchMarkText>
          The benchmark you choose will be applied to all KPI’s. Where a benchmark may be
          unavailable, the KPI will default to a Skraggle Smart Benchmark.
        </BenchMarkText>
      </BenchMarkBox>
      <BenchMarkFormWrapper>
        {fundRaiseData.map(({ header, text }, idx) => (
          <BenchMarkWrapper active={activeTab === idx} onClick={() => setActiveTab(idx)} key={idx}>
            <BenchMarkContainer>
              <div className="text-container">
                <BenchMarkHeader>{header}</BenchMarkHeader>
                <BenchMarkText>{text}</BenchMarkText>
              </div>
              <div className="action-btn">
                <RadioGroup
                  pink
                  radioData={[
                    {
                      labelText: '',
                      value: text
                    }
                  ]}
                />
              </div>
            </BenchMarkContainer>
          </BenchMarkWrapper>
        ))}
        <BenchMarkFooter>
          <Button className="cancel-btn" auth invert>
            Cancel
          </Button>
          <Button className="save-btn" auth>
            Save
          </Button>
        </BenchMarkFooter>
      </BenchMarkFormWrapper>
    </div>
  );
}

export default BenchMark;

const BenchMarkBox = styled.div`
  display: flex;
  padding: 2.7rem 0.9rem 2.7rem 2rem;
  gap: 1.1rem;
  border-radius: 0.5rem;
  /* background: ${COLORS.pink}; */
  background-color: rgba(255, 87, 107, 0.2);
  margin: 2.4rem 2.4rem 1rem 2.4rem;
`;
const BenchMarkIcon = styled.div``;
const BenchMarkFormWrapper = styled.form``;

const BenchMarkWrapper = styled.div`
  padding: 2.2rem 2.4rem 1.8rem 2rem;
  background: transparent;
  border: 1px solid ${COLORS.torquoise};
  margin: 0.4rem 2.4rem 1rem 2.4rem;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
    background: ${COLORS.torquoise};
      }
    `};
`;
const BenchMarkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BenchMarkHeader = styled.h2`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.bold};
  margin-bottom: 1rem;
  color: ${COLORS.deepPurple};
`;

const BenchMarkText = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS['grey-400']};
  max-width: 50.3rem;
  word-break: break-word;
`;

const BenchMarkFooter = styled.div`
  display: flex;
  padding: 2.4rem;
  gap: 1.6rem;
  justify-content: flex-end;

  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
  }

  .save-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;
