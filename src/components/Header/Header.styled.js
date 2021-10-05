import styled from 'styled-components'

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  overflow: hidden;
  background: #F7F9F9;

  #divider {
    width: 100%;
  }

  #family {
    position: absolute;
    left: 50%;
    top: auto;
    right: 0%;
    bottom: 0%;
  }

  #dog {
    position: absolute;
    top: auto;
    right: 55%;
    bottom: 3%;
  }



@media screen and (max-width: 900px) {
   #family {
      position: initial;
  }

  #dog {
    right: 36%;
  }
}
`

export const ContainerBody = styled.div`
  width: 528px;

  @media screen and (max-width: 900px) {
    width: fit-content;
  }
`




export const ContainerAbout = styled.div`

  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  width: 1080px;
  display: flex;
  height: 628px;


  @media screen and (max-width: 900px) {
    padding: 0 15px;
    width: fit-content;
  }
`


export const SubTitle = styled.h4`
  font-weight: 400;
  width: 100%;
  text-align: justify;
  padding-top: 20px;


  @media screen and (max-width: 900px) {
   #family {
      position: initial;
  }
}
`
