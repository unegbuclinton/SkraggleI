import React from "react";
import Switch from "components/atoms/Switch/Switch";
import {
  ActionWrapper,
  ActiveInactiveWrapper,
  ContentContainer,
  SwitchIconWrapper,
  ContentsWrapper,
  DateWrapper,
  ViewWrapper,
} from "./styles";
import { DPIconEventActive } from "icons";
import DashboardLayout from "components/layouts/DashboardLayout";

function ActiveInactive() {
  return (
    <DashboardLayout>
      <ActiveInactiveWrapper>
        <ContentContainer>
          <ContentsWrapper>
            <h2 className="heading">A day with orphans</h2>
          </ContentsWrapper>
          <SwitchIconWrapper>
            <Switch />
            <DPIconEventActive />
          </SwitchIconWrapper>
          <DateWrapper>
            <p className="title">Beggins</p>
            <h2 className="date">09/15/2021</h2>
          </DateWrapper>
          <ViewWrapper>
            <p className="title">Attendees</p>
            <h2 className="view">1(View all)</h2>
          </ViewWrapper>
          <ActionWrapper>
            <p className="action">Edit</p>
            <p className="action">Clone</p>
            <p className="action">Archive</p>
            <p className="delete">Delete</p>
          </ActionWrapper>
        </ContentContainer>
        <ContentContainer>
          <ContentsWrapper>
            <h2 className="heading">A day with orphans</h2>
          </ContentsWrapper>
          <SwitchIconWrapper>
            <Switch />
            <DPIconEventActive />
          </SwitchIconWrapper>
          <DateWrapper>
            <p className="title">Beggins</p>
            <h2 className="date">09/15/2021</h2>
          </DateWrapper>
          <ViewWrapper>
            <p className="title">Attendees</p>
            <h2 className="view">1(View all)</h2>
          </ViewWrapper>
          <ActionWrapper>
            <p className="action">Edit</p>
            <p className="action">Clone</p>
            <p className="action">Archive</p>
            <p className="delete">Delete</p>
          </ActionWrapper>
        </ContentContainer>
        <ContentContainer>
          <ContentsWrapper>
            <h2 className="heading">A day with orphans</h2>
          </ContentsWrapper>
          <SwitchIconWrapper>
            <Switch />
            <DPIconEventActive />
          </SwitchIconWrapper>
          <DateWrapper>
            <p className="title">Beggins</p>
            <h2 className="date">09/15/2021</h2>
          </DateWrapper>
          <ViewWrapper>
            <p className="title">Attendees</p>
            <h2 className="view">1(View all)</h2>
          </ViewWrapper>
          <ActionWrapper>
            <p className="action">Edit</p>
            <p className="action">Clone</p>
            <p className="action">Archive</p>
            <p className="delete">Delete</p>
          </ActionWrapper>
        </ContentContainer>
      </ActiveInactiveWrapper>
    </DashboardLayout>
  );
}

export default ActiveInactive;
