import React from 'react'
import Link from 'gatsby-link'
import Image from 'react-bootstrap/Image'

import logo from '../media/logo.png'

const Header = ({ siteTitle }) => (
	<header>
		<div className="container">
			<Link to="/" title={ siteTitle }>
				<Image src={logo} alt="Nametag logo with Hello my name is Christian written on it" fluid />
			</Link>
		</div>
	</header>
)

export default Header
