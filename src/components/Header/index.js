import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MainHeader = styled.section`
	background: white;
	margin-bottom: 1.45rem;
	.sticky {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 1;
	}
`

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	padding: 1.45rem 1.0875rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Logo = styled.a`
	color: black;
	text-decoration: none;
	margin-bottom: 0;
	font-weight: bold;
	font-size: 2.25rem;
`

const Navigation = styled.ul`
	list-style: none;
	margin: 0;
	display: flex;
`

const NavigationItem = styled.li`
	margin: 0 10px;
`

const NavigationLink = styled.a`
	color: black;
`

const Header = () => (
	<MainHeader>
		<Wrapper>
			<Logo href="/">si.</Logo>
			<Navigation>
				<NavigationItem>
					<NavigationLink href="/about">About</NavigationLink>
				</NavigationItem>
				<NavigationItem>
					<NavigationLink href="/blog">Blog</NavigationLink>
				</NavigationItem>
			</Navigation>
		</Wrapper>
	</MainHeader>
)

export default Header
