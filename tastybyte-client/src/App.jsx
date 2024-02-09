import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence>
      <div className='max-w-screen-2xl mx-auto'>
        <Nav />
        <div className='min-h-[86vh] lg:p-5 md:p-3 p-1'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  )
}

export default App
