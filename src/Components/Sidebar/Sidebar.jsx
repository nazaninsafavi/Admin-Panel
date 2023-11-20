import React from 'react';
import './Sidebar.css'
import adminlogo from'E:/admin/src/Pics/admin_logo.png'
import { Container } from "react-bootstrap"
import {Link} from 'react-router-dom'



const Sidebar =()=>{

return(
    <div className='d-flex p-2 flex_shrink_1 layer'>
        <Container fluid className='Contain'>
            <div className='Img text-center'>
            <img src={adminlogo} className='adminImg rounded-circle' alt='admin'></img>
            </div>
            <div className='Lists'>
                <ul>
                    <li className='list'>
                        <Link className='link' to='/User'>Users</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to='/Posts'>Posts</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to='/Gallery'>Gallery</Link>
                    </li>
                    <li className='list'>
                        <Link className='link' to='/Todos'>Todos</Link>
                    </li>

                </ul>

            </div>
        </Container>
           
        
        
         
    </div>

)
}

export default Sidebar