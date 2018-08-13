import React from "react";
import { Title, Text, Container } from "../blocks/Common";

const AboutPage = () => (
  <Container>
    <Title>About me</Title>
    <Text
      style={{
        maxWidth: "960px"
      }}
    >
      <h4>Hi, I am Stefan.</h4>
      <p>
        I am a Web Developer with a strong focus on performance and
        scale-ability of web applications. I love utilizing User Experience
        research to craft good designs and apply them with code.
      </p>
      <p>
        I take part in the open source community where I can use the latest
        technologies and best practices.
      </p>
      <p>
        With a curious mindset, I talk about science, tech and food. I am
        capable of recalling lines from popular movies at exactly the right time
        for a good comedic moment.
      </p>
      <p>
        I write blog posts and my latest interest is in helping beginners learn
        more about the web.
      </p>
    </Text>
  </Container>
);

export default AboutPage;
