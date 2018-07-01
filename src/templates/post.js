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
		h1,
		h2,
		h3 {
			color: #696969;
		}
		h1 {
			&:after {
				content: '';
				display: block;
				width: 100%;
				height: 3px;
				max-width: 120px;
				background-color: #dd390f;
				margin: 20px auto;
			}
		}
		h2,
		h3 {
			max-width: 960px;
			margin: 40px auto;
		}
	`

	const BlogInfo = styled.div`
		color: #cfcfcf;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
	`
	const BlogInfoDate = styled.span`
		color: #dd390f;
		font-size: 24px;
		margin-bottom: 0px;
	`
	const BlogInfoData = styled.span`
		span {
			margin: 0 10px;
		}
	`
	const BlogText = styled.div`
		h1 {
			text-align: center;
		}
		p {
			max-width: 960px;
			margin: 20px auto;
			color: #696969;
		}
		img {
			width: 100%;
			margin: 0 auto;
		}
	`

	return (
		<div>
			<BlogPage>
				<BlogInfo>
					<BlogInfoDate>{post.frontmatter.date}</BlogInfoDate>
					<BlogInfoData>
						{post.timeToRead} {post.timeToRead > 1 ? 'minutes' : 'minute'} read
						time
						<span>-</span>
						{post.frontmatter.category}
					</BlogInfoData>
				</BlogInfo>
				<BlogText>
					<h1>{post.frontmatter.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
				</BlogText>
			</BlogPage>
		</div>
	)
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			timeToRead
			frontmatter {
				path
				title
				date
				category
			}
		}
	}
`
