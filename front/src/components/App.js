import React from 'react'
import Corpo from './Corpo.js'
import NavBar from './NavBar'
import Footer from './Footer.js'

const App = () => {
  return (
    <div className=" mh-100 bg-azul overflow-auto font-arial">
      <NavBar></NavBar>
      <Corpo> </Corpo>
      <Footer></Footer>
    </div>
  )
}

export default App
