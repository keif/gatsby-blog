import React from 'react'
import styled from 'styled-components'

export default function Template({ data }) {
	const { markdownRemark: post } = data

	const BlogPage = styled.div`
		margin: 60px auto;
		max-width: 1200px;
		@media (max-width: 1200px) {
			padding: 0 15px;
		}
	`

	return (
		<BlogPage>
			<h1>{post.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
		</BlogPage>
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
