import React, { Component } from 'react'

import { divider, laptop } from '../../assets/index'

import SliderComponent from '../../components/Slider/Slider'
import Header from '../../components/Header/Header'
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
} from  './Home.styled'

import { TitleH2 } from '../../GlobalStyles'

class Home extends Component{

  render (){
    return(
      <Container>
        <Header/>
          <About/>
          <Services/>
        <ContainerSlider className="div-carousel">
          <SliderComponent/>
          <img src={divider} id="dividerBottom"alt="Port Stephens Cleaning Services" />
        </ContainerSlider>
        <ContainerContact>
          <div id="contact">
            <TitleH2>Your cleaning start today. Let's cleaning</TitleH2>
            <SubTitle>Get in touch to schedule your service. We can't wait to hear from you!</SubTitle>
            <WhatsappLink
            target="_blank"
            href="https://api.whatsapp.com/send?phone=61406204408&text=Hi,%20thanks%20for%20contacting%20Port%20Stephens%20Cleaning%20Services.%20Andrea%20will%20get%20in%20touch%20with%20you%20shortly.">schedule a call
            </WhatsappLink>
          </div>
          <ContainerImage>
            <img src={laptop} alt="Port Stephens Cleaning Services" />
          </ContainerImage>
        </ContainerContact>
        <Footer/>
      </Container>
    )
  }
}
export default  Home

