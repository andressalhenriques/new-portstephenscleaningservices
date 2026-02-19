import React, { Component } from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';


import {
  Container,
  Slider,
} from  './Slider.styled'

import { TitleH3, TitleH5 } from '../../GlobalStyles'

const AutoplaySlider = withAutoplay(AwesomeSlider);

class SliderComponent extends Component{
  render (){
    return(
      <Container>
        <TitleH3>What our customers say</TitleH3>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={6000}
          infinite={true}
        >
          <div>
          <Slider>
            <p>
              I came home from hospital with my 2nd baby to find our home
              absolutely spotless, dirty laundry washed and dried, cupboards
              sorted out.I felt so relaxed! Andrea is very thorough and is
              consistent every time. I will definitely continue to use her
              services and highly recommend her.
            </p>
            <TitleH5>Laurinda - Anna Bay</TitleH5>
          </Slider>
          </div>
          <div>
          <Slider>
            <p>
              These ladies will redefine what you consider clean and tidy to be!
            </p>
            <TitleH5>Jack - Corlette</TitleH5>
          </Slider>
          </div>
          <div>
          <Slider>
            <p>
              Andrea and her team are very professional. They are always
              flexible with clean times and their rates are most reasonable
              in the Port Stephens area. They do a beautiful and thorough
              job on my residence! My guests always compliment on how clean
              my house is. I can’t thank them enough for their professional
              service!
            </p>
              <TitleH5>Liz - Corlette</TitleH5>
          </Slider>
          </div>
          <div>
          <Slider>
            <p>I just wanted to let you know we're very happy with the clean
              at Shoal Beach House. Thank you for your attention to detail.
              Look forward to growing our businesses together.
            </p>
            <TitleH5>Sharon - Nelson bay</TitleH5>
          </Slider>
          </div>
        </AutoplaySlider>
      </Container>
    )
  }
}
export default  SliderComponent;
