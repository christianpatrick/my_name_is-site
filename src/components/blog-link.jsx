import React from "react";
import Link from "gatsby-link";

const BlogLink = ({ post }) => (

	<div className="item">

		<h2 className="title">
			<Link to={post.frontmatter.path}>
				{post.frontmatter.title}
			</Link>
		</h2>

		<p className="created">
			 {post.frontmatter.date}
		</p>

		<p>{post.excerpt}</p>

		<p className="readmore">
			<Link to={post.frontmatter.path}>
				Read more...
			</Link>
		</p>

	</div>
);

export default BlogLink;
