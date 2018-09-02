import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const AboutPage = () => (
	<div>
		<h1>About Me</h1>
		<p>I code, play music, love my wife and run a creative agency: <OutboundLink href="https://www.ignitehere.com" target="_blank">Ignite</OutboundLink>.</p>
	</div>
)

export default AboutPage
