import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Menu from './sections/Menu'
import Contact from './sections/Contact'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-[#0a2e2a] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  )
}
export default App
