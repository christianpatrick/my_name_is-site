import React from "react";
import Helmet from 'react-helmet';
import Disqus from 'disqus-react';

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data; // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark;

	//load all scripts
	const scripts = frontmatter.scripts.map((script, i) =>
		<script key={i} src={script} defer></script>
	);

	//load comment module
	const disqusShortname = 'christianpatrick';
	const disqusConfig = {
		url: data.site.siteMetadata.siteUrl+frontmatter.path,
		identifier: frontmatter.path,
		title: frontmatter.title
	};

	return (
		<div className="article">
			<Helmet
				title={frontmatter.title+' | '+data.site.siteMetadata.title}
				meta={[
				{ name: 'description', content: html.substring(0, 290).replace(/<[^>]*>/g, '')+'...' }
				]}
			>
				{scripts}
			</Helmet>
			<h1 className="title">{frontmatter.title}</h1>
			<p className="created">{frontmatter.date}</p>
			<div
				className="article-content"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
			<Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
		</div>
	);
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
				scripts
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
