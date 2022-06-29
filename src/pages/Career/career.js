import React from 'react';

import {
  divider,
  dividerTop,
  dividerBeige,
  header,
  policeCheck,
  visa,
  abn,
  sign,
  trial,
  start,
} from '../../assets/index'
import {
  BodyContainer,
  Container,
  ContainerDocuments,
  ContainerAbout,
  ContainerAboutBody,
  ContainerHeader,
  ContainerP,
  ContainerApply,
  ContainerList,
  ContainerBecomeACleaner
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
            <TitleH3>Friendly, flexible and, most importantly, well-paying <span id="companyName"> Port Stephens Cleaning Services</span> is looking for employees be part of our team.   </TitleH3>
            <ContainerP>
              <p>Attractive pay.</p>
              <p>We will provide all the training, and supplies and equipment if required.</p>
              <p>Professional guidance from the Port Stephens team.</p>
              <p>Regular payments: Get paid twice a month.</p>
              <p>Get regular work in your local area.</p>
            </ContainerP>
            
            </ContainerAboutBody>
              <div id="header"> <img src={header} alt="house" /></div>
          </ContainerAbout>
        </ContainerHeader>
        <ContainerApply>
          <TitleH2>Apply for a cleaning with <span id="companyName"> Port Stephens Cleaning Services</span>.</TitleH2>
            <TitleH3> Could that be you? </TitleH3>
            <ContainerP className='div-centralized'>
              <p>We need people who can work within a small team, can work independently and are self-motivated. .</p>
              <p>The role includes a mix of tasks including commercial, residential and holiday premises.</p>
              <p>We have lots of jobs available at different times of the day and all days of the week - there is something to fit in with everybody's schedule! </p>
              <p>Previous experience is recognised, but not necessary. </p>
              <p>We pay above-award wages (base rate of $32ph), plus applicable penalty rates and superannuation. </p>
            </ContainerP>
            <div className='button-contact'>
              <Button text="Become a cleaner today" />
            </div>
        </ContainerApply>

        <BodyContainer>
          <img src={dividerTop} alt="Nav Logo" id="dividerTop"/>
          <TitleH2 className="containerTitle">How does it work</TitleH2>
          <ContainerBecomeACleaner>
            <ContainerDocuments>
              <TitleH3>Documents Required</TitleH3>
              <p id="containerP">Apply to join Port Stephens Cleaning Services today to start being a part of the team. Make sure you have these documents ready.</p>
              <ContainerList>
                <div>
                  <img src={policeCheck} alt="Nav Logo" />
                  <TitleH4>Police check</TitleH4>
                  <p>We accept Australian National Police Check. If you don't have one, you can have more
                    <a href="https://www.afp.gov.au/what-we-do/services/criminal-records/national-police-checks" target="_blank" rel="noopener noreferrer"> details here</a>.
                  </p>
                </div>
                <div>
                  <img src={visa} alt="Nav Logo" />
                  <TitleH4>Proof of working rights</TitleH4>
                  <p>If you're a student just provide us a copy of a valid visa. If you're an Australian citizen or permanent resident, just provide us a copy of your residency visa or passport. </p>
                </div>
                <div>
                  <img src={abn} alt="Nav Logo" />
                  <TitleH4>Austrlian Business Number (ABN)</TitleH4>
                  <p>Provide us your ABN number, if you don't have it yet, you can apply,
                    <a href="https://www.afp.gov.au/what-we-do/services/criminal-records/national-police-checks" target="_blank" rel="noopener noreferrer"> start here</a>.
                  </p>
                </div>
              </ContainerList>
            </ContainerDocuments>
            <ContainerDocuments id="lastElement">
              <TitleH3 id="title">Do trial and start working</TitleH3>
              <p>After we approve your documents you just need to sign a contract online and do a trial clean.</p>
              <ContainerList>
                <div>
                  <img src={sign} alt="Nav Logo" />
                  <TitleH4>Sign a contract</TitleH4>
                  <p>We're going to send you a link on your email, so you can sign it online.</p>
                </div>
                <div>
                  <img src={trial} alt="Nav Logo" />
                  <TitleH4>Do a trial</TitleH4>
                  <p>You will doing a trial with someone from your time, for you to show us how amazing you are. </p>
                </div>
                <div>
                  <img src={start} alt="Nav Logo" />
                  <TitleH4>Start cleaning</TitleH4>
                  <p> Now you can start working with us! </p>
                </div>
              </ContainerList>
            </ContainerDocuments>
          </ContainerBecomeACleaner>
          <img id="dividerBottom" src={divider} alt="Port Stephens Cleaning Services" />

        </BodyContainer>
        <Footer/>
    </Container>
  )
}
export default  Career;
