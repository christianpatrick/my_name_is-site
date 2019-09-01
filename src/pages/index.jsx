import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { List } from 'semantic-ui-react'

import Layout from '../components/layout'
import BlogLink from '../components/blog-link'

export default ({ data }) => (
	<StaticQuery
		query={graphql`
			query {
				graph: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
					edges {
						node {
							id
							excerpt(pruneLength: 250)
							frontmatter {
								date(formatString: "MMMM DD, YYYY")
								path
								title
							}
						}
					}
				}
			}
		`}
		render={data => (
			<Layout>
				<List relaxed>
					{data.graph.edges.map(({ node }) => (
						<BlogLink 
							key={node.id}
							post={node}
						/>
					))}
				</List>
			</Layout>
		)}
	/>
)
