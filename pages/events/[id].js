import styles from '../../styles/ShowEvent.module.css';
import img1 from "../../assets/images/homeImage/isebg.jpg";
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router'

import {fetchSingleEvent} from '../../pages/api/api'

import React, { useEffect, useState} from "react";


import Moment from 'react-moment';

import { Row, Col, Container, Card, CardBody, Spinner, Button, Badge} from "reactstrap";

import {registerEvent} from '../../pages/api/api'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { signOut, useSession } from 'next-auth/react'

import { useQuery, gql } from "@apollo/client";

const EVENT_QUERY = gql`
query ($where: EventWhereUniqueInput!) {
    event(where:$where) {
      id
      img
      title
    	description
        startDate
          endDate
          venue
      eventRegistrations{
      	user{
          id
          firstName
          lastName
        }
        createdAt
      }
    }
  }      
`;



function ShowEvent() {


    const router = useRouter()
    const { id } = router.query

    const { data: session, status } = useSession()

    const { data, refetch, loading, error } = useQuery(EVENT_QUERY, {
        variables: {
            "where": {
              "id": router.query.id
            }
          },
          fetchPolicy: 'cache-and-network'
      });


    const [state, setState] = useState();


    

    function onRegister() {
        registerEvent(data.event.id, session.user.id).then((p) => {
          
            refetch();
        });
    }


    if (loading)
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
if (error)
    return (
        <div className="flex h-screen w-full items-center justify-center bg-stone-900 text-white">
            Something went wrong!!
        </div>
    );


    return (
      <section class="section mt-3">
          <div class="container">
                  <div class="row">
                      
                      <div class="col-lg-8 col-lg-7">
      
      
               <img
                              className="img-fluid rounded shadow"
                              src={data.event.img ? data.event.img : img1}
                              style={{
                                width: "100%",
                              }}
                            />
                          <h4 class="mt-4">{data.event.title}</h4>
                          <p>{data.event.description}</p>
      
                      
      
                  
                  
                      </div>
              
      
                      <div class="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0 ">
                          <div class="card border-0 bg-light p-4 shadow">
                              <div class="card-body">
      
      
                                  <div class="widget mb-4 pb-2">
                                  
                                
                                  <p>Start Date</p>
                                  <h6><Moment format="DD/MM/YYYY H:m a" >{data.event.startDate}</Moment></h6>
                                  <p>End Date</p>
                                  <h6><Moment format="DD/MM/YYYY H:m a" >{data.event.endDate}</Moment></h6>
      
                                  <p>Venue</p>
                                  <h6>{data.event.venue}</h6>

                                  {
                                    session && session.user.roles.includes("eventManager") ?
                                    <></>
                                    :
                                    data.event.eventRegistrations.find((reg) => reg.user.id === session.user.id) ? 
                              
                                            <h2>
                                            <Badge color="success" className='text-white p-2'>
                                            Registered
                                            </Badge>
                                        </h2>
                                     : 
                                     <Button color="primary" onClick={() => onRegister()}>Register</Button>

                                     
                                  }

                       
                                  
                                  <br/>
                                  {/* <span class="badge badge-success mb-4">Registered</span> */}
 
      
                                  </div>
      
                              </div>
                          </div>
                      
                      </div>
                  </div>
      
              </div>
          </section>
        );




}

export default ShowEvent;
