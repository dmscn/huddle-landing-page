import React from 'react'
import styled from 'styled-components'
import './App.css'
import './config/colors/colors.css'

import Layout from './config/layout/layout'

import Logo from './containers/Logo'
import MainContent from './containers/MainContent'
import SocialNetworks from './containers/SocialNetworks'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${Layout.mediaQueryDesktopMin}) {
    padding: 50px;
  }
  @media (max-width: ${Layout.mediaQueryMobileMax}) {
    padding: 30px;
  }
`

function App() {
  return (
    <Wrapper>
      <Logo />
      <MainContent />
      <SocialNetworks />
    </Wrapper>
  )
}

export default App
