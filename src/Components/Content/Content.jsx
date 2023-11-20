import React from 'react';
import './Content.css'
import Users from '../Users/Users';
import Posts from '../Posts/Posts';
import Gallery from '../Gallery/Gallery';
import Todos from '../Todos/Todos';
import { Routes,Route } from 'react-router-dom';
import Adduser from '../Adduser/Adduser';


const Content=()=>{
    return(
        <>
         <div className='w-100 Surface'>
         <i className='fa fa-clock text-dark m-2'
            ></i>
         <h3 className='d-flex justify-content-center title'>Admin Panel</h3> 
            <Routes>
                <Route path='/User' element={<Users />}/>
                <Route path='/User/Add' element={<Adduser />}>
                    <Route path=':userId'/>
                </Route>
                <Route path='/Posts' element={<Posts/>}/>
                <Route path='/Gallery' element={<Gallery/>}/>
                <Route path='/Todos' element={<Todos/>}/>

            </Routes>
           
           
           
           

       </div>
        </>
       
    )
}

export default Content 

