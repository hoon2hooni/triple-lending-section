import { FC, ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

interface SlideProps {
  distance: string
  duration: string
}

const slideUp = (distance: string) => keyframes`
  from {
    opacity: 0;
    transform: translateY(${distance});
  }
  to {
    opacity:1;
    transform: translateY(0px);
  }
`

const AnimationWrapper = styled.div<SlideProps>`
  animation-name: ${({ distance }) => slideUp(distance)};
  animation-duration: ${({ duration }) => duration};
  animation-timing-function: ease-out;
`

const SlideUp: FC<SlideProps & { children: ReactNode }> = ({
  distance,
  duration,
  children,
}) => {
  return (
    <AnimationWrapper distance={distance} duration={duration}>
      {children}
    </AnimationWrapper>
  )
}

export default SlideUp
