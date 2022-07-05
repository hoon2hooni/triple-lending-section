import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Layout: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout
