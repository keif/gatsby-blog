import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import Navigation from '../Navigation'
import Link from 'gatsby-link'

const MainHeader = styled.section`
	background: white;
	box-shadow: 0px 2px 15px 0px #f2f2f2de;
	z-index: 1;
`

const Wrapper = styled.div`
	height: 100%;
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1200px) {
		padding: 0 15px;
	}
`

const Logo = styled(Link)`
	line-height: 0;
	img {
		width: 30px;
		height: auto;
		margin-bottom: 0;
	}
`

const Header = () => (
	<MainHeader>
		<Wrapper>
			<Logo to="/">
				<img src={logo} alt="Logo" />
			</Logo>
			<Navigation />
		</Wrapper>
	</MainHeader>
)

export default Header
