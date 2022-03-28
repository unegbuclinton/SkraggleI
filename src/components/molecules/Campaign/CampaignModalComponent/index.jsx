import React from "react";

import Card from "components/atoms/Card";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import Button from "components/atoms/Button/Button";
import data from "utilities/filterData"

import { ModalWrapper, ModalInput, ModalInputDescription, ButtonsContainer } from "./styles";



const CampaignModalComponent = () => {
    return(
        <ModalWrapper>
            <Card>
                <h1>CAMPAIGN NAME</h1>
                <ModalInput
                type="text"
                placeholder="Lorem Ipsum"/>
                <h1>DESCRIPTION</h1>
                <ModalInputDescription
                type="text"
                placeholder="Lorem Ipsum"/>
                <h1>CAMPAIGN FUNDRAISING GOALS</h1>
                <ModalInput
                type="text"
                placeholder="Lorem Ipsum"/>
                <h1>FOLLOWERS</h1>
                <CustomDropdown data={data} className="dropdown-followers"></CustomDropdown>
                <ButtonsContainer><Button className="cancel-btn">Cancel</Button><Button className="save-btn">Save</Button></ButtonsContainer>
                
            </Card>
        </ModalWrapper>
    )

}


export default CampaignModalComponent