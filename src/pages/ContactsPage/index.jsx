import DashboardLayout from 'components/layouts/DashboardLayout';
import Tabs from 'components/molecules/Tabs';
import CompaniesTable from 'pages/ContactsPage/Companies/CompaniesTable';
import ContactsTable from 'pages/ContactsPage/Contacts/ContactsTable';
import HouseHoldsTable from 'pages/ContactsPage/HouseHold/HouseHoldsTable';
import TagsTable from 'pages/ContactsPage/Tags/TagsTable';
import ArchivedContact from './ArchivedContact';
import DeletedContacts from './DeletedContacts';

const Contacts = () => {
  const links = [
    {
      title: 'Contact',
      component: <ContactsTable />
    },
    {
      title: 'companies',
      component: <CompaniesTable />
    },
    {
      title: 'household',
      component: <HouseHoldsTable />
    },
    {
      title: 'tags',
      component: <TagsTable />
    },
    {
      title: 'Archive',
      children: [
        {
          title: 'Archived',
          component: <ArchivedContact />
        },
        {
          title: 'Deleted Contacts',
          component: <DeletedContacts />
        }
      ]
    },
    {
      name: 'Archive',
      children: [
        {
          childname: 'Archived Contacts',
          component: <DeletedContacts />
        },
        {
          childname: 'Deleted Contacts',
          component: <DeletedContacts />
        }
      ]
    }
  ];

  return (
    <DashboardLayout>
      <Tabs tabs={links} />
    </DashboardLayout>
  );
};

export default Contacts;
