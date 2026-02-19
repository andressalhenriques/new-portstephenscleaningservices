import React, { Component } from 'react'
import { customerSatisfaction, fastCommunication, highQualityService, ourFocus } from '../../assets/index'

import {
  Container,
  ContainerHeader,
  ContainerTitle,
  Services,
} from  './About.styled'

import { TitleH2, TitleH4, TitleH5 } from '../../GlobalStyles'
class About extends Component{

  render (){
    return(
      <Container>
        <TitleH2>Why us</TitleH2>
        <TitleH4>Our values </TitleH4>
        <ContainerHeader>
          <Services>
            <img src={ourFocus} id="dividerBottom"alt="Port Stephens Cleaning Services" />
            <ContainerTitle>
              <TitleH5>Our focus</TitleH5>
              <p>The number one priority for our business is you, our customer!
                We have built and grown our business around 3 pillars – reliability,
                consistency and attention to detail. We provide a cleaning service to
                our clients that always meets their expectations and often exceeds them.</p>
            </ContainerTitle>
          </Services>
          <Services>
            <img src={fastCommunication} id="dividerBottom"alt="Port Stephens Cleaning Services" />
            <ContainerTitle>
              <TitleH5>Easy, fast communication</TitleH5>
              <p>
                We pride ourselves on being a responsive and responsible service and
                consider prompt and accurate communication with our customers to be
                of the utmost importance. Many of our customers live in other cities,
                and we encourage them to consider us their local “eyes and ears” for
                their investments. As such, we are available by phone or email 24/7,
                all year round.
              </p>
            </ContainerTitle>
          </Services>
          <Services>
              <img src={highQualityService} id="dividerBottom"alt="Port Stephens Cleaning Services" />
            <ContainerTitle>
              <TitleH5>Customer satisfaction</TitleH5>
              <p>
                Our goal is to make the cleaning of your home or business
                something that no longer requires your attention or effort, letting
                you get on with more important things in your life, while enjoying
                the positive atmosphere left by our caring touch.
              </p>
            </ContainerTitle>
          </Services>
          <Services>
            <img src={customerSatisfaction} id="dividerBottom"alt="Port Stephens Cleaning Services" />
            <ContainerTitle>
              <TitleH5>High quality service</TitleH5>
                <p>
                We live by our reputation, a fact which is displayed in the amount
                of business we have as a result of customer referrals and the proportion
                of our customers with whom we have ongoing relationships – 100%! We are
                extremely proud of these figures, and feel they are a reflection of our
                values and extremely high cleaning and service standards.
                </p>
            </ContainerTitle>
          </Services>
        </ContainerHeader>
      </Container>
    )
  }
}
export default  About
