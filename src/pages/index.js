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
	&:hover {
		border: 1px solid #fb5235;
	}
	&:before {
		content: '→';
		font-size: 25px;
		display: inline-block;
		color: #fb5235;
		padding-right: 0.5em;
	}

	.mask {
		position: absolute;
		display: block;
		width: 200px;
		height: 100px;
		-webkit-transform: translate3d(-120%, -50px, 0) rotate3d(0, 0, 1, 45deg);
		transform: translate3d(-120%, -50px, 0) rotate3d(0, 0, 1, 45deg);
		transition: all 3s cubic-bezier(0.19, 1, 0.8, 1);
	}
	&:hover .mask {
		background: rgba(251, 82, 53, 0.3);
		-webkit-transform: translate3d(120%, -100px, 0) rotate3d(0, 0, 1, 90deg);
		transform: translate3d(120%, -100px, 0) rotate3d(0, 0, 1, 90deg);
	}
`

const IndexPage = ({ data }) => (
	<div>
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
			<div className="mask" />
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
