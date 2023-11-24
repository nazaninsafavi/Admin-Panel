import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import './Users.css'
import { Link, useNavigate } from "react-router-dom"
import swal from 'sweetalert';
import axios from "axios"

const Users=()=>{
    const navigate =useNavigate()
    const [users ,setUsers]=useState([]);
    const [mainUsers ,setMainUsers]=useState([]);


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            setUsers(res.data);
            setMainUsers(res.data)
        }).catch(err=>{
            console.log(err)
        })

    },[])
    const handleDelete=(itemId)=>{
        swal({
            title: `Are you sure you want to delete item ${itemId}?`,
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios({
                    method:'DELETE',
                    url:`https://jsonplaceholder.typicode.com/users/${itemId}`
                }).then(res=>{
                    //console.log(res)
                    if(res.status===200){
                        const newUsers=users.filter(u=>u.id !==itemId);
                        setUsers(newUsers)
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                            button: "Ok"
                          });
                    }else{
                        swal("An error has occured!" , {
                            icon:"error",
                            button: "Got it"
                        })
                    }
                })
            
            } else {
              swal("Your imaginary file is safe!");
            }
          });

    }
    const handleSearch=(e)=>{
        setUsers(mainUsers.filter(u=>u.name.includes(e.target.value)))
        //console.log(e.target.value)
    }
    return(
        <div>
             <div className="d-flex justify-content-between">
                  <input type="text" className="myUser" placeholder="Search User" onChange={handleSearch}></input>
                  <Link to='/User/Add'>
                    <Button className="btn btn-success myBtn">+</Button>
                  </Link>
                  
               
             </div>
             <div className="d-flex justify-content-center table">
                {users.length ? (
                    <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First/Last Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Operations</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u=>(
                            <tr key={u.id}>
                                  <td>{u.id}</td>
                                  <td>{u.name}</td>
                                  <td>{u.username}</td>
                                  <td>{u.email}</td>
                                  <td>
                                      <i className="fa fa-edit icon-edit" aria-hidden="true"
                                      onClick={()=>{
                                          return navigate(`/User/Add/${u.id}`)
                                      }}></i>
                                      
                                      
                                  <i className="fa fa-trash icon" aria-hidden="true"
                                  onClick={()=>handleDelete(u.id)}></i>
                                  </td>
      
                            </tr>

                        ))}
                  
                    </tbody>
                </Table>

                ) : (
                    <h4 className="text-center text-info">Please wait...</h4>
                )}
                

             </div>

        </div>
    
    )
}
export default Users