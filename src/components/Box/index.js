import styled from 'styled-components'

const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-top: ${props =>
    props.marginTop || props.margin || props.marginVertical};
  margin-bottom: ${props =>
    props.marginBottom || props.margin || props.marginVertical};
  margin-left: ${props =>
    props.marginLeft || props.margin || props.marginHorizontal};
  margin-right: ${props =>
    props.marginRight || props.margin || props.marginHorizontal};
  padding: ${props => props.padding};
  flex: ${props => (props.full ? 1 : props.flexSize)};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
`

export default Box
