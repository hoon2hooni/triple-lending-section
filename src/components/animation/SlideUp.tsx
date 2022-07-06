import { FC, ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

const slideUp = (height: string) => keyframes`
  from {
    opacity: 0;
    transform: translateY(${height});
  }
  to {
    opacity:1;
    transform: translateY(0px);
  }
`

const AnimationWrapper = styled.div<{ height: string; duration: string }>`
  animation-name: ${(props) => slideUp(props.height)};
  animation-duration: ${(props) => props.duration};
`

const SlideUp: FC<{ height: string; duration: string; children: ReactNode }> =
  ({ height, duration, children }) => {
    return (
      <AnimationWrapper height={height} duration={duration}>
        {children}
      </AnimationWrapper>
    )
  }

export default SlideUp
