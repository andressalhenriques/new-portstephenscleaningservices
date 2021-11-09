import React from 'react';
import { linkedin, instagram, facebook, logo } from '../../assets/index'
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
                <a className="animatedElement" href="https://www.instagram.com/" target="_blank" rel="noreferrer" ><FaLinkedinIn/></a>
                <a className="animatedElement" href="https://www.facebook.com/PortStephensCleaningServices" rel="noreferrer" target="_blank"><FaFacebookF/></a>
                <a className="animatedElement" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" ><FaInstagram/></a>
              </ContainerSocial>
              <p>Design by andressahenriques.com</p>
            </div>

      </Container>
  )
}
