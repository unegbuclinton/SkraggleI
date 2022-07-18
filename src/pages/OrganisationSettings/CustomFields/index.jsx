import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Table from 'components/layouts/Table';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconCopy, DPIconDelete, DPIconTablePen } from 'icons';
import React from 'react';
import styled from 'styled-components';

function CustomField() {
  const columns = [
    {
      name: 'FULL NAME',
      selector: (row) => row.fullName,
      width: '20rem'
    },

    {
      name: 'TYPE',
      selector: (row) => row.type,
      width: '30rem'
    },

    {
      name: 'ACTION',
      cell: () => (
        <IconWrapper>
          <DPIconCopy />
          <DPIconTablePen />
          <DPIconDelete className="icon" />
        </IconWrapper>
      )
    }
  ];

  const data = [
    {
      fullName: 'Troy Barnes Sr.',
      type: 'Multiple Choice (Single Select)'
    },

    {
      fullName: 'Troy Barnes Sr.',
      type: 'Multiple Choice (Single Select)'
    },

    {
      fullName: 'Troy Barnes Sr.',
      type: 'Multiple Choice (Single Select)'
    }
  ];
  return (
    <CustomFieldWrapper>
      <Header>
        <Heading>1 Custom Field</Heading>
        <HeaderContainer>
          <Button className="invite-btn">Create Contact Section</Button>
        </HeaderContainer>
      </Header>
      <TableHeader header="Volunteer Information" invert title="Add Custom Field" />
      <Table columns={columns} data={data} />
    </CustomFieldWrapper>
  );
}

export default CustomField;

const CustomFieldWrapper = styled(Card)`
  padding: 1.6rem 2.4rem 2.4rem 2.4rem;
  .icon {
    fill: #7c7c7c;
    width: 1.5rem;
  }
  margin-top: 1.6rem;
`;
const Heading = styled.h2`
  font-weight: ${FONTWEIGHTS.bold};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.black};
`;

const HeaderContainer = styled.div`
  align-items: center;
  .invite-btn {
    padding: 1.6rem 2.4rem 1.6rem 2.4rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.6rem;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
