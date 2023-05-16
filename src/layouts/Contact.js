import '../Custom.css';
import 'animate/animate.css';
import Header from './Header';
import Footer from './Footer';
import banner from '../images/inner_page_banner.jpg';

const Contact = () => {
    return (
        <>
            <Header />
            <div className='animate__animated animate__bounce'>
                <p className='contact-banner-text'>
                    <h4 className='fw-bold fs-2'>Contact</h4>
                    <b className='text-info'>Home</b> {'>'} Contact
                </p>
                <img className='contact-banner' src={banner} />
            </div>
            <div className='p-3'>
                <h4 className='text-center text-uppercase'>Get in Touch</h4>
                <form >
                    <div className='contact'>
                        <input type='text' placeholder='First Name' />
                        <input type='email' placeholder='Last Name' />
                    </div>
                    <div className='contact'>
                        <input type='text' placeholder='Phone number' />
                        <input type='text' placeholder='Email address' />
                    </div>
                    <div className='contact'>
                        <textarea type='text' placeholder='Message'></textarea>
                    </div>
                    <button className='contact-btn'>SUBMIT</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Contact;