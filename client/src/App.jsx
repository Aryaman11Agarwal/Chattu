import React,{lazy} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
const Home=lazy(
  ()=>{

    return import("./pages/Home")
  }
)
const About=lazy(()=>import("./pages/About"))


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/contact" element={<h1>CONTACT</h1>}/>

      
    </Routes>
   </BrowserRouter>
  )
}

export default App
