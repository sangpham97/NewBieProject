import styled from 'styled-components'
const StyledHero = styled.header`
  width: 100%;
  padding-top: 100px;
  background: url(${(props) => props.image}) center/contain no-repeat;
  height: 100vh;
  center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledHero
