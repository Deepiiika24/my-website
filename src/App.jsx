import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Socialicon from './Components/Socialicon'
import Scroll from './Components/Scroll'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Scroll />
        <Socialicon />
        <Routes>
          {/* <Route path='/' element={<Home />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App