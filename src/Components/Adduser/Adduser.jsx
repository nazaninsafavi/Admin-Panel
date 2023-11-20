import React from "react";
import { useParams } from "react-router-dom";

const Adduser=()=>{
    const {userId} =useParams();
    return(
        <div className= 'mt-1 p-4 container-fluid container'>
            <h4 className="text-center text-primary">
                {userId ? 'Edit User' : 'Add User'}
            </h4>
            <div className="row justify-content-center mt-1 ">
                <form className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">First/Last Name</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">User Name</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control"/>
                    </div>
                    <div class="mb-3 row">
                        <label for="exampleInputEmail1" class="form-label">Address</label>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="city"/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="Street"/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="Address Line 2"/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="Postal code"/>
                        </div>
                    </div>

                    <div className="col-12 text-start">
                        <button type="button" class="btn btn-danger ms-2 ">Back</button>
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