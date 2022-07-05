import GlobalStyles from './GlobalStyles'

import Layout from '@components/Layout'
import LandingSection from '@components/LandingSection'

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
