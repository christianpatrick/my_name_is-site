import React from 'react'
import Link from 'gatsby-link'
import { Button, Container, Grid, Icon, Image } from 'semantic-ui-react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import logo from '../media/logo.png'

const Header = ({ siteTitle }) => (
	<header>
		<Container>
			<Grid verticalAlign='middle'>
				<Grid.Column mobile={10} tablet={7} computer={5}>
					<Link to="/" title={ siteTitle }>
						<Image src={logo} alt="Nametag logo with Hello my name is Christian written on it" fluid />
					</Link>
				</Grid.Column>
				<Grid.Column mobile={5} tablet={8} computer={10} textAlign="right" className="theme_toggle">
					<ThemeToggler>
						{({ theme, toggleTheme }) => (
							<Button.Group>
								<Button
									icon
									onClick={e => toggleTheme('light')}
									className={theme === 'light' ? 'active': null}
								>
									<Icon name="sun" />
								</Button>
								<Button
									icon
									onClick={e => toggleTheme('dark')}
									className={theme === 'dark' ? 'active': null}
								>
									<Icon name="moon" />
								</Button>
							</Button.Group>
						)}
					</ThemeToggler>
				</Grid.Column>
			</Grid>
		</Container>
	</header>
)

export default Header
