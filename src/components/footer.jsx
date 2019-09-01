import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Container, Divider } from 'semantic-ui-react'

const Footer = () => (

	<footer id="footer">
		<Container text>
			<Divider />
			Built with &hearts; by Christian on <OutboundLink href="https://gatsbyjs.org" target="_blank">GatsbyJS</OutboundLink>.
			<Divider hidden />
		</Container>
	</footer>
)

export default Footer
