import styled from 'styled-components'
import Layout from '../../config/layout/layout'

const Title = styled.h1`
  color: white;

  @media (min-width: ${Layout.mediaQueryDesktopMin}) {
    font-family: 'Poppins', sans-serif;
    font-size: 3em;
    font-weight: ${props => (props.bold ? '700' : '400')};
  }
  @media (max-width: ${Layout.mediaQueryMobileMax}) {
    font-size: 1.5em;
    line-height: 1.4;
    margin-bottom: 20px;
  }
`
const Text = styled.p`
  color: white;
  letter-spacing: 0.6px;

  @media (min-width: ${Layout.mediaQueryDesktopMin}) {
    font-size: 1.5em;
  }
  @media (max-width: ${Layout.mediaQueryMobileMax}) {
    font-size: 1em;
    line-height: 1.4;
  }
`
export { Text, Title }
