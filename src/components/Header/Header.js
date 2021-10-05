import React, { Component } from 'react';

import { puppy, homeHero, divider } from '../../assets/index'

import {
  ContainerAbout,
  ContainerBody,
  ContainerHeader,
  SubTitle,
  Title,
} from  './Header.styled'

import {
  TitleH1
} from  '../../GlobalStyles'

class Header extends Component{
  render (){
    return(
      <ContainerHeader>
        <img src={homeHero} id="family" alt="family" />
        <img src={puppy} id="dog" alt="family" />
        <ContainerAbout>
          <ContainerBody>
              <TitleH1>Port Stephens cleaning Services </TitleH1>
              <SubTitle>We're a small family-owned and -operated business located
                in Nelson Bay-Corlette, and are proud to be relied upon by local
                and out-of-town property owners to provide detailed, committed
                and reliable home, AirBnB and commercial cleaning and laundry
                services in the Port Stephens area. We happily go the extra mile
                with any number of supplementary tasks that most don't even
                consider! If you need someone to take care of all the things you
                can't (or just don't have time to), call us today for a chat,
                and we can arrange to arrive at your location weekly, fortnightly
                or monthly.
              </SubTitle>
          </ContainerBody>
        </ContainerAbout>

        {/* <ContainerBody>
            <img src={andrea} id="profile" alt="Port Stephens Cleaning Services" />

            <ContainerAbout>
              <TitleH1>Port Stephens cleaning Services </TitleH1>
              <SubTitle>We're a small family-owned and -operated business located
                in Nelson Bay-Corlette, and are proud to be relied upon by local
                and out-of-town property owners to provide detailed, committed
                and reliable home, AirBnB and commercial cleaning and laundry
                services in the Port Stephens area. We happily go the extra mile
                with any number of supplementary tasks that most don't even
                consider! If you need someone to take care of all the things you
                can't (or just don't have time to), call us today for a chat,
                and we can arrange to arrive at your location weekly, fortnightly
                or monthly.
              </SubTitle>

            </ContainerAbout>
        </ContainerBody> */}
            <img src={divider} id="divider" alt="Port Stephens Cleaning Services" />

      </ContainerHeader>
    )
  }
}
export default  Header;
