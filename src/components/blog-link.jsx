import React from "react";
import Link from "gatsby-link";
import { Divider, List } from 'semantic-ui-react'

const BlogLink = ({ post }) => (

	<List.Item>
		<List.Content>
			<List.Header as="h2" className="title">
				<Link to={post.frontmatter.path}>
					{post.frontmatter.title}
				</Link>
			</List.Header>
			<List.Description as="p" className="created">
				{post.frontmatter.date}
			</List.Description>

			<p className="excerpt">
				{post.excerpt}
				<Link className="excerpt_link" to={post.frontmatter.path}>
					continue reading
				</Link>
			</p>
			<Divider hidden />
		</List.Content>
	</List.Item>
);

export default BlogLink;
