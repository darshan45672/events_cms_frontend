import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/toygameboy.png";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
              MITE welcoming you for exciting events
            </h1>
            <h4 className="subtitle font-light">
              Register or sign in for the events
              <br /> Ready to Book the events
            </h4>
            <a
              href="/registration"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              Register
            </a>
            <Link href="/signin">
              <a className="btn btn-md m-t-30  btn-outline-light ">
                Sign in
              </a>
            </Link>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
