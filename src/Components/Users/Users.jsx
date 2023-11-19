import React from "react"
import { Container,Button } from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import './Users.css'

const Users=()=>{
    return(
        <div>
             <div className="d-flex justify-content-between">
                  <input type="text" className="myUser" placeholder="Search User"></input>
                  <Button className="btn btn-success myBtn">+</Button>
               
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
                            <td></td>

                        </tr>
                    </tbody>
                </Table>

             </div>

        </div>
    
    )
}
export default Users