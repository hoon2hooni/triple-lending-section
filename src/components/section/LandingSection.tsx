import styled from 'styled-components'

import tripleLogo from '@assets/triple2x.png'
import playStoreAward from '@assets/play-store2x.png'
import appleAward from '@assets/badge-apple4x.png'

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
  justify-content: space-between;
`

const ContentWrapper = styled.div<BackgroundImageProps>`
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
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
`

const WrapperRight = styled.div`
  margin-top: 150px;
  margin-left: 623px;
`
const Mention = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`

const AwardWrapper = styled.div`
  height: 64px;
  margin-top: 50px;
  display: flex;
`
const EachWrapper = styled.div<BackgroundImageProps>`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${(props) => props.img});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  width: 197px;
  box-sizing: border-box;
`

const LandingSection = () => {
  return (
    <Section>
      <Wrapper>
        <ContentWrapper img={tripleLogo}>2021년 12월 기준</ContentWrapper>
        <WrapperRight>
          <Mention>
            <strong>
              <span>700</span>만 명
            </strong>
            의 여행자
          </Mention>
          <Mention>
            <strong>
              <span>100</span>만 명
            </strong>
            의 여행 리뷰
          </Mention>
          <Mention>
            <strong>
              <span>470</span>만 명
            </strong>
            의 여행 일정
          </Mention>
          <AwardWrapper>
            <EachWrapper img={playStoreAward}>
              2018 구글 플레이스토어
              <br />
              올해의 앱 최우수상 수상
            </EachWrapper>
            <EachWrapper img={appleAward}>
              2018 애플 앱스토어
              <br />
              오늘의 여행앱 선정
            </EachWrapper>
          </AwardWrapper>
        </WrapperRight>
      </Wrapper>
    </Section>
  )
}

export default LandingSection
