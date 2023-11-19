import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar/Sidebar'
import Content from './Components/Content/Content'
import { BrowserRouter } from 'react-router-dom';

const App =()=>{
  return(
    <BrowserRouter>
       <div className='d-flex'>
        <Sidebar/>
        <Content/>


      


       </div>
    </BrowserRouter>
   
  )

}

export default App