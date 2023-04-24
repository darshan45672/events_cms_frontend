import Link from "next/link";

import { Row, Col, Container, Card, CardBody,Spinner,Input } from "reactstrap";

import { useQuery, gql } from "@apollo/client";

import {signup} from './api/api'

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BRANCHES_QUERY = gql`
{
  branches{
     name
     id
   }
 }
`;

const Registration = () => {

  const { data, loading, error } = useQuery(BRANCHES_QUERY);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usn, setUsn] = useState("");
  const [branch, setBranch] = useState("");

  if (loading) return (
      <Row className="justify-content-center">
      <Col md="7" className="text-center mt-4">
      <Spinner animation="border" variant="primary" />
      </Col>
    </Row>

  );
  if (error) return <pre>{error.message}</pre>


  const handleSubmit = (event) => {
    event.preventDefault();


    if (!username || !password || !firstName || !lastName || !email || !usn || !branch) {
           
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

    const form = 
    {  
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      usn: usn,
      branch: {
        id: branch
      },
      "roles": ["user"],
    }
    console.log(form);
    signup(form).then((res) => {
      console.log(res);
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
    <div className='container mt-4'>
         <ToastContainer />
    <div className='row mt-4'>
      <div className='col-md-3'></div>
      <div className='col-md-6'>
       
        <div className='card shadow p-4'>
            <form onSubmit={handleSubmit}>
            <h4 className="text-center">Register</h4>
  <div class="form-outline mb-4">
    <input type="text" id="form2Example1" class="form-control" onChange={(e) => setUsername(e.target.value)}/>
    <label class="form-label" for="form2Example1">Username</label>
  </div>
  <div class="form-outline mb-4">
    <input type="text" id="form2Example1" class="form-control" onChange={(e) => setFirstName(e.target.value)} />
    <label class="form-label" for="form2Example1">First Name</label>
  </div>
  <div class="form-outline mb-4">
    <input type="text" id="form2Example1" class="form-control" onChange={(e) => setLastName(e.target.value)}/>
    <label class="form-label" for="form2Example1">Last Name</label>
  </div>
  <div class="form-outline mb-4">
    <input type="text" id="form2Example1" class="form-control" onChange={(e) => setUsn(e.target.value)}/>
    <label class="form-label" for="form2Example1">USN</label>
  </div>
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" onChange={(e) => setEmail(e.target.value)}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>
  <div class="form-outline mb-4">
 
          <Input type="select" name="select" id="exampleSelect" onChange={(e) => setBranch(e.target.value)}>
          {
            data.branches.map((branch) => (
              <option value={branch.id}>{branch.name}</option>
            ))
          }
          </Input>
    <label class="form-label" for="form2Example1">Select Your Branch</label>
  </div>


  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" onChange={(e) => setPassword(e.target.value)}/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>




  <button type="submit" class="btn btn-info btn-block mb-4" >Create Account</button>


  <div class="text-center">
  <Link href={`/login`}>
      <p>Already a member? <a href="#!">Login</a></p>
  </Link>


  </div>
          </form>
        </div>
          
      </div>
      <div className='col-md-3'></div>
      </div>
  </div>
  );
};

export default Registration;
