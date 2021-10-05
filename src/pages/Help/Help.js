import React, { Component } from 'react'

import { divider, dividerTop, laptop } from '../../assets/index'


import { Navbar } from '../../components/Navbar/Navbar';
import SliderComponent from '../../components/Slider/Slider'
import Header from '../../components/Header/Header'
import Services from '../../components/Services/Services'
import About from '../../components/About/About'

import {
  WhatsappLink,
  Container,
  ContainerImage,
  ContainerSlider,
  ContainerContact,
  SubTitle,
  Title,
} from  './Help.styled'

import { TitleH2 } from '../../GlobalStyles'

class Help extends Component{

  render (){
    return(
      <Container>
        <h1>help</h1>
      </Container>
    )
  }
}
export default  Help

