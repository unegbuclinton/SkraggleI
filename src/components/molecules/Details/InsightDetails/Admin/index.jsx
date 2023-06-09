import Button from 'components/atoms/Button/Button';
import AdminModal from 'components/molecules/Contacts/Modals/SubModals/EditAdminModal/Modal';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AdminContainer, AdminHeading, AdminWrapper } from './styles';

function Admin() {
  const { token } = useSelector((state) => state.auth);
  const { eachContact } = useSelector((state) => state.contact);
  const { organization_id, priority, is_subscribed_to_mailblasts, note, tags } = eachContact;
  const [open, setOpen] = useState(false);

  const userData = token?.profile;

  const userName = `${userData?.first_name}  ${userData?.last_name}`;
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
          <p className="info assign">{userName}</p>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title">LAST NAME</h2>
          <p className="info last-name"></p>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title tag">TAGS</h2>
          {tags?.map(({ name }, idx) => (
            <Button pill className="volunteer" key={idx}>
              {name}
            </Button>
          ))}
        </AdminContainer>

        <AdminContainer>
          <h2 className="title">NOTES</h2>
          <p className="info note">{note}</p>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title">SOLICITATION</h2>
          <p className="info yes">Yes</p>
        </AdminContainer>

        <AdminContainer>
          <h2 className="title">EMAIL SUBSCRIPTION STATUS </h2>
          <p className="info status">{is_subscribed_to_mailblasts ? 'Opt-In' : 'Opt-Out'}</p>
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
