import '../Custom.css';
import Header from './Header';
import Footer from './Footer';
import Links from './Usefullinks';
import PureCounter from "@srexi/purecounterjs";
import 'bootstrap/dist/css/bootstrap.css';
import tech from '../images/technology.webp';
import img1 from '../images/i1.png';
import repair from '../images/i2.png';
import mobile from '../images/i3.png';
import network from '../images/i4.png';
import fast from '../images/si1.png';
import secure from '../images/si2.png';
import expert from '../images/si3.png';
import affordable from '../images/si4.png';
import laptop from '../images/laptop.jpg';
import 'fontawesome-free/css/all.css';

function Home() {
    const pure = new PureCounter();
    return (
        <>
            <Header />
            <img className='index-img' src={tech} alt='image' />
            <h4 class=""><span data-purecounter-start="0" data-purecounter-end="14" data-purecounter-duration="2"
                class="purecounter"></span>
            </h4>
            <p className='container bg-light p-3 index-text'>
                At Baddy Tech, We have all your IT solutions for instance <b>School Management Systems, Online courses that come with
                    certificates, Computer Repair and Maintenance, Business Consultancy</b> and so much more.
            </p>
            <div className='head1'>
                <h3 className='text-center fw-bold'>Why Choose Us</h3>
                <h5 className='text-center text-secondary fw-bold'>Fast Service Delivery</h5>
            </div>
            <div className='cont1'>
            </div>

            <div className='container-fluid row justify-content-between mb-2'>
                <div className='card col-sm-2 m-2 border-0 shadow-lg service'>
                    <div className='card-body text-center'>
                        <img className='img-fluid w-50 card-img-top' src={img1} />
                        <h6 className='fw-bold text-dark p-2'>Data Recovery</h6>
                        <p>
                            We offer a high rate of data recovery just incase you lost data while formatting your computer.
                        </p>
                    </div>
                </div>
                <div className='card col-md-2 m-2 border-0 shadow-lg service'>
                    <div className='card-body text-center'>
                        <img className='img-fluid w-50 card-img-top' src={repair} />
                        <h6 className='fw-bold text-dark p-2'>Computer Repair</h6>
                        <p>
                            Computer Repair and Maintenance is our area of expertise, that we offer at a reasonable price.
                        </p>
                    </div>
                </div>
                <div className='card col-md-2 m-2 border-0 shadow-lg service'>
                    <div className='card-body text-center'>
                        <img className='img-fluid w-50 card-img-top' src={mobile} />
                        <h6 className='fw-bold text-dark p-2'>Mobile Service</h6>
                        <p>
                            Do you want to develop and app or have a problem with your mobile gadget, Please get to us.
                        </p>
                    </div>
                </div>
                <div className='card col-md-2 m-2 border-0 shadow-lg service'>
                    <div className='card-body text-center'>
                        <img className='img-fluid w-50 card-img-top' src={network} />
                        <h6 className='fw-bold text-dark p-2'>Network Solutions</h6>
                        <p>
                            For those that need fibre network, We also have you sorted at reasonable prices with a wide range
                            of subscriptions on ground.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-light p-3'>
                <h3 className='fw-bolder p-2 text-dark'>WHAT TO EXPECT</h3>
                <h6 className='fw-bold p-2 text-secondary'>Easy and Fast way to get your service</h6>
                <div className='row justify-content-between'>
                    <div className='card col-md-2 m-2 border-0 bg-light service'>
                        <div className='card-body text-center'>
                            <img className='img-fluid w-50 card-img-top' src={fast} />
                            <h6 className='fw-bold text-dark p-2'>Fast Service Delivery</h6>
                            <p>
                                With our advanced and up-to-date equipment, expect a faster service delivery.
                            </p>
                        </div>
                    </div>
                    <div className='card col-md-2 m-2 border-0 bg-light service'>
                        <div className='card-body text-center'>
                            <img className='img-fluid w-50 card-img-top' src={secure} />
                            <h6 className='fw-bold text-dark p-2'>Secure Payments</h6>
                            <p>
                                All payments are made through the right channels and convenient for our clients.
                            </p>
                        </div>
                    </div>
                    <div className='card col-md-2 m-2 border-0 bg-light service'>
                        <div className='card-body text-center'>
                            <img className='img-fluid w-50 card-img-top' src={expert} />
                            <h6 className='fw-bold text-dark p-2'>Expert Team</h6>
                            <p>
                                All projects are handled by a Team of experts that will always offer the best output.
                            </p>
                        </div>
                    </div>
                    <div className='card col-md-2 m-2 border-0 bg-light service'>
                        <div className='card-body text-center'>
                            <img className='img-fluid w-50 card-img-top' src={affordable} />
                            <h6 className='fw-bold text-dark p-2'>Affordable Services</h6>
                            <p>
                                At Baddy Tech, All Services and Online Courses are quite pocket friendly and everyone is welcomed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-3'>
                <h3 className='fw-bolder p-2 text-dark text-end'>OUR FEEDBACK</h3>
                <h6 className='fw-bold p-2 text-secondary text-end'>All We have offered</h6>
                <div className='card border-0'>
                    <div className='row g-0'>
                        <div className='col-md-6'>
                            <img className='img-fluid card-img-top' src={laptop} />
                        </div>
                        <div className='col-md-6'>
                            <div className='card-body'>
                                <div className='row'>
                                <div className='col-sm-3 text-end'>
                                    <i className='text-primary feedback fa fa-smile'></i>
                                    <h6 className='fw-bold text-dark fs-5 p-2'>Happy Customers</h6>
                                    <h4 class="fw-bold fs-1"><span data-purecounter-start="0" data-purecounter-end="430" data-purecounter-duration="2"
                class="purecounter"></span>
            </h4>
                                </div>
                                <div className='col-sm-3 text-end'>
                                    <i className='text-primary feedback fa fa-check-circle'></i>
                                    <h6 className='fw-bold text-dark fs-5 p-2'>Courses completed</h6>
                                    <h4 class="fw-bold fs-1"><span data-purecounter-start="0" data-purecounter-end="244" data-purecounter-duration="2"
                class="purecounter"></span>
            </h4>
                                </div>
                                <div className='col-sm-3 text-end'>
                                    <i className='text-primary feedback fa fa-compact-disc'></i>
                                    <h6 className='fw-bold text-dark fs-5 p-2'>Software Delivered</h6>
                                    <h4 class="fw-bold fs-1"><span data-purecounter-start="0" data-purecounter-end="786" data-purecounter-duration="2"
                class="purecounter"></span>
            </h4>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home;