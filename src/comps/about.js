import React from 'react'

import ronBeni from "../img/directors/pic1.jpg";
import danGilboa from "../img/directors/pic2.jpg";
import yossiSharf from "../img/directors/pic3.jpg";
import johnPhilip from "../img/directors/pic4.jpg";
import GoogleMaps from '../general_comps/googleMaps';

export default function About() {

    return (
        <div style={{
            backgroundColor: "#380835",
            marginBottom: "-100px"
        }}>
            <main className="container-fluid">
                <div className="container">
                    <div className="row text-center justify-content-center align-items-center ">
                        <h4 className="my-5">FAQ & About</h4>
                        <div className="accordion text-center col-md-6 col-lg-8 shadow accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item rounded-5 bg-warning">
                                <h2 className="accordion-header rounded-5" id="flush-headingOne">
                                    <button className="accordion-button collapsed  rounded-5" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Who We Are?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse "
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body rounded-5 text-bg-warning">From the second a customer fills out a
                                        lead form
                                        or signs up for a product update email to when they make a purchase,
                                        sales teams are there every step of the way on the customer journey. Below are 18
                                        example sales text messages you might
                                        send as a professional in sales
                                        <code>text messages you might</code> Below are 18 example sales text messages you might
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end accordion 1 --> */}
                            <div className="accordion-item rounded-5 bg-warning">
                                <h2 className="accordion-header rounded-5" id="flush-headingTwo">
                                    <button className="accordion-button rounded-5 collapsed " type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Why Choose Us
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body rounded-5 text-bg-warning">Imagine Web Solution inputs your site
                                        with three
                                        different steps. First is the initial overall idea, which is followed
                                        by information and creativity. These important factors, when viewed all together, gives
                                        us the vision to create your
                                        website with overall benefits for you. A unique combination of other factors is what our
                                        internal team agenda goes
                                        through that helps us to come up with more than a website. Our work is the main
                                        benchmark that we believe describes our
                                        excellence. The satisfaction and happiness of
                                        <code>our national and international clients</code> are what speak our effort.
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end accordion 2 --> */}
                            <div className="accordion-item rounded-5 bg-warning">
                                <h2 className="accordion-header rounded-5 " id="flush-headingThree">
                                    <button className="accordion-button collapsed rounded-5 " type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        availability 24/7! Mean?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse rounded-5 text-bg-warning collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body rounded-5 ">24x7 means "24 hours a day, 7 days a week" and is
                                        used to
                                        describe a service, such as computer server monitoring, thatis continuous,

                                        <code>is always available (day or night)</code> or involves products that can run
                                        constantly without disruption or
                                        downtime .
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end accordion 3 --> */}
                            <div className="accordion-item rounded-5 bg-warning">
                                <h2 className="accordion-header rounded-5" id="flush-headingFour">
                                    <button className="accordion-button collapsed  rounded-5" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                        What will you fine with us?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse text-bg-warning collapse rounded-5"
                                    aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body rounded-5">Providing employee benefits can get expensive fast,
                                        but you can
                                        only do what you can afford to do. The goal is to remain
                                        competitive in the marketplace, not to become a total outlier. And remember,
                                        cost-sharing with employees is normal these

                                        <code>days and employees expect to pay a </code> portion of insurance costs.
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end accordion --> */}
                            <div className="accordion-item rounded-5 bg-warning">
                                <h2 className="accordion-header rounded-5" id="flush-headingFive">
                                    <button className="accordion-button  rounded-5 collapsed " type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false"
                                        aria-controls="flush-collapseFive">
                                        Are you Bussines?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="rounded-5  accordion-collapse text-bg-warning collapse"
                                    aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body rounded-5 ">people who run an owner-operated small business or
                                        those who own
                                        and run a million-dollar company with many employees. A
                                        business owner may delegate tasks and responsibilities to others.
                                        <code>And they may work alongside employees </code>and earn a
                                        salary.
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end accordion --> */}

                        </div>
                    </div>
                </div>

            </main>
            <article>
                <div className="container ">
                    <h3 className="text-center my-5" style={{ color: "rgb(5, 240, 138)" }}>Directors</h3>
                    <div className="directors d-flex justify-content-center align-items-center flex-column flex-md-row gap-3">
                        <div className="director_img">
                            <img data-aos="fade-left" data-img src={ronBeni} alt="ronBeni" />
                            <h5>Ron Beni</h5>
                            <p>Director & product Maneger</p>
                        </div>
                        {/* <!-- end box --> */}

                        <div className="director_img">
                            <img data-aos="fade-right" data-img src={danGilboa} alt='danGilboa' />
                            <h5>Dan Gilboa</h5>
                            <p>Director & product Quality</p>
                        </div>
                        {/* <!-- end box --> */}
                        <div className="director_img">
                            <img data-aos="fade-left" data-img src={yossiSharf} alt="yossiSharf" />
                            <h5>Yossi Sharf</h5>
                            <p>Director & Machin Technition</p>
                        </div>
                        {/* <!-- end box --> */}
                        <div className="director_img">
                            <img data-aos="fade-right" data-img src={johnPhilip} alt="pick1" />
                            <h5>John Philip</h5>
                            <p>Director & Team Leader</p>
                        </div>
                    </div>
                </div>
            </article>
            <aside className="container">
                <h4>Our Location in Google maps</h4>
                <div className="contact_info">

                    <div className="">
                        <GoogleMaps />
                        <p className='mt-5 mx-auto col-10 text-center'>We are located in the center of Tel Aviv Israel Contact phone: 03-5777777 Email: yshina100@gmail.com
                            You can also search on social networks available 24/7 if there is no answer please send your inquiry
                            and we will get
                            back to you as soon as possible thank you very much.</p>
                    </div>

                </div>
            </aside>

        </div>
        // slider with question and answer
        //gallery
        //photos of the manager
    )
}
