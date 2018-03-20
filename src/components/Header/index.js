import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const MainHeader = styled.section`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Logo = styled.h1`
  color: white;
  text-decoration: none;
  margin-bottom: 0;
`;

const Header = () => (
 <MainHeader>
  <Wrapper>
    <Logo>Gatsby</Logo>
  </Wrapper>
 </MainHeader>
)

export default Header