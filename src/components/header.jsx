import React from 'react'
import Link from 'gatsby-link'
import { Container, Grid, Image } from 'semantic-ui-react'

import logo from '../media/logo.png'

const Header = ({ siteTitle }) => (
	<header>
		<Container>
			<Grid stackable>
				<Grid.Column width={6}>
					<Link to="/" title={ siteTitle }>
						<Image src={logo} alt="Nametag logo with Hello my name is Christian written on it" fluid />
					</Link>
				</Grid.Column>
			</Grid>
		</Container>
	</header>
)

export default Header
