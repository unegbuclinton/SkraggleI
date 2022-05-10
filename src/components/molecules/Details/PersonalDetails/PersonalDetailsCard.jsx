import Button from 'components/atoms/Button/Button';
import { DPIconsPen } from 'icons';
import React from 'react';
import { CardWrapper, ContentsWrapper, Line } from './styles';

function PersonalDetailsCard() {
  return (
    <CardWrapper>
      <ContentsWrapper>
        <div className="icon-container">
          <DPIconsPen className="icon-container__pen-icon" />
        </div>
        <div className="container">
          <div className="container__circle">
            <p className="container__circle--text">TB</p>
          </div>
          <p className="container__name">Troy Barnes Sr</p>
        </div>
        <div className="highlight">
          <h2 className="highlight__heading">Highlights</h2>
          <p className="highlight__phone">PRIMARY PHONE</p>
          <p className="highlight__phone-number">(704) 808-1298</p>
        </div>
        <Line />
        <div className="primary">
          <h2 className="primary__heading">PRIMARY EMAIL</h2>
          <p className="primary__email">troybarnesthrowsfootballs@gmail.com</p>
        </div>
        <Line />
        <div className="address">
          <h2 className="address__heading">ADDRESS</h2>
          <div className="address__container">
            6545 France Avenue South Edina, Minnesota, 55435 United States
          </div>
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
