import React from 'react'
import styled from 'styled-components'
import Breakpoint from 'react-socks'

import Box from '../Box'

const StyledTitle = styled.h1`
  color: ${props => props.color || 'white'};
  font-family: 'Poppins', sans-serif;
  text-align: ${props => props.center && 'center'};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight || (props.bold ? '700' : '400')};
  line-height: ${props => props.lineHeight};
`
const StyledBody = styled.p`
  color: ${props => props.color || 'white'};
  text-align: ${props => props.center && 'center'};
  letter-spacing: ${props => props.letterSpacing || '0.6px'};
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
`

function Title(props) {
  const { size = '3rem', lineHeight = 1.4, ...rest } = props

  const halfSize = size => `calc(${size} / 2)`

  return (
    <>
      <Breakpoint medium down>
        <Box marginTop="3rem">
          <StyledTitle
            size={halfSize(size)}
            lineHeight={lineHeight}
            {...rest}
          />
        </Box>
      </Breakpoint>
      <Breakpoint large up>
        <StyledTitle size={size} bold {...rest} />
      </Breakpoint>
    </>
  )
}

function Body(props) {
  const { size = '1.5rem', lineHeight = 1.4, ...rest } = props

  const subtractSize = size => `calc(${size} - .5rem)`

  return (
    <>
      <Breakpoint medium down>
        <Box marginBottom="1rem">
          <StyledBody
            size={subtractSize(size)}
            lineHeight={lineHeight}
            {...rest}
          />
        </Box>
      </Breakpoint>
      <Breakpoint large up>
        <Box marginBottom="1rem">
          <StyledBody size={size} {...rest} />
        </Box>
      </Breakpoint>
    </>
  )
}

export { Body, Title }
