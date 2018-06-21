import React from 'react'
import styled from 'styled-components'

const Navbar = styled.ul`
	list-style: none;
	margin: 50px 0 100px 0;
	display: flex;
	font-family: 'Raleway', sans-serif;
	text-transform: uppercase;
	font-weight: bold;
`

const NavigationItem = styled.li`
	margin-right: 30px;
`

const NavigationLink = styled.a`
	color: #fb5235;
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
