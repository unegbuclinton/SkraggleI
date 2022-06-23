import Input from 'components/atoms/Input/Input';
import MessageBarModal from 'components/molecules/ElementModal/MessageBarModal';
import ReminderModal from 'components/molecules/ElementModal/ReminderModal';
import SocialProofModal from 'components/molecules/ElementModal/SocialProofModal';
import StickyButtonModal from 'components/molecules/ElementModal/StickyButtonModal';
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
  const [openMessageBarModal, setOpenMessageBarModal] = useState(false);
  const [openSocialProofModal, setOpenSocialProofModal] = useState(false);
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
      title: 'Display a customizable donation form anywhere on your website.'
    },
    {
      name: 'Simple Form',
      title: 'Display a simple one-line donation form anywhere on your website.'
    },
    {
      name: 'Image Card',
      title: 'Display an interactive card that features an image, text, and button.'
    },
    {
      name: 'Goal Meter',
      title: ' Display an animated progress bar of your campaign’s performance.'
    },
    {
      name: 'Start Counter',
      title: 'Display an animated statistic of your campaign’s performance.'
    },
    {
      name: 'Impact Slider',
      title:
        'Engage supporters with a customizable interactive slider that shows their donation’s impact.'
    },
    {
      name: 'Donation Levels',
      title: 'Display one or more cards with customizable text, donation amounts, and buttons.'
    },
    {
      name: 'Button Group',
      title: 'Display a set of buttons with customizable donation amounts'
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
      title: 'Shows a list of your supporters ordered by how much they’ve personally donated.'
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
        'Generate a scannable code that when scanned, directs supporters to a campaign’s checkout.'
    },
    {
      name: 'Recent Donations',
      title: 'Show a list of your most recent donations.'
    },
    {
      name: 'P2P Buttons',
      title: 'Display a button that allows supporters to start P2P fundraisers on your behalf.'
    },
    {
      name: 'P2P Link',
      title: 'Get a link that sends supporters to start P2P fundraisers on your behalf.'
    },
    {
      name: 'Top Fundraiser',
      title: 'Show a list of your P2P fundraisers ordered by how much they’ve raised'
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
