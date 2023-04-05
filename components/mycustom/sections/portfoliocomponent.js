/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img2 from "../../../assets/images/homeImage/eeebg.png";
import img3 from "../../../assets/images/homeImage/cse2bg.png";
import img1 from "../../../assets/images/homeImage/isebg.jpg";
import img4 from "../../../assets/images/homeImage/mebg.jpg";
import img5 from "../../../assets/images/homeImage/eee2bg.png";
import img6 from "../../../assets/images/homeImage/civilbg.jpg";

const PortfolioComponent = () => {
  return (
    <div>
      {/* <div className="spacer bg-dark">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Portfolio</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Events we are conducting in our college</h2>
              <h6 className="subtitle">
                student can participet in any event and join or book the events according to there shedule join soon as possible
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="4">
              <Card className="card-shadow">
                <a href="/gamerules" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">
                  ISE Guest lectures
                  </h5>
                  <p className="m-b-0 font-14">ise despartment</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="/gamerules" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img2}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">EEE Networking event</h5>
                  <p className="m-b-0 font-14">electrical department</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="/gamerules" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img3}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">CSE Hackathon</h5>
                  <p className="m-b-0 font-14">cse department</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="/gamerules" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img4}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">ME Research conferences</h5>
                  <p className="m-b-0 font-14">mechanical department</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="/gamerules" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img5}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Event of conferences</h5>
                  <p className="m-b-0 font-14">electrical department</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="/gamerules" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img6}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">industrial experties</h5>
                  <p className="m-b-0 font-14">civil department</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponent;
