import React from 'react'

export default function Template({ data }) {
	const { markdownRemark: post } = data

	const blogPage = {
		margin: '60px auto',
		maxWidth: '1200px',
	}

	return (
		<div style={blogPage}>
			<h1>{post.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
		</div>
	)
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
			}
		}
	}
`
