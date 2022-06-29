import React from 'react';
import { logo } from '../../assets/index'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import {
  Container,
  ContainerSocial,
} from  './Footer.styled'

export default function Footer (){
  return(
      <Container >
            <img src={logo} alt="Port Stephens Cleaning Services icon " />
            <div>
              <h3>Follow us</h3>
              <ContainerSocial>
                <a className="animatedElement" href="https://www.instagram.com/portstephenscleaningservices/" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn/></a>
                <a className="animatedElement" href="https://www.facebook.com/PortStephensCleaningServices" rel="noopener noreferrer" target="_blank"><FaFacebookF/></a>
                <a className="animatedElement" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" ><FaInstagram/></a>
              </ContainerSocial>
              <p>© Port Stephens Cleaning Services | All Rights Reserved | Terms & Conditions</p>
              <p><a href="https://andressahenriques.com" target="_blank">Design by andressahenriques.com</a></p>
            </div>

      </Container>
  )
}
