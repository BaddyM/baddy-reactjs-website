import '../Custom.css';
import { Outlet, Link } from "react-router-dom";

const Links = () => {
    return (
        <>
            <h5 className='useful-links mt-3'>Useful links</h5>
            <div className='links'>
                <div>
                    <ul className='link1'>
                        <li>
                            <Link to="Services">Online Courses</Link>
                        </li>
                        <li>
                            <Link to="Software">Software</Link>
                        </li>
                        <li>Mobile Apps</li>
                        <li>Desktop Apps</li>
                    </ul>
                </div>
                <div>
                    <ul className='link1'>
                        <li>Tutorials</li>
                        <li>React js</li>
                        <li>Node js</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Links;