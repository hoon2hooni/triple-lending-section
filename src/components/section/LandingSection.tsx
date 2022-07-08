import styled from 'styled-components'
import { FC } from 'react'

import SlideUp from '@components/animation/SlideUp'
import LeftContentLogo from '@components/section/LeftContentLogo'
import Indicators from '@components/section/Indicators'
import Awards from '@components/section/Awards'

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
        <SlideUp distance="40px" duration="0.7s">
          <LeftContentLogo />
        </SlideUp>
        <WrapperRight>
          <SlideUp distance="20px" duration="0.7s" delay="0.1s">
            <Indicators />
          </SlideUp>
          <SlideUp distance="10px" duration="0.7s" delay="0.2s">
            <Awards />
          </SlideUp>
        </WrapperRight>
      </Wrapper>
    </Section>
  )
}

export default LandingSection
