import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Header = styled.div`
	margin: 1.45rem 0;
	height: auto;
	width: 100%;
`

const Title = styled.h1`
	font-weight: normal;
	position: relative;
	&:after {
		content: '';
		position: absolute;
		background-color: #fb5235;
		width: 1.2em;
		height: 0.05em;
		bottom: 0.2em;
		left: -1.5em;
	}
`

const Intro = styled.section`
	min-height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 2.5rem 0;
	a {
		align-self: flex-start;
	}
`

const IntroHeading = styled.h1`
	position: relative;
	&:after {
		content: '';
		position: absolute;
		background-color: #fb5235;
		width: 1.2em;
		height: 0.05em;
		bottom: 0.2em;
		left: -1.5em;
	}
`
const IntroText = styled.p`
	max-width: 700px;
	line-height: 1.7em;
	margin-bottom: 1em;
`

const Blog = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
	grid-column: 3;
	grid-gap: 30px;
	list-style: none;
	@media (max-width: 768px) {
		grid-template-columns: auto;
	}
`

const BlogItem = styled.li`
	display: flex;
	flex-direction: column;
`

const BlogDate = styled.span`
	font-size: 0.8em;
`

const BlogTitle = styled.a`
	margin: 0 0 0.5em;
	font-size: 1.5rem;
	color: #fb5235;
	font-weight: bold;
`

const AllPosts = styled.a`
	color: #fb5235;
	float: right;
	padding: 5px 10px 5px 5px;
	border: 1px solid transparent;
	transition: all 0.5s ease-in;
	background: transparent;
	overflow: hidden;
	position: relative;
	&:before {
		content: '→';
		font-size: 25px;
		display: inline-block;
		color: #fb5235;
		padding-right: 0.5em;
	}
`

const IndexPage = ({ data }) => (
	<div>
		<Intro>
			<IntroHeading>FRONTEND DEVELOPER</IntroHeading>
			<IntroText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</IntroText>
			<AllPosts href="/about">
				Read more
			</AllPosts>
		</Intro>
		<Title>Latest blog posts</Title>
		<Header>
			<Blog>
				{data.allMarkdownRemark.edges.map(post => (
					<BlogItem key={post.node.id}>
						<BlogDate>{post.node.frontmatter.date}</BlogDate>
						<BlogTitle key={post.node.id} href={post.node.frontmatter.path}>
							{post.node.frontmatter.title}
						</BlogTitle>
						<p>{post.node.excerpt}</p>
					</BlogItem>
				))}
			</Blog>
		</Header>
		<AllPosts href="/blog">
			Read all posts
		</AllPosts>
	</div>
)

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			limit: 3
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { published: { eq: true } } }
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
					}
				}
			}
		}
	}
`

export default IndexPage
