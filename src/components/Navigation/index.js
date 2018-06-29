import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Navbar = styled.ul`
	list-style: none;
	display: flex;
	font-family: 'Raleway', sans-serif;
	text-transform: uppercase;
	font-weight: bold;
	margin: 0;
`

const NavigationItem = styled.li`
	margin: 0 30px 0 0;
	&:last-child {
		margin-right: 0;
	}
`

const NavigationLink = styled(Link)`
	color: #dd390f;
`
const Navigation = () => (
	<Navbar>
		<NavigationItem>
			<NavigationLink to="/about">About</NavigationLink>
		</NavigationItem>
		<NavigationItem>
			<NavigationLink to="/blog">Blog</NavigationLink>
		</NavigationItem>
	</Navbar>
)

export default Navigation
