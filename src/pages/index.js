import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/Navigation'

const Intro = styled.section`
	max-height: 535px;
	padding-left: 100px;
	display: flex;
	flex-direction: column;
	background-color: #fcfcfc;
	background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23ececec' fill-opacity='0.6' fill-rule='evenodd'/%3E%3C/svg%3E");
	a {
		align-self: flex-start;
	}
`

const IntroHeading = styled.h1`
	position: relative;
	max-width: 800px;
	margin-bottom: 0;
	color: #dd390f;
`
const IntroSubHeading = styled.h1`
	position: relative;
	max-width: 800px;
	margin-bottom: 0;
	color: #696969;
	&:after {
		content: '';
		display: block;
		width: 160px;
		height: 3px;
		background-color: #dd390f;
		margin-top: 20px;
		margin-bottom: 30px;
	}
`
const IntroText = styled.p`
	max-width: 700px;
	margin-bottom: 0;
	color: #696969;
`

const AllPosts = styled.a`
	color: #dd390f;
	float: right;
	padding: 10px 0;
	border: 1px solid transparent;
	transition: all 0.5s ease-in;
	background: transparent;
	position: relative;
	&:after {
		content: '→';
		font-size: 25px;
		display: inline-block;
		color: #fb5235;
		padding-left: 0.5em;
	}
`

const IndexPage = ({ data }) => (
	<div>
		<Intro>
			<Navigation />
			<IntroHeading>WEB DEVELOPER.</IntroHeading>
			<IntroSubHeading>TECH AND SCIENCE ENTHUSIAST.</IntroSubHeading>
			<IntroText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</IntroText>
			<AllPosts href="/about">Read more</AllPosts>
		</Intro>
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
