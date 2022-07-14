import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import NameLogo from 'components/molecules/NameLogo';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AttachmentModal from '../MailblasModals/Attachment';
import MailFromModal from '../MailblasModals/MailFrom';
import MailToModal from '../MailblasModals/Mailto';
import SubjectModal from '../MailblasModals/Subject';
import TemplateModal from '../MailblasModals/Template';
import { ContentBody, ContentTop, ContentWrapper } from './styles';
function MailContent() {
  const [open, setOpen] = useState(false);
  const [reciept, setReciept] = useState(false);
  const [openSender, setOpenSender] = useState(false);
  const [openSubject, setOpenSubject] = useState(false);
  const [openAttach, setOpenAttach] = useState(false);

  const { eachMailBlast } = useSelector((state) => state.mailBlast);
  const { name, sent_at } = eachMailBlast;
  const mailBlastData = eachMailBlast?.campaign;
  return (
    <ContentWrapper>
      <Card className="content-card">
        <ContentTop>
          <div className="content-left">
            <div className="top">
              <p>Mail Blasts Overview</p>
              <p>Associated Campaign</p>
            </div>
            <div className="bottom">
              <p className="left">{name}</p>
              <p className="right">{mailBlastData?.name}</p>
            </div>
          </div>
          <div className="content-right">
            <Button pill className="content-btn">
              Sent
            </Button>
            <p>{sent_at}</p>
          </div>
        </ContentTop>
        <ContentBody>
          <div className="content-item">
            <div className="content-item__left">
              <Checkbox radial styledClass="content-check" />
              <p>To</p>
            </div>
            <div className="content-item__right">
              <Button
                className="content-btn"
                invert
                onClick={() => {
                  setReciept(true);
                }}>
                Add Receipients
              </Button>
              {reciept && (
                <MailToModal
                  isShown={reciept}
                  onClose={() => {
                    setReciept(false);
                  }}
                />
              )}
            </div>
          </div>
          <div className="content-item">
            <div className="content-item__left">
              <Checkbox radial styledClass="content-check" />
              <p>From</p>
            </div>
            <div className="content-item__right">
              <Button
                className="content-btn"
                invert
                onClick={() => {
                  setOpenSender(true);
                }}>
                Add Sender
              </Button>
              {openSender && (
                <MailFromModal
                  isShown={openSender}
                  onClose={() => {
                    setOpenSender(false);
                  }}
                />
              )}
            </div>
          </div>
          <div className="content-item">
            <div className="reply-item__left">
              <div className="input-check">
                <Checkbox radial styledClass="content-check" />
                <p>Reply To</p>
              </div>
              <div className="reciepient">
                <NameLogo text="Partho Datta" />
                <NameLogo text="Partho Datta" />
              </div>
            </div>
            <div className="reply-item__right">
              <Button className="content-reply-btn" invert>
                Edit Reply Receipients
              </Button>
            </div>
          </div>
          <div className="content-item">
            <div className="content-item__left">
              <Checkbox radial styledClass="content-check" />
              <p>Subject</p>
            </div>
            <div className="content-item__right">
              <Button
                className="content-btn"
                invert
                onClick={() => {
                  setOpenSubject(true);
                }}>
                Add Subject
              </Button>
              {openSubject && (
                <SubjectModal
                  isShown={setOpenSubject}
                  onClose={() => {
                    setOpenSubject(false);
                  }}
                />
              )}
            </div>
          </div>
          <div className="content-item">
            <div className="content-item__left">
              <Checkbox radial styledClass="content-check" />
              <p>
                Attachments <span className="added-text">(Optional)</span>
              </p>
            </div>
            <div className="content-item__right">
              <Button
                className="content-btn"
                invert
                onClick={() => {
                  setOpenAttach(true);
                }}>
                Add Attachments
              </Button>
              {openAttach && (
                <AttachmentModal
                  isShown={openAttach}
                  onClose={() => {
                    setOpenAttach(false);
                  }}
                />
              )}
            </div>
          </div>
          <div className="content-item">
            <div className="content-item__left">
              <Checkbox radial styledClass="content-check" />
              <p>Content</p>
            </div>
            <div className="content-item__right">
              <Button
                className="content-btn"
                invert
                onClick={() => {
                  setOpen(true);
                }}>
                Add Content
              </Button>
              {open && (
                <TemplateModal
                  isShown={open}
                  onClose={() => {
                    setOpen(false);
                  }}
                />
              )}
            </div>
          </div>
        </ContentBody>
      </Card>
    </ContentWrapper>
  );
}
export default MailContent;
