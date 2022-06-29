import React  from 'react'

import { divider, dividerBeige,  header, laptop } from '../../assets/index'

import SliderComponent from '../../components/Slider/Slider'
import Services from '../../components/Services/Services'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import { FaWhatsapp, FaEnvelopeOpen } from 'react-icons/fa'

import {
  Container,
  ContainerAbout,
  ContainerBody,
  ContainerContact,
  ContainerHeader,
  ContainerImage,
  ContainerSlider,
  SubTitle,
  WrapperTalkToUs,
  ContainerLink
} from  './Home.styled'

import { TitleH1, TitleH2, TitleH4 } from '../../GlobalStyles'

const Home = () => {
    return(
      <Container>
        <ContainerHeader>
         <img src={dividerBeige} alt="Nav Logo" id="dividerTop"/>

          <ContainerAbout>
            <ContainerBody>
              <TitleH1>Finally, the life will be easier with <span id="companyName">Port Stephens Cleaning Services</span>. </TitleH1>
              <p>We're a small family-owned and -operated business located
                  in Nelson Bay-Corlette, and are proud to be relied upon by local
                  and out-of-town property owners to provide detailed, committed
                  and reliable home, AirBnB and commercial cleaning and laundry
                  services in the Port Stephens area. We happily go the extra mile
                  with any number of supplementary tasks that most don't even
                  consider!
                </p>
                <p>If you need someone to take care of all the things you
                  can't (or just don't have time to), call us today for a chat,
                  and we can arrange to arrive at your location weekly, fortnightly
                  or monthly.
                </p>
                <WrapperTalkToUs>
                <TitleH4 className='title-call'>We're waiting for your call</TitleH4>
                <div>
                  <ContainerLink>
                  <p><a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=61406204408&text=Hi,%20I'd%20like%20to%20request%20a%20cote.">
                    <FaWhatsapp/>
                  </a>
                  +61 406 204 408</p>
                  </ContainerLink>

                  <ContainerLink>
                    <p><a className="animatedElement" href="mailto:andressalhenriques@gmail.com" target="_blank" rel="noopener noreferrer" ><FaEnvelopeOpen/></a>
                    andread@portstephenscleaningservices.com.au</p>
                  </ContainerLink>
                </div>
                  </WrapperTalkToUs>


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
          <div>
            <TitleH2>Your cleaning start today. Let's cleaning!</TitleH2>
            <SubTitle>Get in touch to schedule your service. We can't wait to hear from you!</SubTitle>
          </div>
          <ContainerImage>
            <div>
              <ContainerLink className='container-link'>
              <p><a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=61406204408&text=Hi,%20I'd%20like%20to%20request%20a%20cote.">
                <FaWhatsapp/>
              </a>
              +61 406 204 408</p>
              </ContainerLink>

              <ContainerLink className='container-link'>
                <p><a className="animatedElement" href="mailto:andressalhenriques@gmail.com" target="_blank" rel="noopener noreferrer" ><FaEnvelopeOpen/></a>
                andread@portstephenscleaningservices.com.au</p>
              </ContainerLink>
            </div>
          </ContainerImage>
        </ContainerContact>
        <Footer/>
      </Container>
    )
}
export default  Home

