import Button from 'components/atoms/Button/Button';
import AdminModal from 'components/molecules/Contacts/Modals/SubModals/EditAdminModal/Modal';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AdminContainer, AdminHeading, AdminWrapper } from './styles';

function Admin() {
  const { eachContact } = useSelector((state) => state.contact);
  const { organization_id, priority, assignee, email_subscription_status, tags, last_name } =
    eachContact;
  const [open, setOpen] = useState(false);
  return (
    <>
      <AdminModal
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <AdminWrapper>
        <AdminHeading>
          <h1 className="heading">Admin</h1>
          <Button className="edit-btn" onClick={() => setOpen(true)}>
            Edit
          </Button>
        </AdminHeading>
        <AdminContainer>
          <h2 className="title">ID</h2>
          <p className="info id">{organization_id}</p>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title">PRIORITY</h2>
          <p className="info priority">{priority}</p>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title">ASSIGNEE</h2>
          <p className="info assign">{assignee}</p>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title">LAST NAME</h2>
          <p className="info last-name">{last_name}</p>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title tag">TAGS</h2>
          <Button pill className="volunteer">
            {tags}
          </Button>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title">NOTES</h2>
          <p className="info note">Is a Raptors fan</p>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title">SOLICITATION</h2>
          <p className="info yes">Yes</p>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title">EMAIL SUBSCRIPTION STATUS </h2>
          <p className="info status">{email_subscription_status}</p>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title">SUBSCRIPTION HISTORY</h2>
          <p className="info history">-</p>
        </AdminContainer>
      </AdminWrapper>
    </>
  );
}

export default Admin;
