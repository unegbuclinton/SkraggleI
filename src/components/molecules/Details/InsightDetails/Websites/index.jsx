import Button from 'components/atoms/Button/Button';
import EditWebsiteModal from 'components/molecules/Contacts/SubModals/EditWebsiteModal/MainModal';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { WebsiteContainer, WebsiteHeading, WebsiteWrapper } from './styles';

function Websites() {
  const { eachContact } = useSelector((state) => state.contact);

  const { instagram, facebook, linkedin, youtube, twitter, website, other_websites } = eachContact;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <WebsiteWrapper>
      <WebsiteHeading>
        <h1 className="heading">Websites</h1>
        <Button className="heading-btn" onClick={() => setModalIsOpen(true)}>
          Edit
        </Button>
        {modalIsOpen && (
          <EditWebsiteModal
            isShown={modalIsOpen}
            onClose={() => {
              setModalIsOpen(false);
            }}
          />
        )}
      </WebsiteHeading>
      <WebsiteContainer>
        <h2 className="title">WEBSITE</h2>
        <p className="info web">{website}</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">TWITTER</h2>
        <p className="info twitter">{twitter}</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">FACEBOOK</h2>
        <p className="info facebook">{facebook}</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">YOUTUBE</h2>
        <p className="info youtube">{youtube}</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">LINKEDIN</h2>
        <p className="info linkdin">{linkedin}</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">INSTAGRAM</h2>
        <p className="info instagram"> {instagram}</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">OTHER WEBSITES</h2>
        <p className="info other-web">{other_websites}</p>
      </WebsiteContainer>
    </WebsiteWrapper>
  );
}

export default Websites;
