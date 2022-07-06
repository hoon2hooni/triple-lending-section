import styled from 'styled-components'

import SlideUp from '@components/animation/SlideUp'
import useIncrementCount from '@hooks/useIncrementCount'

const Indicator = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`

const Indicators = () => {
  const travelerCount = useIncrementCount(350)
  const reviewCount = useIncrementCount(21)
  const saveCount = useIncrementCount(650)
  return (
    <SlideUp height="20px" duration="0.7s">
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
