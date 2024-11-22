import './App.css'
import Layout from './components/Layout/Layout.jsx'
import "react-router-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element = {<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
