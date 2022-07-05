import GlobalStyles from './GlobalStyles'

import Layout from '@components/common/Layout'
import LandingSection from '@components/section/LandingSection'

function App() {
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
