
import React from 'react'
import "./index.css"
import Vaccine from '../assests/c.svg'
import inj from "../assests/inj.png"
import Vaccineb from '../assests/agency-1.svg'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
const Home = () => {
    return (
       <>
       <section id="header" className="d-flex align-items-center  header-section">
       <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-11 mx-auto">
            <div className="row">
            <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1 className="home-text" >Stay <strong>Home</strong> , Stay <strong> Safe  </strong> <SentimentVerySatisfiedIcon className="emoji" /></h1>
                <h4 className="my-3  vc-ins">we will defeat covid together , Got Your vaccination <img src={inj} alt="inj" className="inj"/> center by your pincode .</h4>
                <div className="mt-3">
                    <a href="https://selfregistration.cowin.gov.in/" className="btn-register"> Register  </a>
                </div>
            </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img swing">
                <img src={Vaccine} className="imgage-header animated" alt="imh"/>
                </div>
            </div>
           

        </div>
        </div>
        </div>
       </section>
       <section class="work-porcess-area section">
            <div class="container">


        <div class="section-header">
          
                            <h2>How It Works.</h2>
          <p>By simply search by Pincode code & by District name with State name.</p>
        </div>
                <div class="process-info">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="single-process first text-center">
                                <i class="fas fa-search"></i>
                                <h4>Register on Cowin Website.</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-process secend text-center">
                                <i class="fas fa-cog"></i>
                                <h4>Search by Pincode.
                                </h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-process thard text-center">
                                <i class="fas fa-globe"></i>
                                <h4>By District name with State.</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-process last text-center">
                                <i class="fas fa-sync-alt"></i>
                                <h4>Get details about</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about" id="about">
            <div class="container">
                <div class="heading text-center">
                    <h2>About
                        <span>Us</span></h2>
                    <p><span>Covid-Defeat</span> Basically helps you to get all information about covid information with centres fro vaccination.
                      
                    </p>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <img src={Vaccineb} alt="about" class="img-fluid" width="100%"/>
                    </div>
                    <div class="col-lg-6">
                        <h5>Covid-Defeat helps you to get actual data on the realtime.</h5>
                        <p>I Hope i'ts really helps you while searching vaccination centres.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>
Helpline Number:</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>
                                    +91-11-23978046</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>    Toll Free:</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>
                                    1075</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i> Helpline Email ID:</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>
                                    ncov2019@gov.in</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    )
}

export default Home