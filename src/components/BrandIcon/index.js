import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.large ? '3rem' : '2rem')};
  height: ${props => (props.large ? '3rem' : '2rem')};
  margin: ${props => props.margin || '1rem'};
  border: ${props => (props.border ? 'solid .1rem' : 'none')};
  border-color: ${props => props.color || 'transparent'};
  border-radius: ${props => props.border && '100%'};
  border-radius: 100%;
`

const BrandIcon = props => (
  <Wrapper {...props}>
    <FontAwesomeIcon
      icon={['fab', props.icon]}
      color={props.color}
      size={props.large && 'lg'}
    />
  </Wrapper>
)

export default BrandIcon
