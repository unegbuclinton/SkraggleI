import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card/Card";
import HeaderModal from "components/atoms/HeaderModal/HeaderModal";
import Switch from "components/atoms/Switch/Switch";
import Modal from "components/layouts/Modal";
import { Header } from "components/layouts/Modal";
import React from "react";
import {
  SetInputField,
  CardItems,
  RevenueFooter,
  RevenueLabel,
  SetRevenueWrapper,
} from "./styles";

function SetRevenueModalContent() {
  return (
    <Card className="revenue-card">
      <CardItems>
        <div className="revenue-card__left">
          <RevenueLabel>Monthly Goals</RevenueLabel>
          <SetInputField placeholder="$" type="text" />
        </div>
        <div className="revenue-card__right">
          <p className="revenue-card__option">Show in Overview</p>
          <Switch />
        </div>
      </CardItems>
      <CardItems>
        <div className="revenue-card__left">
          <RevenueLabel>Quarterly Goals</RevenueLabel>
          <SetInputField placeholder="$" type="text" />
        </div>
        <div className="revenue-card__right">
          <p className="revenue-card__option">Show in Overview</p>
          <Switch />
        </div>
      </CardItems>
      <CardItems>
        <div className="revenue-card__left">
          <RevenueLabel>Yearly Goals</RevenueLabel>
          <SetInputField placeholder="$" type="text" />
        </div>
        <div className="revenue-card__right">
          <p className="revenue-card__option">Show in Overview</p>
          <Switch />
        </div>
      </CardItems>
      <RevenueFooter>
        <div className="footer-btn">
          <Button className="set-revenue-btn" auth invert>
            Cancel
          </Button>
        </div>
        <div className="footer-btn">
          <Button className="set-revenue-btn" auth>
            Save
          </Button>
        </div>
      </RevenueFooter>
    </Card>
  );
}

export default SetRevenueModalContent;
