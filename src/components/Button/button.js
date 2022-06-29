import React  from 'react'

import {
  WhatsappLink,
} from  './button.styled'

export function Button ({ text }) {
  return (
    <WhatsappLink
      target="_blank"
      href="https://api.whatsapp.com/send?phone=61406204408&text=Hi,%20I'd%20like%20to%20request%20a%20cote.">{text}
      </WhatsappLink>
 )
}
