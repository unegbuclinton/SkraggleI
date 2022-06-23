import apiInstance from 'apiInstance';
import Button from 'components/atoms/Button/Button';
import { DPIconsPen } from 'icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { nameAbbr } from 'utilities/helpers';
import { CardWrapper, ContentsWrapper, Line } from './styles';

function PersonalDetailsCard() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const response = await apiInstance({
        method: 'get',
        url: '/admin'
      });
      const data = response?.data?.message;
      setUserData(data);
    };

    getUser();
  }, []);
  const { eachContact } = useSelector((state) => state.contact);
  const {
    first_name,
    last_name,
    primary_email,
    address,
    primary_phone,
    priority,
    tags,
    city,
    state,
    postal_code,
    country,
    unit
  } = eachContact;
  const fullName = `${first_name} ${last_name}`;
  const tag = tags;
  const userName = `${userData?.first_name}  ${userData?.last_name}`;
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
          <div className="address__container">
            {address}, {unit},{city}, {state}, {country}, {postal_code}
          </div>
        </div>
        <Line />
        <div className="assignee">
          <h2 className="assignee__heading">ASSIGNEE</h2>
          <p className="assignee__name">{userName}</p>
        </div>
        <Line />
        <div className="priority">
          <h2 className="priority__heading">PRIORITY</h2>
          <p className="priority__name">{priority}</p>
        </div>
        <Line />
        <div className="tags">
          <h2 className="tags__heading">TAGS</h2>
          {tag?.map((tag, idx) => (
            <Button key={idx} pill className="tags__btn">
              {tag}
            </Button>
          ))}
        </div>
      </ContentsWrapper>
    </CardWrapper>
  );
}

export default PersonalDetailsCard;
