import React from 'react'
import styled from 'styled-components'

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

const NavigationLink = styled.a`
	color: #dd390f;
`
const Navigation = () => (
	<Navbar>
		<NavigationItem>
			<NavigationLink href="/about">About</NavigationLink>
		</NavigationItem>
		<NavigationItem>
			<NavigationLink href="/blog">Blog</NavigationLink>
		</NavigationItem>
	</Navbar>
)

export default Navigation
