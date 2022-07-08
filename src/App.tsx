import { ReactElement } from 'react'

import GlobalStyles from './GlobalStyles'

import Layout from '@components/common/Layout'
import LandingSection from '@components/section/LandingSection'

function App(): ReactElement {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <LandingSection />
      </Layout>
    </>
  )
}

export default App
