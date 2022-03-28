import React from "react";
import { AdminContainer, AdminHeading, AdminWrapper } from "./styles";
import Button from "components/atoms/Button/Button";

function Admin() {
  return (
    <AdminWrapper>
      <AdminHeading>
        <h1 className="heading">Admin</h1>
        <Button className="edit-btn">Edit</Button>
      </AdminHeading>
      <AdminContainer>
        <h2 className="title">ID</h2>
        <p className="info id">
          TRIAL_AQRpNrDp42rGPzdoy_usa_4CbBWuSFt8e2Srqi9.
        </p>
      </AdminContainer>

      <AdminContainer>
        <h2 className="title">PRIORITY</h2>
        <p className="info priority">High</p>
      </AdminContainer>

      <AdminContainer>
        <h2 className="title">ASSIGNEE</h2>
        <p className="info assign">-</p>
      </AdminContainer>

      <AdminContainer>
        <h2 className="title">LAST NAME</h2>
        <p className="info last-name">Hanna Dandanell</p>
      </AdminContainer>

      <AdminContainer>
        <h2 className="title tag">TAGS</h2>
        <Button pill className="volunteer">
          Volunteer
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
        <p className="info status">Opted In</p>
      </AdminContainer>

      <AdminContainer>
        <h2 className="title">SUBSCRIPTION HISTORY</h2>
        <p className="info history">-</p>
      </AdminContainer>
    </AdminWrapper>
  );
}

export default Admin;
