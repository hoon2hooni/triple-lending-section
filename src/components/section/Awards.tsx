import styled from 'styled-components'

import playStoreAwardImg from '@assets/play-store2x.png'
import appleAwardImg from '@assets/badge-apple4x.png'
import SlideUp from '@components/animation/SlideUp'

interface BackgroundImageProps {
  img: string
}

const AwardsWrapper = styled.div`
  height: 64px;
  margin-top: 50px;
  display: flex;
`
const AwardWrapper = styled.div<BackgroundImageProps>`
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

const Awards = () => {
  return (
    <SlideUp distance="10px" duration="0.7s">
      <AwardsWrapper>
        <AwardWrapper img={playStoreAwardImg}>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </AwardWrapper>
        <AwardWrapper img={appleAwardImg}>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </AwardWrapper>
      </AwardsWrapper>
    </SlideUp>
  )
}

export default Awards
