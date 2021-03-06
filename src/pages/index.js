import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import Intro from "../components/Intro";
import Links from "../blocks/Link";
import Featured from "../blocks/Featured";

const IndexPage = ({ data }) => (
  <Layout>
    <Intro />
    <Featured>
      <Featured.Text>
        <h3>Featured article</h3>
        <p>
          Once a month I will publish a featured article. These articles will
          usually tackle subjects I find more meaningful and important.
        </p>
        <Links to="/blog">Read more articles</Links>
      </Featured.Text>
      {data.allMarkdownRemark.edges.map(post => (
        <Featured.Container key={post.node.id}>
          <Featured.Content>
            <Featured.Link key={post.node.id} to={post.node.frontmatter.path}>
              <h2>{post.node.frontmatter.title}</h2>
            </Featured.Link>
            <h5>
              Posted on {post.node.frontmatter.date} -{" "}
              {post.node.frontmatter.category}
            </h5>
            <p>{post.node.excerpt}</p>
          </Featured.Content>
          <Featured.Image
            style={{
              backgroundImage: `url(${post.node.frontmatter.url})`,
              backgroundSize: "cover"
            }}
          />
        </Featured.Container>
      ))}
    </Featured>
  </Layout>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          frontmatter {
            title
            path
            published
            date
            category
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
