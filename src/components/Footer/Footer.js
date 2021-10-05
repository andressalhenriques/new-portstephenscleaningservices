import React from 'react';
import { linkedin, instagram, facebook, icon } from '../../assets/index'

import {
  Container,
  ContainerSocial,
} from  './Footer.styled'

export default function Footer (){
  return(
      <Container >
            <img src={icon} alt="Port Stephens Cleaning Services icon " />
            <div>
              <h3>Follow us</h3>
              <ContainerSocial>
                <a href="https://www.instagram.com/" target="_blank" class="social__link w-inline-block"><img src={linkedin} loading="lazy" alt="Instagram button" class="instagram is--footer"/></a>
                <a href="https://www.facebook.com/PortStephensCleaningServices" target="_blank" class="social__link w-inline-block"><img src={facebook} loading="lazy" alt="Instagram button" class="instagram is--footer"/></a>
                <a href="https://www.linkedin.com/" target="_blank" class="social__link w-inline-block"><img src={instagram} loading="lazy" alt="Instagram button" class="instagram is--footer"/></a>

              </ContainerSocial>

            </div>

      </Container>
  )
}
