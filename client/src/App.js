import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import Main from './components/layout/Main'
import Intro from './pages/Intro'
import Home from './pages/Home'
import TrendDevice from './pages/TrendDevice'
import YouTube from './pages/YouTube'
import Movie from './pages/Movie'
import Kickoff from './pages/Kickoff'
import About from './pages/About'

const App = () => {
  return (
    <>
      {/* <Main> */}
      <Routes>
        <Route path='/intro' element={<Intro />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/td' element={<TrendDevice />}></Route>
        <Route path='/youtube' element={<YouTube />}></Route>
        <Route path='/movie' element={<Movie />}></Route>
        <Route path='/kickoff' element={<Kickoff />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      {/* </Main> */}
    </>
  )
}

export default App