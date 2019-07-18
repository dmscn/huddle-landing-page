import styled from 'styled-components'
import Layout from '../../config/layout/layout'

export const Container = styled.div`
  display: flex;
  flex: 1;

  @media (min-width: ${Layout.mediaQueryDesktopMin}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${Layout.mediaQueryMobileMax}) {
    flex-direction: column;
    margin-top: 60px;
    justify-content: space-around;
  }
`

export const TextBox = styled.div`
  @media (min-width: ${Layout.mediaQueryDesktopMin}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  padding: 50px;
`

export const Image = styled.img`
  @media (max-width: ${Layout.mediaQueryMobileMax}) {
    width: 100%;
  }
`
