import React  from 'react'

import {
  ContainerLink,
} from  './button.styled'

export function Button ({ text }) {
  return (
    <ContainerLink>
    <a 
      target="_blank"
      href="mailto:andread@portstephenscleaningservices.com.au">
      {text}
    </a><span>Send a resume to Andrea</span>
    </ContainerLink>
      
 )
}