import React from 'react';

const Footer = () => {
	return (
		<footer className='page-footer'>
			<p>&copy;
				<span> {new Date().getFullYear()} Buit with <a href="https://www.gatsbyjs.com/">Gatsby</a></span>
			</p>
		</footer>
	)
}
export default Footer