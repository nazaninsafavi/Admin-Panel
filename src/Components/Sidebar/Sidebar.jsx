import React from 'react';
import './Sidebar.css'
import adminlogo from'E:/admin/src/Pics/admin_logo.png'
import { Container } from "react-bootstrap"
import {NavLink} from 'react-router-dom'



const Sidebar =()=>{

return(
    <div className='d-flex p-2 flex_shrink_1 layer'>
        <Container fluid className='Contain'>
            <div className='Img text-center'>
            <img src={adminlogo} className='adminImg rounded-circle' alt='admin'></img>
            </div>
            <div className='Lists'>
                <ul>
                    
                        <NavLink className={({isActive})=>{return isActive ? 'Active_nav' : 'link'}} to='/User'>
                        <li className='list'>  
                            Users
                        </li>
                        </NavLink>
                    
                        <NavLink className={({isActive})=>{return isActive ? 'Active_nav' : 'link'}} to='/Posts'>
                        <li className='list'>  
                            Posts
                        </li>
                        </NavLink>
                        <NavLink className={({isActive})=>{return isActive ? 'Active_nav' : 'link'}} to='/Gallery'>
                        <li className='list'>  
                            Gallery
                        </li>
                        </NavLink>
                        <NavLink className={({isActive})=>{return isActive ? 'Active_nav' : 'link'}} to='/Todos'>
                        <li className='list'>  
                            Todos
                        </li>  
                        </NavLink>
                </ul>

            </div>
        </Container>
           
        
        
         
    </div>

)
}

export default Sidebar