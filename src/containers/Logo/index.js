import React from 'react'
import styled from 'styled-components'
import Breakpoint from 'react-socks'

import logo from '../../assets/icons/logo.svg'
import Box from '../../components/Box'

const StyledLogo = styled.img.attrs({ alt: 'Logo da Huddle', src: logo })`
  width: ${props => props.width};
`

export default function Logo() {
  return (
    <>
      <Breakpoint medium down>
        <Box marginBottom="4rem">
          <StyledLogo width="10em" />
        </Box>
      </Breakpoint>

      <Breakpoint large up>
        <StyledLogo width="15em" />
      </Breakpoint>
    </>
  )
}
