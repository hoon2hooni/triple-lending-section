import { FC } from 'react'
import styled from 'styled-components'

import SlideUp from '@components/animation/SlideUp'
import tripleLogo from '@assets/triple2x.png'

interface BackgroundImageProps {
  img: string
}

const LeftContentLogoStyle = styled.div<BackgroundImageProps>`
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

const LeftContentLogo: FC = () => {
  return (
    <SlideUp height="20px" duration="0.7s">
      <LeftContentLogoStyle img={tripleLogo}>
        2021년 12월 기준
      </LeftContentLogoStyle>
    </SlideUp>
  )
}

export default LeftContentLogo
