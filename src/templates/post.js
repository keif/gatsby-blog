import React from "react";
import BlogPage from "../blocks/Post";

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div>
      <BlogPage>
        <BlogPage.Info>
          <BlogPage.Date>{post.frontmatter.date}</BlogPage.Date>
          <BlogPage.Data>
            {post.timeToRead} {post.timeToRead > 1 ? "minutes" : "minute"} read
            time
            <span>-</span>
            {post.frontmatter.category}
          </BlogPage.Data>
        </BlogPage.Info>
        <BlogPage.Text>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </BlogPage.Text>
      </BlogPage>
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        path
        title
        date
        category
      }
    }
  }
`;
