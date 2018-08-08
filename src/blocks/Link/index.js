import styled from "styled-components";
import link from "gatsby-link";

const Link = styled(link)`
  color: #dd390f;
  float: right;
  padding: 10px 0;
  border: 1px solid transparent;
  transition: all 0.5s ease-in;
  background: transparent;
  position: relative;
  &:after {
    content: "→";
    font-size: 25px;
    display: inline-block;
    color: #dd390f;
    padding-left: 0.5em;
  }
`;

export default Link;
