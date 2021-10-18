import styled from 'styled-components'
import { theme } from '../../theme'


export const Container = styled.div`
  padding: 10px 30px;
  color: ${theme.white10};

  p {
    text-align: center;
  }

  h3 {
    text-transform: uppercase;
    padding-bottom: 20px;
    letter-spacing: 3px;
  }


  @media screen and (max-width: 900px) {
    padding: 20px 30px;

    p {
      padding-top: 27px;
    }
  }

`

export const ContainerSocial = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 15px;

`
