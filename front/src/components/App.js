import React from 'react'
import Corpo from './Corpo.js'
import NavBar from './NavBar'

const App = () => {
  return (
    <div className=" mh-100 bg-azul overflow-auto font-arial">
      <NavBar></NavBar>
      <Corpo> </Corpo>
    </div>
  )
}

export default App
