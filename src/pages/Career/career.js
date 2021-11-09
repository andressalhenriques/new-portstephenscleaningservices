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
  WhatsappLink,
  ContainerApply,
  ContainerList,
  ContainerBecomeACleaner
} from  '../../pages/Career/career.styled'
import Footer from '../../components/Footer/Footer'

import {
  TitleH1,
  TitleH2,
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
            <h2>With <span id="companyName"> Port Stephens cleaning Services</span> you can find a housekeeping job!  </h2>
            <h3>Work as a cleaner in Australia</h3>
            <p>Port Stephens cleaning services isn't another cleaning company.....  </p>
            <ContainerP>
              <p>Attractive pay.</p>
              <p>Training provided.</p>
              <p>Professional guidance from the Port Stephens team.</p>
              <p>Regular payments: Get paid twice a month.</p>
              <p>Ger regular work in your local area.</p>

            </ContainerP>
            </ContainerAboutBody>
              <div id="header"> <img src={header} alt="house" /></div>
          </ContainerAbout>
        </ContainerHeader>
        <ContainerApply>
          <TitleH2>Apply for a cleaning with <span id="companyName"> Port Stephens cleaning Services</span>.</TitleH2>
          <Button text="Become a cleaner today" />
        </ContainerApply>

        <BodyContainer>
          <img src={dividerTop} alt="Nav Logo" id="dividerTop"/>
          <TitleH2 className="containerTitle">How does it work</TitleH2>
          <ContainerBecomeACleaner>
            <ContainerDocuments>
              <h3 id="title" >Documents Required</h3>
              <h4>Apply to join Port Stephens Cleaning Services today to start being a part of the team. Make sure you have these documents ready.</h4>
              <ContainerList>
                <div>
                  <img src={policeCheck} alt="Nav Logo" />
                  <h3>Police check.</h3>
                  <p>We accept Australian National Police Check. If you don't have one, you can have more
                    <a href="https://www.afp.gov.au/what-we-do/services/criminal-records/national-police-checks" target="_blank" rel="noreferrer">details here</a>
                  </p>
                </div>
                <div>
                  <img src={visa} alt="Nav Logo" />
                  <h3>Proof of working rights.</h3>
                  <p>If you're a student just provide us a copy of a valid visa. </p>
                </div>
                <div>
                  <img src={abn} alt="Nav Logo" />
                  <h3>Austrlian Business Number (ABN)</h3>
                  <p>Provide us your ABN number, if you don't have it yet, you can apply,
                    <a href="https://www.afp.gov.au/what-we-do/services/criminal-records/national-police-checks" target="_blank" rel="noreferrer">start here</a>
                  </p>
                </div>
              </ContainerList>
            </ContainerDocuments>
            <ContainerDocuments id="lastElement">
              <h3 id="title">Do trial and start working</h3>
              <h4>After we approve your documents you just need to sign a contract online and do a trial clean.</h4>
              <ContainerList>
                <div>
                  <img src={sign} alt="Nav Logo" />
                  <h3>Sign a contract</h3>
                  <p>We're going to send you a link on your email, so you can sign it online.</p>
                </div>
                <div>
                  <img src={trial} alt="Nav Logo" />
                  <h3>Do a trial</h3>
                  <p>You will doing a trial with someone from your time, for you to show us how amazing you are. </p>
                </div>
                <div>
                  <img src={start} alt="Nav Logo" />
                  <h3>Start cleaning</h3>
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
