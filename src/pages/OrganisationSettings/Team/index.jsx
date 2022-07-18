import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import CheckBox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconCopy, DPIconDelete, DPIconTablePen } from 'icons';
import React from 'react';
import styled from 'styled-components';

function TeamMembers() {
  const columns = [
    {
      name: '',
      cell: () => <CheckBox />,
      width: '8rem'
    },

    {
      name: 'FULL NAME',
      selector: (row) => row.fullName,
      width: '20rem'
    },

    {
      name: 'EMAIL',
      selector: (row) => row.email,
      width: '35rem'
    },

    {
      name: 'PERMISSION',
      selector: (row) => row.permission,
      width: '20rem'
    },

    {
      name: 'TYPE',
      selector: (row) => row.type
      //   width: '25.027rem'
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
      email: 'troybarnesthrowsfootballs@gmail.com',
      permission: 'Administrator',
      type: 'User'
    },

    {
      fullName: 'Troy Barnes Sr.',
      email: 'troybarnesthrowsfootballs@gmail.com',
      permission: 'Administrator',
      type: 'User'
    },

    {
      fullName: 'Troy Barnes Sr.',
      email: 'troybarnesthrowsfootballs@gmail.com',
      permission: 'Administrator',
      type: 'User'
    },

    {
      fullName: 'Troy Barnes Sr.',
      email: 'troybarnesthrowsfootballs@gmail.com',
      permission: 'Administrator',
      type: 'User'
    },
    {
      fullName: 'Troy Barnes Sr.',
      email: 'troybarnesthrowsfootballs@gmail.com',
      permission: 'Administrator',
      type: 'User'
    },

    {
      fullName: 'Troy Barnes Sr.',
      email: 'troybarnesthrowsfootballs@gmail.com',
      permission: 'Administrator',
      type: 'User'
    }
  ];
  return (
    <TeamMembersWrapper>
      <Header>
        <Heading>Team Members</Heading>
        <HeaderContainer>
          <HeaderText>Learn more about permissions</HeaderText>
          <Button className="invite-btn">Invite Member</Button>
        </HeaderContainer>
      </Header>
      <Table columns={columns} data={data} />
    </TeamMembersWrapper>
  );
}

export default TeamMembers;

const TeamMembersWrapper = styled(Card)`
  padding: 1.6rem 2.4rem 2.4rem 2.4rem;
  .icon {
    fill: #7c7c7c;
    width: 1.5rem;
  }
  margin-top: 1.6rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.6rem;
`;

const Heading = styled.h2`
  font-weight: ${FONTWEIGHTS.bold};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.black};
`;

const HeaderText = styled.p`
  white-space: nowrap;
  color: ${COLORS.pink};
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};
  text-transform: capitalize;
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  .invite-btn {
    padding: 1.6rem 2.4rem 1.6rem 2.4rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
