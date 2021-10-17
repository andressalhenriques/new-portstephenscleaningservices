import React, { Component } from 'react';

import { homeHero, divider } from '../../assets/index'

import {
  ContainerAbout,
  ContainerBody,
  ContainerHeader,
  ContainerP,
} from  '../../pages/Career/career.styled'

import {
  TitleH1
} from  '../../GlobalStyles'

class Career extends Component{
  render (){
    return(
      <ContainerHeader>
        <img src={homeHero} id="big-image" alt="family" />
        <ContainerAbout>
          <ContainerBody>
              <TitleH1>Looking for a cleaning job? </TitleH1>
              <h2>With <span id="companyName"> Port Stephens cleaning Services</span> you can find a housekeeping job!  </h2>
              <h3>Work as a cleaner in Australia</h3>
              <h4>Explain about how to be a cleaner </h4>
              <ContainerP>
                <p>Attractive rate: Earn up to $26.50/hr</p>
                <p>Ongoing support: Professional guidance from the Port Stephens team team</p>
                <p>Regular payments: Get paid twice a month</p>
              </ContainerP>
          </ContainerBody>
        </ContainerAbout>
            <img src={divider} id="divider" alt="Port Stephens Cleaning Services" />

      </ContainerHeader>
    )
  }
}
export default  Career;
