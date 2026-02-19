import React from 'react';

import {
  dividerBeige,
  header,
} from '../../assets/index'
import {
  Container,
  ContainerAbout,
  ContainerAboutBody,
  ContainerHeader,
  ContainerP,
  ContainerApply,
} from  '../../pages/Career/career.styled'
import Footer from '../../components/Footer/Footer'

import {
  TitleH1,
  TitleH2,
  TitleH3,
  TitleH4,
} from  '../../GlobalStyles'
import { Button } from '../../components/Button/button'


export const Career = () => {
  return(
    <Container>
      <ContainerHeader>
        <img src={dividerBeige} alt="Nav Logo" id="divider"/>
          <ContainerAbout>
            <ContainerAboutBody>
            <TitleH1>Looking for a cleaning job? </TitleH1>
            <TitleH3>Friendly, flexible and, most importantly, well-paying <span id="companyName"> Port Stephens Cleaning Services</span> is looking for employees to be part of our team.   </TitleH3>
            <ContainerP>
              <p>Attractive pay.</p>
              <p>We will provide all the training, and supplies and equipment if required.</p>
              <p>Professional guidance from the Port Stephens team.</p>
            </ContainerP>
            
            </ContainerAboutBody>
              <div id="header"> <img src={header} alt="house" /></div>
          </ContainerAbout>
        </ContainerHeader>
        <ContainerApply>
          <TitleH2>Apply for a cleaning with <span id="companyName"> Port Stephens Cleaning Services</span>.</TitleH2>
            <TitleH4> Could that be you? </TitleH4>
            <ContainerP className='div-centralized'>
              <p>We need people who can work within a small team, can work independently and are self-motivated. .</p>
              <p>The role includes a mix of tasks including commercial, residential and holiday premises.</p>
              <p>We have lots of jobs available at different times of the day and all days of the week - there is something to fit in with everybody's schedule! </p>
              <p>Previous experience is recognised, but not necessary. </p>
              <p>We pay above-award wages, plus applicable penalty rates and superannuation. </p>
            </ContainerP>
            <div className='button-contact'>
              <Button text="Become a cleaner today" />
            </div>
        </ContainerApply>
        <Footer/>
    </Container>
  )
}
export default  Career;
