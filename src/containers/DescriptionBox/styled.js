import styled from 'styled-components'
import Layout from '../../config/layout/layout'

export const TextBox = styled.div`
  @media (min-width: ${Layout.mediaQueryDesktopMin}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }
  @media (max-width: ${Layout.mediaQueryMobileMax}) {
    line-height: 1.2;
    text-align: center;
    padding: 16px;
  }
`
