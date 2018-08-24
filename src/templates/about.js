import React from "react";
import { graphql } from "gatsby";
import Common from "../blocks/Common";
import Layout from "../components/layout";

// const AboutPage = () => (
//   <Layout>
//     <Common.Container>
//       <Common.Title>About me</Common.Title>
//       <Common.Text
//         style={{
//           maxWidth: "960px"
//         }}
//       >
//         <h4>Hi, I am Stefan.</h4>
//         <p>
//           I am a Web Developer with a strong focus on performance and
//           scale-ability of web applications. I love utilizing User Experience
//           research to craft good designs and apply them with code.
//         </p>
//         <p>
//           I take part in the open source community where I can use the latest
//           technologies and best practices.
//         </p>
//         <p>
//           With a curious mindset, I talk about science, tech and food. I am
//           capable of recalling lines from popular movies at exactly the right
//           time for a good comedic moment.
//         </p>
//         <p>
//           I write blog posts and my latest interest is in helping beginners
//           learn more about the web.
//         </p>
//       </Common.Text>
//     </Common.Container>
//   </Layout>
// );

// export default AboutPage;
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
