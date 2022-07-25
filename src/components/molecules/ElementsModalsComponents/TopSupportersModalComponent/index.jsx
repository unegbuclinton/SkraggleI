import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import CopyField from 'components/atoms/CopyField';
import Input from 'components/atoms/Input/Input';
import TopSupporterDraft from 'components/molecules/iFrameComp/TopSupporters';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import { renderCompToString } from 'utilities/helpers';
import Appearance from './Appearance';
import Behavior from './Behavior';
import {
  CopyWrapper,
  FormLabel,
  TopSupportersFieldWrapper,
  TopSupportersFooter,
  TopSupportersFormWrapper,
  TopSupportersHeaderText,
  TopSupportersLabel
} from './styles';

function TopSupportersModalComponent() {
  const tabs = [
    { title: 'BEHAVIOUR', component: <Behavior /> },
    { title: 'APPEARANCE', component: <Appearance /> }
  ];
  const htmlCode = renderCompToString(<TopSupporterDraft />);
  return (
    <TopSupportersFormWrapper>
      <Card className="topsupporters-card">
        <TopSupportersHeaderText>
          Shows a list of your supporters ordered by how much they’ve personally donated.
        </TopSupportersHeaderText>
        <TopSupportersFieldWrapper>
          <TopSupportersLabel>Element name</TopSupportersLabel>
          <Input className="topsupporters__input" placeholder="Top Supporters #2" />
        </TopSupportersFieldWrapper>
      </Card>
      <Tabs tabs={tabs} inline />
      <Card className="topsupporters-card__footer">
        <CopyWrapper>
          <FormLabel>HTML CODE</FormLabel>
          <CopyField grey value={htmlCode}></CopyField>
        </CopyWrapper>
        <TopSupportersFooter>
          <Button className="archive-btn" invert auth>
            Archive
          </Button>

          <Button className="update-btn" auth>
            Update Element
          </Button>
        </TopSupportersFooter>
      </Card>
    </TopSupportersFormWrapper>
  );
}

export default TopSupportersModalComponent;
