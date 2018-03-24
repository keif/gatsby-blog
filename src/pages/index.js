import React from 'react';
import Link from 'gatsby-link';
import Helmet from "react-helmet";
import styled from "styled-components";


const Header = styled.div`
  margin: 1.45rem 0;
  height: auto;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: normal;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    background-color: #FB5235;
    width: 1.2em;
    height: .05em;
    bottom: .2em;
    left: -1.5em;
  }
`

const Blog = styled.div`
  display: flex;
  list-style: none;
  margin: 0 -1em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  span {
    font-size: .8em;
  }
  li {
    display: flex;
    flex-direction: column;
    margin: 0 1em;
    @media (max-width: 768px) {
      margin: 1em;
    }
  }
  a {
    margin: 0 0 .5em;
    font-size: 1.5rem;
    color: #FB5235;
    font-weight: bold;
  }
`

const IndexPage = ({data}) => (
  <div>
    <Title>Latest blog posts</Title>
    <Header>
      <Blog>
        {data.allMarkdownRemark.edges.map(post => (
          <li key = {post.node.id}>
            <span>{post.node.frontmatter.date}</span>
            <Link
              key = {post.node.id}
              to = {post.node.frontmatter.path} >
              {post.node.frontmatter.title}
            </Link>
            <p>{post.node.excerpt}</p>
          </li>
        ))}
      </Blog>
    </Header>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark (
      limit: 10
      sort: {fields:[frontmatter___date], order: DESC}
      filter:{frontmatter:{published:{eq: true}}}
    ){
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
`;

export default IndexPage
