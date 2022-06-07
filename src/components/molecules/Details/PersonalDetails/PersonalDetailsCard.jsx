import Button from 'components/atoms/Button/Button';
import { DPIconsPen } from 'icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { nameAbbr } from 'utilities/helpers';
import { CardWrapper, ContentsWrapper, Line } from './styles';

function PersonalDetailsCard() {
  const { eachContact } = useSelector((state) => state.contact);
  const { first_name, last_name, primary_email, address, primary_phone } = eachContact;
  const fullName = `${first_name} ${last_name}`;

  return (
    <CardWrapper>
      <ContentsWrapper>
        <div className="icon-container">
          <DPIconsPen className="icon-container__pen-icon" />
        </div>
        <div className="container">
          <div className="container__circle">
            <p className="container__circle--text">{nameAbbr(fullName)}</p>
          </div>
          <p className="container__name"> {`${first_name} ${last_name}`}</p>
        </div>
        <div className="highlight">
          <h2 className="highlight__heading">Highlights</h2>
          <p className="highlight__phone">PRIMARY PHONE</p>
          <p className="highlight__phone-number">{primary_phone}</p>
        </div>
        <Line />
        <div className="primary">
          <h2 className="primary__heading">PRIMARY EMAIL</h2>
          <p className="primary__email">{primary_email}</p>
        </div>
        <Line />
        <div className="address">
          <h2 className="address__heading">ADDRESS</h2>
          <div className="address__container">{address}</div>
        </div>
        <Line />
        <div className="assignee">
          <h2 className="assignee__heading">ASSIGNEE</h2>
          <p className="assignee__name">Hanna Dandanell</p>
        </div>
        <Line />
        <div className="priority">
          <h2 className="priority__heading">PRIORITY</h2>
          <p className="priority__name">High</p>
        </div>
        <Line />
        <div className="tags">
          <h2 className="tags__heading">TAGS</h2>
          <Button pill className="tags__btn">
            Volunteer
          </Button>
        </div>
      </ContentsWrapper>
    </CardWrapper>
  );
}

export default PersonalDetailsCard;
