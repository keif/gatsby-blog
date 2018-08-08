import React from "react";
import { Title, Text, Container } from "../blocks/Common";
import Blog from "../blocks/Blog";

const BlogPage = ({ data }) => (
  <Container>
    <Title>Blog posts</Title>
    <Blog>
      {data.allMarkdownRemark.edges.map(post => (
        <Blog.Item key={post.node.id}>
          <Blog.Date>{post.node.frontmatter.date}</Blog.Date>
          <Blog.Title key={post.node.id} to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Blog.Title>
          <p>{post.node.excerpt}</p>
        </Blog.Item>
      ))}
    </Blog>
  </Container>
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
