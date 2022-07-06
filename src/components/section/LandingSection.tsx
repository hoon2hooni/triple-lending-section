import styled from 'styled-components'

import Indicators from './Indicators'
import Awards from './Awards'

import tripleLogo from '@assets/triple2x.png'
import SlideUp from '@components/animation/SlideUp'

interface BackgroundImageProps {
  img: string
}

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

const LeftContentLogo = styled.div<BackgroundImageProps>`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
`

const WrapperRight = styled.div`
  margin-top: 150px;
  margin-left: 623px;
`

const LandingSection = () => {
  return (
    <Section>
      <Wrapper>
        <SlideUp height="20px" duration="0.7s">
          <LeftContentLogo img={tripleLogo}>2021년 12월 기준</LeftContentLogo>
        </SlideUp>
        <WrapperRight>
          <Indicators />
          <Awards />
        </WrapperRight>
      </Wrapper>
    </Section>
  )
}

export default LandingSection
