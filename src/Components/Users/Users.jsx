import React from "react"
import { Button } from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import './Users.css'
import { Link, useNavigate } from "react-router-dom"
import swal from 'sweetalert';


const Users=()=>{
    const navigate =useNavigate()
    const handleDelete=(itemId)=>{
        swal({
            title: "Are you sure?",
            text: `Are you sure that you want to delete record ${itemId}?`,
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
              swal("Deleted!", "Your imaginary file has been deleted!", "success");
            }
          });

    }
    return(
        <div>
             <div className="d-flex justify-content-between">
                  <input type="text" className="myUser" placeholder="Search User"></input>
                  <Link to='/User/Add'>
                    <Button className="btn btn-success myBtn">+</Button>
                  </Link>
                  
               
             </div>
             <div className="d-flex justify-content-center table">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Operations</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Elle</td>
                            <td>Mackesy</td>
                            <td>elle.mackesy@gmail.com</td>
                            <td>
                                <i class="fa fa-edit icon" aria-hidden="true"
                                onClick={()=>{
                                    return navigate("/User/Add/2")
                                }}></i>
                                
                                
                            <i class="fa fa-trash icon" aria-hidden="true"
                            onClick={()=>handleDelete(1)}></i>
                            </td>

                        </tr>
                    </tbody>
                </Table>

             </div>

        </div>
    
    )
}
export default Users