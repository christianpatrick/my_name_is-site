import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

import headshot from '../media/christianhelvin.jpg'
import GitHubButton from 'react-github-btn'
import { Timeline } from 'react-twitter-widgets'

const Sidebar = () => (
		<aside id="right">
			<Image src={headshot} alt="A smiling headshot of Christian Helvin" bordered fluid rounded />
			<h2>Christian Helvin</h2>
			<h3>Code and Music.</h3>
			<p>Two things I love! Here's a place to store my random ideas, code collections, and things I've built.</p>
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
								height: '400'
							}}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</aside>
)

export default Sidebar
