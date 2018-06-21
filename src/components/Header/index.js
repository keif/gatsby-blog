import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'

const MainHeader = styled.section`
	background: #dd390f;
`

const Wrapper = styled.div`
	max-width: 960px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Logo = styled.a`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 30px;
		height: 20px;
		margin: 60px 0;
	}
`

const Header = () => (
	<MainHeader>
		<Wrapper>
			<Logo href="/">
				<img src={logo} alt="Logo" />
			</Logo>
		</Wrapper>
	</MainHeader>
)

export default Header
