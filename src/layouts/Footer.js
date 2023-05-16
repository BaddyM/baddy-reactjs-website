import '../Custom.css';
import React from 'react';
import Links from '../layouts/Usefullinks';

let year = new Date().getFullYear();


function Footer() {
	return (
		<>
			<Links />
			<footer>
				<small className='footer'>
					&copy; Copyright <b>baddytech</b> {year}
				</small>
			</footer>
		</>
	);
}

export default Footer;