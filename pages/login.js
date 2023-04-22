import React from 'react';
import { signIn, useSession } from 'next-auth/react'


import { useEffect, useState } from "react";

import { Button } from "reactstrap";

import Link from 'next/link'



const SignIn = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

    const { data: session, status } = useSession()

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);


  const handleLogin  = async () => {
    const result = await signIn("credentials", {
      username: email,
      password: password,
      redirect: true,
      // callbackUrl: "http://localhost:3006/",
      callbackUrl: `${window.location.origin}/profile`,
    });
  }


  if (status === "authenticated") {
    return <p>Signed in as {session.user.id}</p>
  }
  return (
    <div className='container mt-4'>
      <div className='row mt-4'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='card shadow p-4'>
         
    <div class="form-outline mb-4">
      <input type="text" id="form2Example1" class="form-control" value={email} onChange={handleChangeEmail} />
      <label class="form-label" for="form2Example1">Username</label>
    </div>


    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control"  value={password} onChange={handleChangePassword}/>
      <label class="form-label" for="form2Example2">Password</label>
    </div>




    <button class="btn btn-info btn-block mb-4" onClick={handleLogin}>Sign in</button>


    <div class="text-center">
    <Link href={`/registration`}>
        <p>Not a member? <a href="#!">Register</a></p>
    </Link>


    </div>
         
          </div>
             
        </div>
        <div className='col-md-3'></div>
        </div>
    </div>
)};

export default SignIn;
