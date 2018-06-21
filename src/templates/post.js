import React from 'react'
import Navigation from '../components/Navigation'

export default function Template({ data }) {
	const { markdownRemark: post } = data

	const blogPage = {
		margin: '50px 0 0 100px',
		maxWidth: '960px',
	}

	return (
		<div style={blogPage}>
			<Navigation />
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
