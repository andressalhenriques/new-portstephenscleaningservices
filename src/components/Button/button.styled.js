import styled from 'styled-components'
import { theme } from '../../theme'

export const ContainerLink = styled.div`
  border: 2px solid  ${theme.colors.gold20};
  padding: 14px;
  letter-spacing: .2em;
  background: none;
  font-size: 0.75em;
  
  line-height: 1.2em;
  font-weight: 600;
  width: 250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  a {
    text-transform: uppercase;
  }

  span {
    padding-top: 10px;
    font-weight: 500;
  }

`
