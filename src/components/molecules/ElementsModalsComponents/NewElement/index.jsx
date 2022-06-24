import Input from 'components/atoms/Input/Input';
import ButtonGroupModal from 'components/molecules/ElementModal/ButtonGroupModal';
import DonationFormModal from 'components/molecules/ElementModal/DonationForm';
import DonationLevelModal from 'components/molecules/ElementModal/DonationLevelModal';
import GoalMeterModal from 'components/molecules/ElementModal/GoalMeter';
import ImageCardModal from 'components/molecules/ElementModal/ImageCardModal';
import ImpactSliderModal from 'components/molecules/ElementModal/ImpactSliderModal';
import MessageBarModal from 'components/molecules/ElementModal/MessageBarModal';
import P2PButtonsModal from 'components/molecules/ElementModal/P2PButtons';
import P2PLinkModal from 'components/molecules/ElementModal/P2PLinkModal';
import QrCodeModal from 'components/molecules/ElementModal/QrCodeModal';
import RecentDonationModal from 'components/molecules/ElementModal/RecentDonation';
import ReminderModal from 'components/molecules/ElementModal/ReminderModal';
import SimpleFormModal from 'components/molecules/ElementModal/SimpleFormModal';
import SocialProofModal from 'components/molecules/ElementModal/SocialProofModal';
import StartCounterModal from 'components/molecules/ElementModal/StartCounterModal';
import StickyButtonModal from 'components/molecules/ElementModal/StickyButtonModal';
import TopFundraiserModal from 'components/molecules/ElementModal/TopFundraiserModal';
import TopSupportersModal from 'components/molecules/ElementModal/TopSupporters';
import { DPIconSearch } from 'icons';
import React, { useState } from 'react';
import DonateModal from '../../ElementModal/DonateButtonModal';
import DonateLinkModal from '../../ElementModal/DonateLinkModal';
import {
  ElementButton,
  ElementModalWrapper,
  ElementText,
  ElementWrapper,
  HeaderWrapper,
  SearchWrapper
} from './styles';

function NewElement() {
  const [openDonateButton, setOpenDonateButton] = useState(false);
  const [openDonateLink, setOpenDonateLink] = useState(false);
  const [openStckyButton, setOpenStickyButton] = useState(false);
  const [openReminderModal, setOpenReminderModal] = useState(false);
  const [openDonationFormModal, setOpenDonationFormModal] = useState(false);
  const [openSimpleForm, setOpenSimpleForm] = useState(false);
  const [openImageCard, setOpenImageCard] = useState(false);
  const [openGoalMeter, setOpenGoalMeter] = useState(false);
  const [openStartCounter, setOpenStartCounter] = useState(false);
  const [openMessageBarModal, setOpenMessageBarModal] = useState(false);
  const [openSupporterModal, setOpenSupporterModal] = useState(false);
  const [openSocialProofModal, setOpenSocialProofModal] = useState(false);
  const [openQrCodeModal, setOpenQrCodeModal] = useState(false);
  const [openRecentDonation, setOpenRecentDonation] = useState(false);
  const [openP2pButtons, setOpenP2pButtons] = useState(false);
  const [openP2pLink, setOpenP2pLink] = useState(false);
  const [openTopFundRaiser, setOpenTopFunRaiser] = useState(false);
  const [openImpactSlider, setOpenImpactSlider] = useState(false);
  const [openDonationLevels, setOpenDonationLevels] = useState(false);
  const [openButtonGroup, setOpenButtonGroup] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = ElementContents.filter((element) => {
        return Object.values(element.name)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(ElementContents);
    }
  };
  const ElementContents = [
    {
      name: 'Donate Button',
      title: 'Display an animated donation button anywhere on your website.',
      click: function () {
        return setOpenDonateButton(true);
      }
    },
    {
      name: 'Donate Link',
      title:
        'Get a link that sends visitors to your website and automatically opens donation checkout.',
      click: function () {
        return setOpenDonateLink(true);
      }
    },
    {
      name: 'Sticky Button',
      title: 'Display an animated donation button that sticks to any side of your website.',
      click: function () {
        return setOpenStickyButton(true);
      }
    },
    {
      name: 'Reminder',
      title: 'Show a pop-up reminder to donate when a supporter closes checkout.',
      click: function () {
        return setOpenReminderModal(true);
      }
    },
    {
      name: 'Donation Form',
      title: 'Display a customizable donation form anywhere on your website.',
      click: function () {
        return setOpenDonationFormModal(true);
      }
    },
    {
      name: 'Simple Form',
      title: 'Display a simple one-line donation form anywhere on your website.',
      click: function () {
        return setOpenSimpleForm(true);
      }
    },
    {
      name: 'Image Card',
      title: 'Display an interactive card that features an image, text, and button.',
      click: function () {
        return setOpenImageCard(true);
      }
    },
    {
      name: 'Goal Meter',
      title: ' Display an animated progress bar of your campaign’s performance.',
      click: function () {
        return setOpenGoalMeter(true);
      }
    },
    {
      name: 'Start Counter',
      title: 'Display an animated statistic of your campaign’s performance.',
      click: function () {
        return setOpenStartCounter(true);
      }
    },
    {
      name: 'Impact Slider',
      title:
        'Engage supporters with a customizable interactive slider that shows their donation’s impact.',
      click: function () {
        return setOpenImpactSlider(true);
      }
    },
    {
      name: 'Donation Levels',
      title: 'Display one or more cards with customizable text, donation amounts, and buttons.',
      click: function () {
        return setOpenDonationLevels(true);
      }
    },
    {
      name: 'Button Group',
      title: 'Display a set of buttons with customizable donation amounts',
      click: function () {
        return setOpenButtonGroup(true);
      }
    },
    {
      name: 'Message Bar',
      title: 'Display a full-width message and button at the top or bottom of your website.',
      click: function () {
        return setOpenMessageBarModal(true);
      }
    },
    {
      name: 'Top Supporter',
      title: 'Shows a list of your supporters ordered by how much they’ve personally donated.',
      click: function () {
        return setOpenSupporterModal(true);
      }
    },
    {
      name: 'Social Proof',
      title: 'Display a real-time notification of recent donations.',
      click: function () {
        return setOpenSocialProofModal(true);
      }
    },
    {
      name: 'QR Code',
      title:
        'Generate a scannable code that when scanned, directs supporters to a campaign’s checkout.',
      click: function () {
        return setOpenQrCodeModal(true);
      }
    },
    {
      name: 'Recent Donations',
      title: 'Show a list of your most recent donations.',
      click: function () {
        return setOpenRecentDonation(true);
      }
    },
    {
      name: 'P2P Buttons',
      title: 'Display a button that allows supporters to start P2P fundraisers on your behalf.',
      click: function () {
        return setOpenP2pButtons(true);
      }
    },
    {
      name: 'P2P Link',
      title: 'Get a link that sends supporters to start P2P fundraisers on your behalf.',
      click: function () {
        return setOpenP2pLink(true);
      }
    },
    {
      name: 'Top Fundraiser',
      title: 'Show a list of your P2P fundraisers ordered by how much they’ve raised',
      click: function () {
        return setOpenTopFunRaiser(true);
      }
    }
  ];
  return (
    <>
      <DonateModal isShown={openDonateButton} onClose={() => setOpenDonateButton(false)} />
      <DonateLinkModal isShown={openDonateLink} onClose={() => setOpenDonateLink(false)} />
      <StickyButtonModal isShown={openStckyButton} onClose={() => setOpenStickyButton(false)} />
      <ReminderModal isShown={openReminderModal} onClose={() => setOpenReminderModal(false)} />
      <SocialProofModal
        isShown={openSocialProofModal}
        onClose={() => setOpenSocialProofModal(false)}
      />
      <MessageBarModal
        isShown={openMessageBarModal}
        onClose={() => setOpenMessageBarModal(false)}
      />
      <QrCodeModal isShown={openQrCodeModal} onClose={() => setOpenQrCodeModal(false)} />
      <DonationLevelModal
        isShown={openDonationLevels}
        onClose={() => setOpenDonationLevels(false)}
      />
      <ButtonGroupModal isShown={openButtonGroup} onClose={() => setOpenButtonGroup(false)} />
      <DonationFormModal
        isShown={openDonationFormModal}
        onClose={() => setOpenDonationFormModal(false)}
      />
      <SimpleFormModal isShown={openSimpleForm} onClose={() => setOpenSimpleForm(false)} />
      <ImageCardModal isShown={openImageCard} onClose={() => setOpenImageCard(false)} />
      <GoalMeterModal isShown={openGoalMeter} onClose={() => setOpenGoalMeter(false)} />
      <StartCounterModal isShown={openStartCounter} onClose={() => setOpenStartCounter(false)} />
      <ImpactSliderModal isShown={openImpactSlider} onClose={() => setOpenImpactSlider(false)} />
      <TopSupportersModal
        isShown={openSupporterModal}
        onClose={() => setOpenSupporterModal(false)}
      />
      <RecentDonationModal
        isShown={openRecentDonation}
        onClose={() => setOpenRecentDonation(false)}
      />
      <P2PButtonsModal isShown={openP2pButtons} onClose={() => setOpenP2pButtons(false)} />
      <P2PLinkModal isShown={openP2pLink} onClose={() => setOpenP2pLink(false)} />
      <TopFundraiserModal isShown={openTopFundRaiser} onClose={() => setOpenTopFunRaiser(false)} />
      <ElementModalWrapper>
        <HeaderWrapper>
          <SearchWrapper>
            <DPIconSearch className="search" />
          </SearchWrapper>
          <Input
            className="input-field"
            onChange={(e) => searchItems(e.target.value)}
            placeholder="Quick search"
          />
        </HeaderWrapper>
        {searchInput.length > 0
          ? filteredResults.map((element, idx) => {
              return (
                <ElementWrapper key={idx}>
                  <ElementButton onClick={element.click}>{element.name}</ElementButton>
                  <ElementText>{element.title}</ElementText>
                </ElementWrapper>
              );
            })
          : ElementContents.map((element, idx) => (
              <ElementWrapper key={idx}>
                <ElementButton onClick={element.click}>{element.name}</ElementButton>
                <ElementText>{element.title}</ElementText>
              </ElementWrapper>
            ))}
      </ElementModalWrapper>
    </>
  );
}

export default NewElement;
