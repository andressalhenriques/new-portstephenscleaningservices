import React, { Component } from 'react'
import { dogShootingstar, shootingstar, divider2 } from '../../assets/index'

import {
  Container,
  ContainerGrid,

  ContainerP,
  Title,
} from  './Services.styled'

class Services extends Component{

  render (){
    return(
      <Container>
        <img src={divider2} id="divider2" alt="Port Stephens Cleaning Services" />
        <img src={dogShootingstar} id="dogShootingStar" alt="family" />
        <img src={shootingstar} id="shootingStar" alt="family" />
        <ContainerGrid>
          <div>
            <Title>Relax knowing <span id="companyName">Port Stephens Cleaning Services</span> have got  your back</Title>
            <h3>Change text  here</h3>
          </div>
          <ContainerP>
            <p>Our services includes:</p>
            <p>Residential Cleaning</p>
            <p>Commercial cleaning</p>
            <p>Spring cleaning</p>
            <p>End of lease</p>
            <p>Airbnb & Laundry</p>
          </ContainerP>
        </ContainerGrid>
      </Container>
    )
  }
}
export default  Services
