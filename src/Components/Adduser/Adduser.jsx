import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Adduser=()=>{
    const {userId} =useParams();
    const navigate=useNavigate();
    const [data, setData]=useState({
        name: "",
        username: "",
        email: "",
        address: {
            city: "",
            street:"",
            suite:"",
            zipcode:""

        }
    });

    const handleAdduser=(e)=>{
        e.preventDefault();
        //console.log(data)
        axios.post('https://jsonplaceholder.typicode.com/users', data).then(res=>{
            console.log(res)
        })
    }



    return(
        <div className= 'mt-1 p-4 container-fluid container'>
            <h4 className="text-center text-primary">
                {userId ? 'Edit User' : 'Add User'}
            </h4>
            <div className="row justify-content-center mt-1 ">
                <form onSubmit={handleAdduser} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label className="form-label">First/Last Name</label>
                        <input type="text" className="form-control" value={data.name} onChange={(e)=>{
                            //With Spread operator:

                            setData({...data,name:e.target.value});
                            //console.log(data)
                        }}
                       />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input type="text" className="form-control" value={data.username} onChange={(e)=>{
                            setData({...data, username:e.target.value})
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={data.email} onChange={(e)=>{
                            setData({...data,email:e.target.value})
                        }}/>
                    </div>
                    <div className="mb-3 row">
                        <label  className="form-label">Address</label>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="city" value={data.address.city}
                            onChange={(e)=>setData({...data, address:{...data.address,city:e.target.value}})}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="Street" value={data.address.street}
                            onChange={(e)=>setData({...data, address:{...data.address,street:e.target.value}})}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="Address Line 2" value={data.address.suite}
                            onChange={(e)=>setData({...data,address:{...data.address,suite:e.target.value}})}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="Postal code" value={data.address.zipcode}
                            onChange={(e)=>setData({...data,address:{...data.address,zipcode:e.target.value}})}/>
                        </div>
                    </div>

                    <div className="col-12 text-start">
                        <button type="button" class="btn btn-danger ms-2 "
                        onClick={()=>navigate('/User')}>Back</button>
                        <button type="submit" class="btn btn-primary ml-2" >
                            {userId ? 'Edit' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}


export default Adduser