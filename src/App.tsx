import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Product from './components/Product'
import InterestForm from './components/InterestForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Pricing />
      <Product />
      <InterestForm />
      <Footer />
    </div>
  )
}

export default App
