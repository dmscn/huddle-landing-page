import styled from 'styled-components'
import Layout from '../../config/layout/layout'

import logo from '../../assets/icons/logo.svg'

const Logo = styled.img.attrs({ alt: 'Logo da Huddle', src: logo })`
  @media (min-width: ${Layout.mediaQueryDesktopMin}) {
    width: 15em;
  }
  @media (max-width: ${Layout.mediaQueryMobileMax}) {
    width: 10em;
  }
`

export default Logo
