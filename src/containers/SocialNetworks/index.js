import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import { Icon } from './styled'

export default function SocialNetworks() {
  return (
    <>
      <Icon>
        <FontAwesomeIcon icon={faFacebookF} color="white" />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faInstagram} color="white" />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faTwitter} color="white" />
      </Icon>
    </>
  )
}
