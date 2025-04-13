import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { useEffect, useState } from 'react'
import Error from './assets/pages/Error'
import Blog from './assets/pages/Blog'
import Document from './assets/pages/Document'
import Home from './assets/pages/Home'
import Location from './assets/pages/Location'
import Library from './assets/pages/Library'

import Navbar from './assets/NavbarandFooter/Navbar'
import Footer from './assets/NavbarandFooter/Footer'
import Shop from './assets/Reuse/Shop'

import ContactPage from './assets/Reuse/ContactPage'
import FAQ from './assets/Reuse/FAQ'
import Return from './assets/Reuse/Return';
import Terms from './assets/Reuse/Terms'

function App() {
  const myDark = () => {
    if (localStorage.getItem('theme') === 'dark') {
      return true
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  const [darkMode, setDarkMode] = useState(myDark())

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <>
      <Router>
        <div
          className={`min-h-screen ${
            darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
          }`}
        >
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/Shop"
              element={<Shop />}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            ></Route>
            <Route
              path="/ContactPage"
              element={<ContactPage />}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            ></Route>
            <Route path="/FAQ" element={<FAQ />}></Route>
            <Route path="/Return" element={<Return />}></Route>
            <Route path="/Terms" element={<Terms />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
            <Route path="/Library" element={<Library />}></Route>
            <Route path="/Document" element={<Document />}></Route>
            <Route path="/Location" element={<Location />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
