import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Header = styled.div`
  margin: 1.45rem 0;
  height: auto;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: normal;
  position: relative;
`;

const Blog = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-column: 3;
  grid-gap: 30px;
  list-style: none;
`;

const BlogContainer = styled.div`
  margin: 60px auto;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1200px) {
    padding: 0 15px;
  }
`;

const BlogItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const BlogDate = styled.span`
  font-size: 0.8em;
`;

const BlogTitle = styled(Link)`
  margin: 0 0 0.5em;
  font-size: 1.5rem;
  color: #fb5235;
  font-weight: bold;
`;

const BlogPage = ({ data }) => (
  <BlogContainer>
    <Title>Blog posts</Title>
    <Header>
      <Blog>
        {data.allMarkdownRemark.edges.map(post => (
          <BlogItem key={post.node.id}>
            <BlogDate>{post.node.frontmatter.date}</BlogDate>
            <BlogTitle key={post.node.id} to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </BlogTitle>
            <p>{post.node.excerpt}</p>
          </BlogItem>
        ))}
      </Blog>
    </Header>
  </BlogContainer>
);

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
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

export default BlogPage;
