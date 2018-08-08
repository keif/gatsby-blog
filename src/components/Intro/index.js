import React from "react";
import IntroSection from "../../blocks/Intro";
import Link from "../../blocks/Link";
import { Text } from "../../blocks/Common";

const Intro = () => (
  <IntroSection>
    <IntroSection.Wrapper>
      <IntroSection.Heading>WEB DEVELOPER.</IntroSection.Heading>
      <IntroSection.SubHeading>
        TECH AND SCIENCE ENTHUSIAST.
      </IntroSection.SubHeading>
      <Text>
        Usually here you could read that the person is an award wining developer
        or designer. That he is a fullstack ninja rockstar developer able to
        solve all your problems. So if you are looking for one, sorry, you are
        in a wrong place. To be honest, right now, I tend to break more then I
        fix. But that doesn't stop me from being highly motivated and very eager
        to learn. Ever since I was 13 I haven't been able to imagine myself
        doing anything else. I'm currently focussed on improving my React skills
        and building great websites with User Experience in mind.
      </Text>
      <Link to="/about">Read the full bio</Link>
    </IntroSection.Wrapper>
  </IntroSection>
);

export default Intro;
