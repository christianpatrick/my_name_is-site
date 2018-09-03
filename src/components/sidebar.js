import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import headshot from '../media/christianhelvin.jpg'

const Sidebar = () => (
	<div>
		<Helmet>
			<script async defer src="https://buttons.github.io/buttons.js"></script>
			<script async defer src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</Helmet>

		<aside id="right" className="col-md-3 col-sm-4 pull-right">
			<h3>Christian Helvin</h3>
			<p><img src={headshot} alt="A smiling headshot of Christian Helvin" className="img-thumbnail" /></p>
			<p>Code. This is one thing I love! Here's a place to store my random ideas, code collections and things I have built.</p>
			<p className="text-center"><Link className="github-button" to="https://github.com/christianpatrick" data-style="mega" aria-label="Follow @christianpatrick on GitHub">Follow @christianpatrick</Link></p>
			<p className="text-center"><Link className="twitter-timeline" data-height="400" data-theme="light" to="https://twitter.com/PHPWarrior?ref_src=twsrc%5Etfw">Tweets by PHPWarrior</Link></p>
		</aside>
	</div>
)

export default Sidebar
