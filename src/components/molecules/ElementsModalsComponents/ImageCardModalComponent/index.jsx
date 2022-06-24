import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import CopyField from 'components/atoms/CopyField';
import Input from 'components/atoms/Input/Input';
import Tabs from 'components/molecules/Tabs';
import React from 'react';
import Behavior from './Behavior';
import Buttons from './Buttons';
import CustomField from './CustomField';
import ImageCard from './ImageCard';
import {
  CopyWrapper,
  FormLabel,
  ImageCardFieldWrapper,
  ImageCardFooter,
  ImageCardFormWrapper,
  ImageCardLabel,
  ImageCardrHeaderText
} from './styles';

function ImageCardModalComponent() {
  const tabs = [
    { title: 'BEHAVIOR', component: <Behavior /> },
    { title: 'CARD', component: <ImageCard /> },
    { title: 'BUTTONS', component: <Buttons /> },
    { title: 'CUSTOM FIELDS', component: <CustomField /> }
  ];
  return (
    <ImageCardFormWrapper>
      <Card className="image-card__card">
        <ImageCardrHeaderText>
          Display an interactive card that features an image, text, and button.
        </ImageCardrHeaderText>
        <ImageCardFieldWrapper>
          <ImageCardLabel>Element name</ImageCardLabel>
          <Input className="image-card__input" placeholder="Image Card #2" />
        </ImageCardFieldWrapper>
      </Card>
      <Tabs tabs={tabs} inline />
      <Card className="image-card__card">
        <CopyWrapper>
          <FormLabel>HTML CODE</FormLabel>
          <CopyField grey></CopyField>
        </CopyWrapper>
        <ImageCardFooter>
          <Button className="archive-btn" invert auth>
            Archive
          </Button>

          <Button className="update-btn" auth>
            Update Element
          </Button>
        </ImageCardFooter>
      </Card>
    </ImageCardFormWrapper>
  );
}

export default ImageCardModalComponent;
