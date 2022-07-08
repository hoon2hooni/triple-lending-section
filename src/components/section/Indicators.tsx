import { FC } from 'react'
import styled from 'styled-components'

import SlideUp from '@components/animation/SlideUp'
import useRaf from '@hooks/useRaf'
import { easeOutExpo } from '@utils/easeOut'

const Indicator = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`

const Indicators: FC = () => {
  const elapsedTime = useRaf(2, 0.1)
  const travelerCount = Math.floor(easeOutExpo(elapsedTime, 0, 350, 2))
  const reviewCount = Math.floor(easeOutExpo(elapsedTime, 0, 21, 2))
  const saveCount = Math.floor(easeOutExpo(elapsedTime, 0, 650, 2))
  return (
    <SlideUp distance="20px" duration="0.7s" delay="0.1s">
      <Indicator>
        <strong>
          <span>{travelerCount}</span>만 명
        </strong>
        의 여행자
      </Indicator>
      <Indicator>
        <strong>
          <span>{reviewCount}</span>만 개
        </strong>
        의 여행 리뷰
      </Indicator>
      <Indicator>
        <strong>
          <span>{saveCount}</span>만 개
        </strong>
        의 저장
      </Indicator>
    </SlideUp>
  )
}

export default Indicators
