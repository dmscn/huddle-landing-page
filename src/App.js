import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Breackpoint, { BreakpointProvider } from 'react-socks'

import './App.css'
import './config/colors/colors.css'
import colors from './config/colors/colors'

import Logo from './containers/Logo'
import MainContent from './containers/MainContent'
import SocialNetworks from './containers/SocialNetworks'
import Box from './components/Box'

const StyledBreackpoint = styled(Breackpoint)`
  box-sizing: border-box;
  display: flex;
  flex: 1;
`

const AppContent = ({ padding }) => (
  <Box full column justify="space-between" align="flex-start" padding={padding}>
    <Logo />
    <MainContent />
    <SocialNetworks />
  </Box>
)

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <BreakpointProvider>
        <StyledBreackpoint medium down>
          <AppContent padding="2.5rem" />
        </StyledBreackpoint>

        <StyledBreackpoint large up>
          <AppContent padding="4rem" />
        </StyledBreackpoint>
      </BreakpointProvider>
    </ThemeProvider>
  )
}
