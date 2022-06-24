import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import Behavior from './Behavior';
import Questions from './Questions';
import {
  P2PLinkFieldWrapper,
  P2PLinkFooter,
  P2PLinkFormWrapper,
  P2PLinkHeaderText,
  P2PLinkLabel
} from './styles';

function P2PLinkModalComponent() {
  const tabs = [
    { title: 'BEHAVIOUR', component: <Behavior /> },
    { title: 'QUESTIONS', component: <Questions /> }
  ];
  return (
    <P2PLinkFormWrapper>
      <Card className="p2plink-card">
        <P2PLinkHeaderText>
          Get a link that sends supporters to start P2P fundraisers on your behalf.
        </P2PLinkHeaderText>
        <P2PLinkFieldWrapper>
          <P2PLinkLabel>Element name</P2PLinkLabel>
          <Input className="p2plink__input" placeholder="P2P link #2" />
        </P2PLinkFieldWrapper>
      </Card>
      <Tabs tabs={tabs} inline />
      <Card className="p2plink-card__footer">
        <P2PLinkFooter>
          <Button className="archive-btn" invert auth>
            Archive
          </Button>

          <Button className="update-btn" auth>
            Update Element
          </Button>
        </P2PLinkFooter>
      </Card>
    </P2PLinkFormWrapper>
  );
}

export default P2PLinkModalComponent;
