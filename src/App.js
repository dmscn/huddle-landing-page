import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BreakpointProvider } from 'react-socks'

import './App.css'
import './config/colors/colors.css'
import colors from './config/colors/colors'
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
    <BreakpointProvider>
      <Wrapper>
        <ThemeProvider theme={colors}>
          <>
            <Logo />
            <MainContent />
            <SocialNetworks />
          </>
        </ThemeProvider>
      </Wrapper>
    </BreakpointProvider>
  )
}

export default App
