import Button from 'components/atoms/Button/Button';
import EditWebsiteModal from 'components/molecules/Contacts/SubModals/EditWebsiteModal/MainModal';
import React, { useState } from 'react';
import { WebsiteContainer, WebsiteHeading, WebsiteWrapper } from './styles';

function Websites() {
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
        <p className="info web">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">TWITTER</h2>
        <p className="info twitter">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">FACEBOOK</h2>
        <p className="info facebook">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">YOUTUBE</h2>
        <p className="info youtube">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">LINKEDIN</h2>
        <p className="info linkdin">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">INSTAGRAM</h2>
        <p className="info instagram">-</p>
      </WebsiteContainer>
      <WebsiteContainer>
        <h2 className="title">OTHER WEBSITES</h2>
        <p className="info other-web">-</p>
      </WebsiteContainer>
    </WebsiteWrapper>
  );
}

export default Websites;
