import styled from 'styled-components'

const Indicator = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`
const Indicators = () => {
  return (
    <>
      <Indicator>
        <strong>
          <span>700</span>만 명
        </strong>
        의 여행자
      </Indicator>
      <Indicator>
        <strong>
          <span>100</span>만 명
        </strong>
        의 여행 리뷰
      </Indicator>
      <Indicator>
        <strong>
          <span>470</span>만 명
        </strong>
        의 여행 일정
      </Indicator>
    </>
  )
}

export default Indicators
