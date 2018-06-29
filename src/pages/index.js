import React from 'react'
import styled from 'styled-components'
import Intro from '../components/Intro'
import Link from 'gatsby-link'

const Featured = styled.section`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 0.3fr 1fr;
	grid-column-gap: 50px;
	padding: 30px 0;
	@media (max-width: 1200px) {
		padding: 0 15px;
	}

	@media (max-width: 780px) {
		grid-template-columns: 1fr;
		grid-template-rows: 30% 70%;
		grid-row-gap: 30px;
	}
`

const FeaturedContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 100%;
	width: 100%;
	background-color: white;
	box-shadow: 0 0 9px #f2f2f2de;
	border-radius: 20px;

	@media (max-width: 780px) {
		flex-direction: column-reverse;
		margin-bottom: 30px;
	}
`

const FeaturedContent = styled.div`
	max-width: 60%;
	padding: 40px;
	position: relative;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap-reverse;

	@media (max-width: 780px) {
		max-width: 100%;
	}
	h2 {
		margin-bottom: 0;
		max-width: 100%;
	}
	h5 {
		margin: 20px 0;
		color: #cfcfcf;
		font-weight: normal;
	}
	p {
		color: #696969;
		margin-bottom: 20px;
	}
	button {
		position: absolute;
		bottom: 40px;
		border: none;
		border-radius: 20px;
		padding: 10px 25px;
		background-color: #dd390f;
		color: white;
		text-transform: uppercase;
		font-family: 'Raleway', serif;
		letter-spacing: 1px;
		cursor: pointer;
	}
`

const FeaturedLink = styled(Link)`
	color: #dd390f;
`

const FeaturedText = styled.div`
	display: flex;
	flex-direction: column;
	h3 {
		position: relative;
		margin-bottom: 0;
		color: #696969;
		&:after {
			content: '';
			display: block;
			width: 100%;
			height: 3px;
			max-width: 120px;
			background-color: #dd390f;
			margin: 20px 0;
		}
	}
	p {
		color: #696969;
		margin-bottom: 0;
	}
`

const FeaturedImage = styled.div`
	width: 100%;
	border-radius: 0 20px 20px 0;
	@media (max-width: 780px) {
		height: 200px;
		border-radius: 20px 20px 0 0;
		margin-top: -30px;
	}
`

const AllPosts = styled(Link)`
	color: #dd390f;
	border: 1px solid transparent;
	transition: all 0.5s ease-in;
	background: transparent;
	position: relative;
	&:after {
		content: '→';
		font-size: 25px;
		display: inline-block;
		color: #dd390f;
		padding-left: 0.5em;
	}
`

const IndexPage = ({ data }) => (
	<div>
		<Intro />
		<Featured>
			<FeaturedText>
				<h3>Featured article</h3>
				<p>
					Once a month I will publish a featured article. These articles will
					usually tackle subjects I find more meaningful and important.
				</p>
				<AllPosts to="/blog">Read more articles</AllPosts>
			</FeaturedText>
			{data.allMarkdownRemark.edges.map(post => (
				<FeaturedContainer key={post.node.id}>
					<FeaturedContent>
						<FeaturedLink key={post.node.id} to={post.node.frontmatter.path}>
							<h2>{post.node.frontmatter.title}</h2>
						</FeaturedLink>
						<h5>
							Posted on {post.node.frontmatter.date} -{' '}
							{post.node.frontmatter.category}
						</h5>
						<p>{post.node.excerpt}</p>
					</FeaturedContent>
					<FeaturedImage
						style={{
							backgroundImage: `url(${post.node.frontmatter.url}`,
							backgroundSize: 'cover',
						}}
					/>
				</FeaturedContainer>
			))}
		</Featured>
	</div>
)

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			limit: 1
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { featured: { eq: true } } }
		) {
			edges {
				node {
					excerpt(pruneLength: 150)
					id
					frontmatter {
						title
						path
						published
						date
						category
						url
					}
				}
			}
		}
	}
`

export default IndexPage
