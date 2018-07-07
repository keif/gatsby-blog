import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const Intro = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  a {
    align-self: flex-start;
  }
  @media (max-width: 1200px) {
    padding: 0 15px;
  }
`;

const IntroHeading = styled.h1`
  position: relative;
  color: #696969;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    max-width: 120px;
    background-color: #dd390f;
    margin: 20px 0 50px;
  }
`;
const IntroText = styled.p`
  line-height: 1.7em;
  margin-bottom: 1em;
  color: #696969;
`;

const AboutPage = () => (
  <Intro>
    <IntroHeading>About me</IntroHeading>
    <IntroText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </IntroText>
  </Intro>
);

export default AboutPage;
