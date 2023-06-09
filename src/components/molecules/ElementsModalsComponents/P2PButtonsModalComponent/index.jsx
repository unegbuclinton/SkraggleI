import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import CopyField from 'components/atoms/CopyField';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import { useElement } from 'context';
import { BasicElement } from 'lib';
import React, { useEffect, useMemo } from 'react';
import Appearance from './Appearance';
import Behavior from './Behavior';
import CustomField from './CustomField';

import Questions from './Questions';

import {
  CopyContainer,
  CopyLabel,
  P2PButtonsFieldWrapper,
  P2PButtonsFooter,
  P2PButtonsFormWrapper,
  P2PButtonsLabel,
  P2PButtonsrHeaderText
} from './styles';

function P2PButtonsModalComponent() {
  const { elementConfig, setElementConfig } = useElement();

  const tabs = [
    { title: 'BEHAVIOR', component: <Behavior /> },
    { title: 'APPEARANCE', component: <Appearance /> },
    { title: 'CUSTOM FIELDS', component: <CustomField /> },
    { title: 'QUESTIONS', component: <Questions /> }
  ];

  // hooks
  useEffect(() => {
    setElementConfig((draft) => {
      draft.type = 'button';
    });
  }, []);

  const htmlCode = useMemo(() => {
    return new BasicElement(elementConfig).toString();
  }, [JSON.stringify(elementConfig)]);

  return (
    <P2PButtonsFormWrapper>
      <Card className="p2p-buttons__card">
        <P2PButtonsrHeaderText>
          Display a button that allows supporters to start P2P fundraisers on your behalf.
        </P2PButtonsrHeaderText>
        <P2PButtonsFieldWrapper>
          <P2PButtonsLabel>Element name</P2PButtonsLabel>
          <Input className="p2p-buttons__input" placeholder="P2P buttons #2" />
        </P2PButtonsFieldWrapper>
      </Card>
      <Tabs tabs={tabs} inline />
      <CopyContainer>
        <CopyLabel>HTML CODE</CopyLabel>
        <CopyField value={htmlCode} grey />
      </CopyContainer>
      <Card className="p2p-buttons__card">
        <P2PButtonsFooter>
          <Button className="archive-btn" invert auth>
            Archive
          </Button>

          <Button className="update-btn" auth>
            Update Element
          </Button>
        </P2PButtonsFooter>
      </Card>
    </P2PButtonsFormWrapper>
  );
}

export default P2PButtonsModalComponent;
