import React, { Component } from 'react'

import { divider2 } from '../../assets/index'

import {
  Container,
  ContainerGrid,
  ContainerP,
} from  './Services.styled'

import { TitleH2, TitleH3 } from '../../GlobalStyles'
import { FaAngleRight } from 'react-icons/fa'

class Services extends Component{

  render (){
    return(
      <Container>
        <img src={divider2} id="divider2" alt="Port Stephens Cleaning Services" />
        <ContainerGrid>
          <div className='container-title'>
            <TitleH2>Relax knowing <span id="companyName">Port Stephens Cleaning Services</span> have got  your back.</TitleH2>
          </div>
          <ContainerP>
            <TitleH3>Our services includes:</TitleH3>
            <ul>
              <li><div className='list-icon'><FaAngleRight/></div><span>Residential Cleaning</span></li>
              <li><div className='list-icon'><FaAngleRight/></div><span>Commercial cleaning</span></li>
              <li><div className='list-icon'><FaAngleRight/></div><span>Spring cleaning</span></li>
              <li><div className='list-icon'><FaAngleRight/></div><span>End of lease</span></li>
              <li><div className='list-icon'><FaAngleRight/></div><span>Airbnb & Laundry</span></li>
            </ul>
          </ContainerP>
        </ContainerGrid>
      </Container>
    )
  }
}
export default  Services
