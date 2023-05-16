import '../Custom.css';
import Header from './Header';
import Footer from './Footer';
import banner from '../images/inner_page_banner.jpg';
import repair from '../images/post-04.jpg';
import {useState} from 'react';

function Services() {

    //Use State here

    /*
    Use state returns an array of which the first element is the initial state and the second 
    is a function that changes after the change has occured
    */

    const [color, setColor] = useState("red");

    return (
        <>
            <Header />
            
            <h1>My Favorite color is {color}</h1>
            
            <button type='button' onClick={() => setColor("Blue")}>Blue</button>
            <button type='button' onClick={() => setColor("Yellow")}>Yellow</button>
            <button type='button' onClick={() => setColor("Green")}>Green</button>

            <div className='animate__animated animate__bounce'>
                <p className='contact-banner-text'>
                    <h4 className='fw-bold fs-2'>Services</h4>
                    <b className='text-info'>Home</b> {'>'} Services
                </p>
                <img className='contact-banner' src={banner} />
            </div>

            <h4 className='text-center p-3 fw-bold text-uppercase'>Services We offer at Baddy Tech</h4>

            <div className='container-fluid row mt-3'>
                <div className='card col-md-3 border-0'>
                    <img src={repair} className='' />
                    <div className='card-body'>
                        <h5 className='fw-bold text-center'>Computer Repair & Maintenance</h5>
                        <div className='text-center'>
                            <button className='service-btn' type='submit' name='service'>EXPLORE</button>
                        </div>
                    </div>
                </div>
                <div className='card col-md-3 border-0'>
                    <img src={repair} className='' />
                    <div className='card-body'>
                        <h5 className='fw-bold text-center'>Computer Repair & Maintenance</h5>
                        <div className='text-center'>
                            <button className='service-btn' type='submit' name='service'>EXPLORE</button>
                        </div>
                    </div>
                </div>
                <div className='card col-md-3 border-0'>
                    <img src={repair} className='' />
                    <div className='card-body'>
                        <h5 className='fw-bold text-center'>Computer Repair & Maintenance</h5>
                        <div className='text-center'>
                            <button className='service-btn' type='submit' name='service'>EXPLORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Services;