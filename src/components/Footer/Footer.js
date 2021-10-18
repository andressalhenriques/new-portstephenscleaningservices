import React from 'react';
import { linkedin, instagram, facebook, logo } from '../../assets/index'

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
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="social__link w-inline-block"><img src={linkedin} loading="lazy" alt="Instagram button" class="instagram is--footer"/></a>
                <a href="https://www.facebook.com/PortStephensCleaningServices" rel="noreferrer" target="_blank" class="social__link w-inline-block"><img src={facebook} loading="lazy" alt="Instagram button" class="instagram is--footer"/></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" class="social__link w-inline-block"><img src={instagram} loading="lazy" alt="Instagram button" class="instagram is--footer"/></a>
              </ContainerSocial>
              <p>Design by andressahenriques.com</p>
            </div>

      </Container>
  )
}
