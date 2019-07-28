import React from 'react'
import Breackpoint from 'react-socks'

import BrandIcon from '../../components/BrandIcon'
import Box from '../../components/Box'

export default function SocialNetworks() {
  const icons = ['facebook-f', 'instagram', 'twitter']

  return (
    <>
      <Breackpoint medium down>
        <Box justify="center">
          {icons.map(icon => (
            <BrandIcon key={icon} icon={icon} color="white" border />
          ))}
        </Box>
      </Breackpoint>

      <Breackpoint large up>
        <Box justify="flex-end">
          {icons.map(icon => (
            <BrandIcon
              key={icon}
              icon={icon}
              color="white"
              margin=".7rem"
              large
              border
            />
          ))}
        </Box>
      </Breackpoint>
    </>
  )
}
