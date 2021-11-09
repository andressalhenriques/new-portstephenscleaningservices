import React, { useState } from 'react'

import {
  WhatsappLink,
} from  './button.styled'

export function Button ({ text }) {
  console.log({text})
  return (
    <WhatsappLink
      target="_blank"
      href="https://api.whatsapp.com/send?phone=61406204408&text=Hi,%20thanks%20for%20contacting%20Port%20Stephens%20Cleaning%20Services.%20Andrea%20will%20get%20in%20touch%20with%20you%20shortly.">{text}
    </WhatsappLink>
 )
}
