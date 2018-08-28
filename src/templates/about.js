import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Common from "../blocks/Common";
import Layout from "../components/layout";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Common.Container>
        <Common.Title>{frontmatter.title}</Common.Title>
        <Common.Text
          style={{
            maxWidth: "960px"
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Common.Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
