import React from 'react'
import { Image, Grid } from 'semantic-ui-react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import headshot from '../media/christianhelvin.jpg'
import GitHubButton from 'react-github-btn'
import { Timeline } from 'react-twitter-widgets'

const Sidebar = () => (
	<aside id="right">
		<Image src={headshot} alt="A smiling headshot of Christian Helvin" bordered fluid rounded />
		<h2>Christian Helvin</h2>
		<h3>Full-Stack Nerd</h3>
		<p>I'm a full-stack engineer at <OutboundLink href="https://www.breezechms.com/" target="_blank">Breeze</OutboundLink> and talk to myself throughout the day while throwing code on the screen. I'm passionate about encouraging a positive remote work culture, implementing good testing practices, and programming just for fun. In my free time, you'll find me trucking on American Truck Simulator and catching up on the latest nerdy podcasts. I lives with my wonderful wife and two dogs in Pensacola, Florida.</p>
		<Grid textAlign="center">
			<Grid.Row>
				<Grid.Column>
					<GitHubButton href="https://github.com/christianpatrick">
						Follow @christianpatrick
					</GitHubButton>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<Timeline
						dataSource={{
							sourceType: 'profile',
							screenName: 'phpwarrior'
						}}
						options={{
							username: 'PHPWarrior',
							height: '400',
							theme: 'dark'
						}}
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</aside>
)

export default Sidebar
