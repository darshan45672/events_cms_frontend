import Image from "next/image";

import {fetchUser} from './api/api'

import { useRouter } from 'next/router'

import React, { useEffect, useState } from "react";

import { signOut, useSession } from 'next-auth/react'

import Link from 'next/link'


import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Profile = () => {
    // return
    const router = useRouter()
    const [user, setUser] = useState();
    const [state, setState] = useState();

    const { data: session, status } = useSession()

    useEffect(() => {
        setState('loading');
        if(!router.isReady) return;
        if (status == "authenticated") {
        fetchUser(session.user.id)
              .then((p) => {
                setUser(p)
                setState('done')
              })
              .catch((e) => {
                setState('error')
              });
    
            }
        
      },  [router.isReady]);


      if (status != "authenticated") {
        return (
            <div className="container">
                <div className="text-center mt-4">
                    <h3 className="text-4xl font-bold mb-4">You are not logged in</h3>
                    <Link href="login">
                    <button className="btn btn-primary">Sign in</button>
                    </Link>
                </div>
            </div>
        );
      }

    if (!user) return null;


    
    if (!user || state === 'loading')
    return (
      <section class="section mt-3">
          <div class="container">
                  <div class="row">
                      
                      <div class="col-lg-8 col-lg-7">
      
      
                      <Skeleton count={10}/>
      
                      
      
                  
                  
                      </div>
              
      
                      <div class="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0 ">
                          <div class="card border-0 bg-light p-4 shadow">
                              <div class="card-body">
      
      
                                  <div class="widget mb-4 pb-2">
                                  <Skeleton count={10}/>
                                  </div>
      
                              </div>
                          </div>
                      
                      </div>
                  </div>
      
              </div>
          </section>
    );

    if (state === 'error')
    return (
        <div className="flex h-screen w-full items-center justify-center bg-stone-900 text-white">
            Something went wrong!!
        </div>
    );


    
    return (
        <section >
            <div class="container py-5">
             

                <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                    <div class="card-body text-center">
                    

<Image
                      class="rounded-circle img-fluid"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    width={100}
                    height={100}
                  />

                        <h5 class="my-3">{user.firstName} {user.lastName}</h5>
                        <p class="text-muted mb-1">{user.usn}</p>
                        <div class="d-flex justify-content-center mb-2">
                        <button type="button" class="btn btn-primary ml-2">Events</button>
                        <button type="button" class="btn btn-outline-primary ms-1 ml-2" onClick={() => signOut()}>Logout</button>
                        </div>
                    </div>
                    </div>
                    <div class="card mb-4 mb-lg-0">
                    <div class="card-body p-0">
                     
                    </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card mb-4">
                    <div class="card-body">
                  

                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">ID</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{user.id}</p>
                        </div>
                        </div>

                        <hr/>

                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Username</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">@{user.username}</p>
                        </div>
                        </div>

                        <hr/>


                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Full Name</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{user.firstName} {user.lastName}</p>
                        </div>
                        </div>
                        <hr />
                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Email</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{user.email}</p>
                        </div>
                        </div>
                        <hr/>
                      
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                        <div class="card mb-4 mb-md-0">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Registered Events</h4>
                        <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Event Name</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
            </section>
    );
}


export default Profile;
