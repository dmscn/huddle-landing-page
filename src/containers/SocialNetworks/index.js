import React from 'react'
import styled from 'styled-components'
import Breackpoint from 'react-socks'

import BrandIcon from '../../components/BrandIcon'
import Box from '../../components/Box'

const Wrapper = styled.div`
  width: 100%;
`

export default function SocialNetworks() {
  const icons = ['facebook-f', 'instagram', 'twitter']

  return (
    <Wrapper>
      <Breackpoint medium down>
        <Box justify="center" marginTop="3rem">
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
    </Wrapper>
  )
}
