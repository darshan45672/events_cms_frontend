
import React, { useEffect, useState } from "react";

import { Row, Col, Container, Card, CardBody,Spinner,Input } from "reactstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const handleUsnBlur = (event) => {
    const value = event.target.value;
    const regex = /^4MT(18|19|20|21|22|23)(CS|EC|ME|CV|IS)\d{3}$/; // regex for a social security number in the format xxx-xx-xxxx

    if (regex.test(value)) {
      toast.success("Hurray! USN is valid", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }else{
            toast.error("Enter valid USN format", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }
  }



  

const EditProfile = (props) => {

    const [firstName, setFirstName] = useState(props.user.firstName);
    const [lastName, setLastName] = useState(props.user.lastName);
    const [email, setEmail] = useState(props.user.email);
    const [username, setUsername] = useState(props.user.username);
    const [usn, setUsn] = useState(props.user.usn);
    



    const handleSubmit = async (event) => {
        event.preventDefault();
    

        if (!username || !firstName || !lastName || !email || !usn) {
               
          toast.error("Enter all fields", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              })
          return;
        }
    

    
            axios.patch(`http://localhost:3000/api/users/${props.user.id}`, 
            { 
                    "firstName": firstName,
                    "lastName": lastName,
                    "username": username,
                    "usn": usn,
                    "email": email   
                }).then((res) => {
                    console.log(res);
                    toast.success("User Updated Successfully", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        })
                }).catch((err) => {
                    toast.error("Something Wrong", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        })
                    })
    
    
      }
 
      


    return (
        <div>
             <form onSubmit={handleSubmit}>
            <div className="row">
    <div class="col-md-6 form-outline mb-4">
    <label class="form-label" for="form2Example1">Username</label>
    <Input type="text" id="form2Example1" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
  </div>
  <div class="col-md-6 form-outline mb-4">
  <label class="form-label" for="form2Example1">First Name</label>
    <input required type="text" id="form2Example1"  value={firstName} class="form-control" onChange={(e) => setFirstName(e.target.value)} />
  </div>
</div>
<div className="row">
    <div class="col-md-6 form-outline mb-4">
    <label class="form-label" for="form2Example1">Last Name</label>
    <input required  type="text" id="form2Example1" value={lastName} class="form-control" onChange={(e) => setLastName(e.target.value)}/>
  </div>
  <div class="col-md-6 form-outline mb-4">
  <label class="form-label" for="form2Example1">USN</label>
  <input required type="text" id="form2Example1" value={usn} class="form-control" onChange={(e) => setUsn(e.target.value)} onBlur={handleUsnBlur}/>
  </div>
</div>
<div className="row">
    <div class="col-md-6 form-outline mb-4">
    <label class="form-label" for="form2Example1">Email address</label>
    <input required  type="email" id="form2Example1" value={email} class="form-control" onChange={(e) => setEmail(e.target.value)}/>

  </div>
  </div>


  <div className="row">

  <div class="col-md-12 form-outline mb-4">
  <button type="submit" class="btn btn-info btn-block mb-4" >Update</button>
  </div>

  </div>
  </form>

        </div>
  );
}

export default EditProfile;