import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Statistics from './components/Statistics'
import Programs from './components/Programs'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Programs />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
