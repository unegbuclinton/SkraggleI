import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconSkraggle } from 'icons';
import React from 'react';
import styled from 'styled-components';

function ReceiptAndEmails() {
  const columns = [
    {
      name: 'LETTER',
      selector: (row) => row.letter,
      width: '20rem'
    },

    {
      name: 'TYPE',
      selector: (row) => row.type,
      width: '30rem'
    },

    {
      name: 'DELIVERY METHOD',
      selector: (row) => row.deliveryMethod,
      width: '30rem'
    },

    {
      name: '',
      cell: () => (
        <IconWrapper>
          <Button invert className="preview-btn">
            Preview
          </Button>
        </IconWrapper>
      )
    }
  ];

  const data = [
    {
      letter: 'Donation',
      type: 'Acknowledgement & Thank You',
      deliveryMethod: 'Email or Print Letter'
    },

    {
      letter: 'Donation',
      type: 'Acknowledgement & Thank You',
      deliveryMethod: 'Email or Print Letter'
    },

    {
      letter: 'Donation',
      type: 'Acknowledgement & Thank You',
      deliveryMethod: 'Email or Print Letter'
    },
    {
      letter: 'Donation',
      type: 'Acknowledgement & Thank You',
      deliveryMethod: 'Email or Print Letter'
    }
  ];
  return (
    <ReceiptAndEmailsWrapper>
      <PersonalInfoWrapper>
        <PersonalInfoHeading>
          <h1 className="heading">Logo and Header</h1>
          <Button className="info-btn">Edit</Button>
        </PersonalInfoHeading>
        <PersonalInfoContainer>
          <DPIconSkraggle />
        </PersonalInfoContainer>
      </PersonalInfoWrapper>
      <PersonalInfoWrapper>
        <PersonalInfoHeading className="info-heading">
          <h1 className="heading">Receipt Details</h1>
        </PersonalInfoHeading>
        <ReceiptDetails>
          <h1 className="info">Add or edit your organization&apos;s receipting detail</h1>
          <ButtonWrapper>
            <Button invert className="preview-btn">
              Preview
            </Button>
            <Button className="info-btn">Edit</Button>
          </ButtonWrapper>
        </ReceiptDetails>
      </PersonalInfoWrapper>
      <TableWrapper>
        <Header>
          <Heading>Acknowledgement Letters</Heading>
          <HeadingText>Customize the messages of your acknowledgement letters.</HeadingText>
        </Header>
        <Table columns={columns} data={data} />
      </TableWrapper>
    </ReceiptAndEmailsWrapper>
  );
}

export default ReceiptAndEmails;

const ReceiptAndEmailsWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  .preview-btn {
    padding: 1rem 2.3rem 1rem 2.3rem;
    border: 0.1rem ${COLORS.pink} solid;
    border-radius: 4rem;
    color: ${COLORS.pink};
    font-size: ${FONTSIZES.xsmall};
    font-weight: ${FONTWEIGHTS.normal};
  }
`;

const PersonalInfoWrapper = styled(Card)`
  padding: 2.428rem 3.996rem 2.434rem 3.996rem;
  margin-bottom: 1.6rem;
  .info-heading {
    border-bottom: 0.1rem solid ${COLORS.torquoise};
  }
`;
const PersonalInfoHeading = styled.div`
  border-bottom: 0.1rem solid ${COLORS['header-grey']};
  padding-bottom: 1.7rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .heading {
    color: ${COLORS['header-grey']};
    font-size: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.lg};
  }
  .info-btn {
    background-color: ${COLORS.white};
    color: ${COLORS['grey-500']};
    border: 1px solid ${COLORS.deepPurple};
    width: 9.6rem;
    border-radius: 0.5rem;
  }
`;
const PersonalInfoContainer = styled.div`
  padding-bottom: 1.2rem;
  padding-top: 1.6rem;
`;

const ReceiptDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid ${COLORS.torquoise};
  padding-bottom: 1.7rem;
  .info {
    font-size: ${FONTSIZES.xsmall};
    color: ${COLORS['grey-200']};
    font-weight: ${FONTWEIGHTS.normal};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  .info-btn {
    background-color: ${COLORS.white};
    color: ${COLORS['grey-500']};
    border: 1px solid ${COLORS.deepPurple};
    border-radius: 0.5rem;
    padding: 1rem 3.6rem 1rem 3.6rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TableWrapper = styled(Card)`
  padding: 2.4rem;
`;

const Heading = styled.h2`
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS['gray-1']};
  margin-bottom: 1rem;
`;

const Header = styled.div``;

const HeadingText = styled.p`
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS.black};
  margin-bottom: 1rem;
`;
