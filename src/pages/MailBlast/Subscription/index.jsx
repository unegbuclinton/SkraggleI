import React, { useState } from 'react';
import styled from 'styled-components';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import Card from 'components/atoms/Card';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import { datas1 } from 'utilities/overviewData';
import MailButton from '../MailButtons';
import Button from 'components/atoms/Button/Button';
import DropdownComponent from 'components/atoms/Dropdown';
import Checkbox from 'components/atoms/CheckBox';

function Subscription() {
  const [selected, setSelected] = useState('Filters');
  const subscription = [{ title: 'Anual Gala' }, { title: 'Volunteer' }];
  const columns = [
    {
      name: '',
      selector: (row) => row.contact,
      cell: (row) => <Checkbox />,
      width: '3.069rem'
    },
    {
      name: 'FULL NAME',
      selector: (row) => row.fullName,
      width: '20.9rem'
    },
    {
      name: 'PRIMARY EMAIL',
      selector: (row) => row.primaryEmail
    },
    {
      name: 'EMAIL SUBSCRIPTION STATUS',
      selector: (row) => row.emailSubscriptionStatus
    },
    {
      name: 'TAG',
      selector: (row) => row.tag,
      cell: (ow) => <MailButton btn={subscription} />
    }
  ];

  const data = [
    {
      action: '',
      fullName: 'Monthly newsletter',
      primaryEmail: 'partho.prothim@gmail.com',
      emailSubscriptionStatus: (
        <Button pill error>
          Unknown
        </Button>
      ),
      tag: ''
    },
    {
      action: '',
      fullName: 'My awesome campaign...',
      primaryEmail: 'partho.prothim@gmail.com',
      emailSubscriptionStatus: (
        <Button pill error>
          Unknown
        </Button>
      ),
      tag: ''
    },
    {
      action: '',
      fullName: 'BGA demo',
      primaryEmail: 'johny@gmail.com',
      emailSubscriptionStatus: (
        <Button pill error>
          Unknown
        </Button>
      ),
      tag: ''
    },
    {
      action: '',
      fullName: 'Newsletter',
      primaryEmail: 'hannah@yahoo.com',
      emailSubscriptionStatus: (
        <Button pill success>
          Unknown
        </Button>
      ),
      tag: ''
    },
    {
      action: '',
      fullName: 'Monthly newsletter',
      primaryEmail: 'partho.prothim@gmail.com',
      emailSubscriptionStatus: (
        <Button pill error>
          Unknown
        </Button>
      ),
      tag: ''
    },
    {
      action: '',
      fullName: 'My awesome campaign...',
      primaryEmail: 'Ppartho.prothim@gmail.com',
      emailSubscriptionStatus: (
        <Button pill success>
          Unknown
        </Button>
      ),
      tag: ''
    },
    {
      action: '',
      fullName: 'BGA demo',
      primaryEmail: 'hannah@yahoo.com',
      emailSubscriptionStatus: (
        <Button pill success>
          Unknown
        </Button>
      ),
      tag: ''
    },
    {
      action: '',
      fullName: 'Newsletter',
      primaryEmail: 'hannah@yahoo.com',
      emailSubscriptionStatus: (
        <Button pill success>
          Unknown
        </Button>
      ),
      tag: ''
    }
  ];

  return (
    <MailWrapper>
      <Card>
        <div className="mail-header">
          <p className="mail__text">55 Contacts</p>
          <div className="mail-header__right">
            <DropdownComponent selected={selected} setSelected={setSelected} data={datas1} />
            <SearchBar />
          </div>
        </div>
        <div className="table-container">
          <Table columns={columns} data={data} />
        </div>
      </Card>
    </MailWrapper>
  );
}

export default Subscription;

const MailWrapper = styled.div`
  margin-bottom: 1.6rem;

  .mail-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.6rem 2.4rem 0 3.6rem;
    padding-top: 1.6;

    .mail-btn {
      width: 18.3rem;
      height: 4.8rem;
      text-align: center;
    }

    &__right {
      display: flex;
      gap: 1.6rem;
    }
  }
  .mail__text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};

    padding: 2.4rem 0rem 1.7rem 0rem;
  }

  .mail-btn {
    width: 9.173rem;
    height: 3rem;
  }

  .table-container {
    padding: 1.6rem 2.4rem 4.2rem 2.4rem;

    .rtd_ {
      &TableCol {
        padding-left: 3.4rem;
      }
    }
  }
`;
