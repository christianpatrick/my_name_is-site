import React from 'react'
import Link from 'gatsby-link'
import logo from '../media/logo.png'

const Header = ({ siteTitle }) => (
	<header>
		<div className="container">
			<div className="col-lg-4 col-md-5 col-sm-6 col-xs-10 pull-left">
				<Link to="/" title={ siteTitle }>
					<img src={logo} alt="Nametag logo with Hello my name is Christian written on it" className="img-responsive" />
				</Link>
			</div>
			<div className="col-lg-8 col-md-7 col-sm-6 col-xs-2 pull-right">
				<nav className="navbar navbar-default">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						</button>
					</div>
					<div className="collapse navbar-collapse pull-right">
						<ul className="nav navbar-nav">
							<li><Link to="/">Development &amp; Random Thoughts</Link></li>
							<li><Link to="/about">About Me</Link></li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</header>
)

export default Header
