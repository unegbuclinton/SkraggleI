/* eslint-disable no-unused-vars */
import Input from 'components/atoms/Input/Input';
import { DPIconSearch } from 'icons';
import React, { useState } from 'react';
import {
  ElementButton,
  ElementModalWrapper,
  ElementText,
  ElementWrapper,
  HeaderWrapper,
  SearchWrapper
} from './styles';

function NewElement({
  hideModal,
  setOpenDonateButton,
  setOpenDonateLink,
  setOpenStickyButton,
  setOpenReminderModal,
  setOpenSocialProofModal,
  setOpenMessageBarModal,
  setOpenQrCodeModal,
  setOpenDonationLevels,
  setOpenButtonGroup,
  setOpenDonationFormModal,
  setOpenSimpleForm,
  setOpenImageCard,
  setOpenGoalMeter,
  setOpenStartCounter,
  setOpenImpactSlider,
  setOpenSupporterModal,
  setOpenRecentDonation,
  setOpenP2pButtons,
  setOpenP2pLink,
  setOpenTopFunRaiser
}) {
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
  // const handleDonateButton = () => {

  // };
  const ElementContents = [
    {
      name: 'Donate Button',
      title: 'Display an animated donation button anywhere on your website.',
      click: () => {
        setOpenDonateButton(true);
        hideModal();
      }
    },
    {
      name: 'Donate Link',
      title:
        'Get a link that sends visitors to your website and automatically opens donation checkout.',
      click: () => {
        setOpenDonateLink(true);
        hideModal();
      }
    },
    {
      name: 'Sticky Button',
      title: 'Display an animated donation button that sticks to any side of your website.',
      click: () => {
        setOpenStickyButton(true);
        hideModal();
      }
    },
    {
      name: 'Reminder',
      title: 'Show a pop-up reminder to donate when a supporter closes checkout.',
      click: () => {
        setOpenReminderModal(true);
        hideModal();
      }
    },
    {
      name: 'Donation Form',
      title: 'Display a customizable donation form anywhere on your website.',
      click: () => {
        setOpenDonationFormModal(true);
        hideModal();
      }
    },
    {
      name: 'Simple Form',
      title: 'Display a simple one-line donation form anywhere on your website.',
      click: () => {
        setOpenSimpleForm(true);
        hideModal();
      }
    },
    {
      name: 'Image Card',
      title: 'Display an interactive card that features an image, text, and button.',
      click: () => {
        setOpenImageCard(true);
        hideModal();
      }
    },
    {
      name: 'Goal Meter',
      title: ' Display an animated progress bar of your campaign’s performance.',
      click: () => {
        setOpenGoalMeter(true);
        hideModal();
      }
    },
    {
      name: 'Start Counter',
      title: 'Display an animated statistic of your campaign’s performance.',
      click: () => {
        setOpenStartCounter(true);
        hideModal();
      }
    },
    {
      name: 'Impact Slider',
      title:
        'Engage supporters with a customizable interactive slider that shows their donation’s impact.',
      click: () => {
        setOpenImpactSlider(true);
        hideModal();
      }
    },
    {
      name: 'Donation Levels',
      title: 'Display one or more cards with customizable text, donation amounts, and buttons.',
      click: () => {
        setOpenDonationLevels(true);
        hideModal();
      }
    },
    {
      name: 'Button Group',
      title: 'Display a set of buttons with customizable donation amounts',
      click: () => {
        setOpenButtonGroup(true);
        hideModal();
      }
    },
    {
      name: 'Message Bar',
      title: 'Display a full-width message and button at the top or bottom of your website.',
      click: () => {
        setOpenMessageBarModal(true);
        hideModal();
      }
    },
    {
      name: 'Top Supporter',
      title: 'Shows a list of your supporters ordered by how much they’ve personally donated.',
      click: () => {
        setOpenSupporterModal(true);
        hideModal();
      }
    },
    {
      name: 'Social Proof',
      title: 'Display a real-time notification of recent donations.',
      click: function () {
        setOpenSocialProofModal(true);
        hideModal();
      }
    },
    {
      name: 'QR Code',
      title:
        'Generate a scannable code that when scanned, directs supporters to a campaign’s checkout.',
      click: () => {
        setOpenQrCodeModal(true);
        hideModal();
      }
    },
    {
      name: 'Recent Donations',
      title: 'Show a list of your most recent donations.',
      click: () => {
        setOpenRecentDonation(true);
        hideModal();
      }
    },
    {
      name: 'P2P Buttons',
      title: 'Display a button that allows supporters to start P2P fundraisers on your behalf.',
      click: () => {
        setOpenP2pButtons(true);
        hideModal();
      }
    },
    {
      name: 'P2P Link',
      title: 'Get a link that sends supporters to start P2P fundraisers on your behalf.',
      click: () => {
        setOpenP2pLink(true);
        hideModal();
      }
    },
    {
      name: 'Top Fundraiser',
      title: 'Show a list of your P2P fundraisers ordered by how much they’ve raised',
      click: () => {
        setOpenTopFunRaiser(true);
        hideModal();
      }
    }
  ];
  return (
    <>
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
