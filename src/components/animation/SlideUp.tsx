import { FC, ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

interface SlideProps {
  distance: string
  duration: string
  delay?: string
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
  animation-delay: ${({ delay = '0s' }) => delay};
  animation-fill-mode: forwards;
  opacity: 0;
`

const SlideUp: FC<SlideProps & { children: ReactNode }> = ({
  distance,
  duration,
  delay,
  children,
}) => {
  return (
    <AnimationWrapper distance={distance} duration={duration} delay={delay}>
      {children}
    </AnimationWrapper>
  )
}

export default SlideUp
