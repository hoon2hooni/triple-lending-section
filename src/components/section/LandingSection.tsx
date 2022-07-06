import styled from 'styled-components'

import LeftContentLogo from './LeftContentLogo'
import Indicators from './Indicators'
import Awards from './Awards'

import useDelayedMount from '@hooks/useDelayedMount'

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

const WrapperRight = styled.div`
  margin-top: 150px;
  margin-left: 623px;
`

const LandingSection = () => {
  const mounted700msLater = useDelayedMount(700)
  const mounted800msLater = useDelayedMount(800)
  return (
    <Section>
      <Wrapper>
        <LeftContentLogo />
        <WrapperRight>
          {mounted700msLater && <Indicators />}
          {mounted800msLater && <Awards />}
        </WrapperRight>
      </Wrapper>
    </Section>
  )
}

export default LandingSection
