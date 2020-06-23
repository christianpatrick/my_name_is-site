import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data; // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark;

	return (
		<Layout>
			<Helmet
				title={frontmatter.title+' | '+data.site.siteMetadata.title}
				meta={[
				{ name: 'description', content: html.substring(0, 290).replace(/<[^>]*>/g, '')+'...' }
				]}
			/>
			<h1 className="title">{frontmatter.title}</h1>
			<p className="created">{frontmatter.date}</p>
			<div
				className="article-content"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</Layout>
	)
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				tags
			}
		},
		site {
			siteMetadata {
				title
				siteUrl
			}
		}
	}
`;
