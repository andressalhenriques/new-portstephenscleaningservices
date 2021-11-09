import React, { Component } from 'react'

import { divider, dividerBeige,  header, laptop } from '../../assets/index'

import SliderComponent from '../../components/Slider/Slider'
import Services from '../../components/Services/Services'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'

import {
  WhatsappLink,
  Container,
  ContainerImage,
  ContainerSlider,
  ContainerContact,
  SubTitle,
  ContainerAbout,
  ContainerBody,
  ContainerHeader,
} from  './Home.styled'

import { Button } from '../../components/Button/button'
import { TitleH1, TitleH2 } from '../../GlobalStyles'

const Home = () => {
    return(
      <Container>
        <ContainerHeader>
         <img src={dividerBeige} alt="Nav Logo" id="dividerTop"/>

          <ContainerAbout>
            <ContainerBody>
              <TitleH1>Finally, the life will be easier with <span id="companyName">Port Stephens cleaning Services</span>. </TitleH1>
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
                <Button text="schedule a call"/>
            </ContainerBody>
              <div id="header"> <img src={header} alt="house" /></div>
          </ContainerAbout>
        </ContainerHeader>
          <About/>
          <Services/>
        <ContainerSlider className="div-carousel">
          <SliderComponent/>
          <img src={divider} id="dividerBottom" alt="Port Stephens Cleaning Services" />
        </ContainerSlider>
        <ContainerContact>
          <div id="contact">
            <TitleH2>Your cleaning start today. Let's cleaning</TitleH2>
            <SubTitle>Get in touch to schedule your service. We can't wait to hear from you!</SubTitle>
            <Button text="schedule a call"/>
          </div>
          <ContainerImage>
            <img src={laptop} alt="Port Stephens Cleaning Services" />
          </ContainerImage>
        </ContainerContact>
        <Footer/>
      </Container>
    )
}
export default  Home

