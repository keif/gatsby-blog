import React from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet"


const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li>
          <Link
            key = {post.node.id}
            to = {post.node.frontmatter.path} >
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
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
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            path
            published
          }
        }
      }
    }
  }
`;

export default IndexPage
