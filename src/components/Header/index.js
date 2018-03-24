import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MainHeader = styled.section`
	background: rebeccapurple;
	margin-bottom: 1.45rem;
`

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	padding: 1.45rem 1.0875rem;
`

const Logo = styled.a`
	color: white;
	text-decoration: none;
	margin-bottom: 0;
	font-weight: bold;
	font-size: 2.25rem;
`

const Header = () => (
	<MainHeader>
		<Wrapper>
			<Logo href="/">Gatsby</Logo>
		</Wrapper>
	</MainHeader>
)

export default Header
