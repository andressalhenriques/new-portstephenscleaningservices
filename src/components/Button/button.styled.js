import styled from 'styled-components'
import { theme } from '../../theme'

export const WhatsappLink = styled.a`
  border: 2px solid  ${theme.colors.gold20};
  padding: 14px;
  letter-spacing: .2em;
  background: none;
  font-size: 0.75em;
  text-transform: uppercase;
  line-height: 1.2em;
  font-weight: 600;

  :hover {
    color: ${theme.colors.white100};
    background: ${theme.colors.black30};

    border: none;
  }
`
