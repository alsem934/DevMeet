import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import Event1 from './Components/Event1/Event1'
import Event2 from './Components/Event2/Event2'
import Event3 from './Components/Event3/Event3'

function App() {
  return (
   
   <Routes>
   
   <Route path ="/" element ={<Home/>}/>
   
   <Route path="/Event1" element={<Event1/>}/>
   <Route path="/event2" element={<Event2/>}/>
   <Route path="/event3" element={<Event3/>}/>
     
      </Routes>
     
  )
}

export default App
