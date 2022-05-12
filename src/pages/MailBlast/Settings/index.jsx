import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Switch from 'components/atoms/Switch/Switch';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingWrapper, SettingBody } from './styles';

function Setting() {
  const navigate = useNavigate();

  const ChangeRoute = () => {
    navigate('subscription-update');
  };
  return (
    <SettingWrapper>
      <Card>
        <div className="setting-header">
          <h1 className="setting-header__text"> Unsubscribed Settings</h1>
          <div className="setting-header-right">
            <Button className="setting-edit-btn">Edit</Button>
            <Button className="setting-preview-btn" onClick={ChangeRoute}>
              Preview
            </Button>
          </div>
        </div>
        <SettingBody>
          <h1 className="setting-body-text">Description</h1>
          <textarea name="text" id="text" placeholder="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod tempore inventore harum
            rem sapiente est maiores optio aperiam asperiores ullam?
          </textarea>
        </SettingBody>
        <div className="feedback">
          <p className="feedback-header"> Feedback Box</p>
          <p className="feedback-text"> Allow custom feedback</p>
          <Switch />
        </div>
      </Card>
    </SettingWrapper>
  );
}

export default Setting;
