import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Components from '../components/Components'
import CodePreview from '../components/CodePreview'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const HomePage = ({ onGetStarted }) => {
  return (
    <>
      <Navbar onGetStarted={onGetStarted} />
      <main>
        <Hero onGetStarted={onGetStarted} />
        <Features />
        <Components />
        <CodePreview />
        <Testimonials />
        <CTA onGetStarted={onGetStarted} />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
