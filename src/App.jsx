//import { useState } from 'react'

import Education from "./components/Education"
import General from "./components/General"
import Navbar from "./components/Navbar"


function App() {
 

  return (
    <div className="p-10">
    <Navbar/>
    <General/>
    <Education/>
    </div>
  )
}

export default App
