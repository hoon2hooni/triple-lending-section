import styled from 'styled-components'
import { FC } from 'react'

import LeftContentLogo from './LeftContentLogo'
import Indicators from './Indicators'
import Awards from './Awards'

const Section = styled.div`
  display: flex;
  min-width: 1200px;
  height: 552px;
  justify-content: center;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 1039px;
  height: 100%;
`

const WrapperRight = styled.div`
  margin-top: 150px;
  margin-left: 623px;
`

const LandingSection: FC = () => {
  return (
    <Section>
      <Wrapper>
        <LeftContentLogo />
        <WrapperRight>
          <Indicators />
          <Awards />
        </WrapperRight>
      </Wrapper>
    </Section>
  )
}

export default LandingSection
