import React from "react";
import { Animated } from "react-animated-css";

import img_07 from "../../img/07.jpg";
export default function index() {
  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        <div className='row g-5'>
          <div className='col-lg-5'>
            <div
              className='position-relative overflow-hidden ps-5 pt-5 h-100'
              style={{ minHeight: "50vh" }}
            >
              <img
                className='position-absolute w-100 h-100'
                src={img_07}
                alt=''
                style={{ objectFit: "cover" }}
              />
              <div
                className='position-absolute top-0 start-0 pe-3 pb-3'
                style={{ width: "200px", height: "200px" }}
              >
                <Animated
                  animationInDelay={600}
                  animationIn='bounceInLeft'
                  animationOut='fadeInUp'
                  isVisible={true}
                >
                  <div className='d-flex flex-column justify-content-center text-center bg-primary h-100 p-3'>
                    <h1 className='text-white'>10</h1>
                    <h2 className='text-white'>Anos</h2>
                    <h5 className='text-white mb-0'>de Experiência</h5>
                  </div>
                </Animated>
              </div>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='h-100'>
              <Animated
                animationInDelay={200}
                animationIn='bounceInRight'
                animationOut='fadeInUp'
                isVisible={true}
              >
                <div className='border-start border-5 border-primary ps-4 mb-5'>
                  <h6 className='text-body text-uppercase mb-2'>Sobre nos</h6>
                  <h1 className='display-6 mb-0'>
                    Especialistas em Engenharia
                  </h1>
                </div>
              </Animated>

              <Animated
                animationInDelay={400}
                animationIn='bounceInRight'
                animationOut='fadeInUp'
                isVisible={true}
              >
                <p>
                  O objetivo da CENTRAL DE PERÍCIAS é promover, de forma ágil,
                  com qualidade técnica e focado na defesa do cliente,
                  assistências técnicas periciais para acompanhar a realização
                  de perícias judiciais, oferecendo as melhores estratégias para
                  cada situação e caso.
                </p>
              </Animated>
              <Animated
                animationInDelay={400}
                animationIn='bounceInRight'
                animationOut='fadeInUp'
                isVisible={true}
              >
                <div className='border-top mt-4 pt-4'>
                  <div className='row g-4'>
                    <div className='col-sm-4 d-flex'>
                      <i className='fa fa-check fa-2x text-primary flex-shrink-0 me-3'></i>
                      <h6 className='mb-0'>Ontime at services</h6>
                    </div>
                    <div
                      className='col-sm-4 d-flex wow fadeIn'
                      data-wow-delay='0.3s'
                    >
                      <i className='fa fa-check fa-2x text-primary flex-shrink-0 me-3'></i>
                      <h6 className='mb-0'>24/7 hours services</h6>
                    </div>
                    <div
                      className='col-sm-4 d-flex wow fadeIn'
                      data-wow-delay='0.5s'
                    >
                      <i className='fa fa-check fa-2x text-primary flex-shrink-0 me-3'></i>
                      <h6 className='mb-0'>Verified professionals</h6>
                    </div>
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}