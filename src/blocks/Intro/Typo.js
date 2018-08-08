import styled from "styled-components";

const IntroHeading = styled.h1`
  position: relative;
  max-width: 800px;
  margin-bottom: 0;
  color: #dd390f;
`;
const IntroSubHeading = styled.h1`
  position: relative;
  max-width: 800px;
  margin-bottom: 0;
  color: #696969;
  &:after {
    content: "";
    display: block;
    width: 160px;
    height: 3px;
    background-color: #dd390f;
    margin: 30px 0;
  }
`;
export default { IntroHeading, IntroSubHeading };
