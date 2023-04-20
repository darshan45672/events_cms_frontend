import styles from '../../styles/ShowEvent.module.css';
import img1 from "../../assets/images/homeImage/isebg.jpg";
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router'

import {fetchSingleEvent} from '../../pages/api/api'

import React, { useEffect, useState } from "react";


import Moment from 'react-moment';

import { Row, Col, Container, Card, CardBody, Spinner, Button } from "reactstrap";


import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ShowEvent() {


    const router = useRouter()
    const { id } = router.query



    const [event, setEvent] = useState();
    const [state, setState] = useState();

      useEffect(() => {
        setState('loading');
        if(!router.isReady) return;
        fetchSingleEvent(id)
              .then((p) => {
                setEvent(p)
                setState('done')
              })
              .catch((e) => {
                setState('error')
              });
        
      },  [router.isReady]);

    if (!event) return null;
    


    if (!event || state === 'loading')
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
      <section class="section mt-3">
          <div class="container">
                  <div class="row">
                      
                      <div class="col-lg-8 col-lg-7">
      
      
          <Image
                              className="img-fluid rounded shadow"
                              src={img1}
                              alt="wrappixel kit"
                            />
                          <h4 class="mt-4">{event.title}</h4>
                          <p>{event.description}</p>
      
                      
      
                  
                  
                      </div>
              
      
                      <div class="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0 ">
                          <div class="card border-0 bg-light p-4 shadow">
                              <div class="card-body">
      
      
                                  <div class="widget mb-4 pb-2">
                                  
                                
                                  <p>Start Date</p>
                                  <h6><Moment format="DD/MM/YYYY H:m a" >{event.startDate}</Moment></h6>
                                  <p>End Date</p>
                                  <h6><Moment format="DD/MM/YYYY H:m a" >{event.endDate}</Moment></h6>
      
                                  <p>Venue</p>
                                  <h6>{event.venue}</h6>
                                  <Button color="primary" onClick="registerEvent">Register</Button>
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
