import '../Custom.css';
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <section class="top-nav">
                <div className='brand'>
                    BADDY TECH
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/Services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/Software'>Software</Link>
                    </li>
                    <li>
                        <Link to='/Portfolio'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/Blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>
            </section>
            <Outlet />
        </header>
    );
}

export default Header;