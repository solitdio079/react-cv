//import { useState } from 'react'

import Education from "./components/Education"
import General from "./components/General"
import Navbar from "./components/Navbar"
import Practical from "./components/Practical"


function App() {
 

  return (
    <div className="p-10">
    <Navbar/>
    <General/>
    <Education/>
    <Practical/>
    </div>
  )
}

export default App
