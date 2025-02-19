import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
          My name is Adigun Daniel 
        </SectionTitle>
        <SectionText>
         I am a web 3.0 Full Stack Developer with 2 years of experience and I design sleek, high-performance 
         Web3 websites for visionary founders.
        🚀Ready to elevate your project and team? Let's make it happen!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
        {/* put a resume link here */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;