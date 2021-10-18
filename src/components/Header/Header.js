import React, { Component } from 'react';

import { puppy, homeHero, divider } from '../../assets/index'

import {
  ContainerAbout,
  ContainerBody,
  ContainerHeader,
} from  './Header.styled'

import {
  WhatsappLink,
} from  '../../pages/Home/Home.styled'

import {
  TitleH1
} from  '../../GlobalStyles'

class Header extends Component{
  render (){
    return(
      <ContainerHeader>
        <img src={homeHero} id="big-image" alt="family" />
        <img src={puppy} id="small-image" alt="family" />
        <ContainerAbout>
          <ContainerBody>
              <TitleH1>Finally, the life will be easier with <span id="companyName">Port Stephens cleaning Services</span> </TitleH1>
              <p>We're a small family-owned and -operated business located
                in Nelson Bay-Corlette, and are proud to be relied upon by local
                and out-of-town property owners to provide detailed, committed
                and reliable home, AirBnB and commercial cleaning and laundry
                services in the Port Stephens area. We happily go the extra mile
                with any number of supplementary tasks that most don't even
                consider! If you need someone to take care of all the things you
                can't (or just don't have time to), call us today for a chat,
                and we can arrange to arrive at your location weekly, fortnightly
                or monthly.
              </p>
              <WhatsappLink
                target="_blank"
                href="https://api.whatsapp.com/send?phone=61406204408&text=Hi,%20thanks%20for%20contacting%20Port%20Stephens%20Cleaning%20Services.%20Andrea%20will%20get%20in%20touch%20with%20you%20shortly.">schedule a call
                </WhatsappLink>
          </ContainerBody>
        </ContainerAbout>
            <img src={divider} id="divider" alt="Port Stephens Cleaning Services" />

      </ContainerHeader>
    )
  }
}
export default  Header;
