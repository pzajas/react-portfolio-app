import { styled } from 'styled-components'

import PrimarySection from '@components/layouts/PrimarySection'

const AboutSection = () => {
  return (
    <PrimarySection sectionText="Who is this guy?">
      <StyledParagraph>
        Hey, I am Peter, a passionate frontend developer specializing in the art of React. With an unwavering love for
        crafting interactive digital experiences, I thrive on turning complex ideas into elegant user interfaces. My
        journey in the world of web development began with a fascination for how lines of code could translate into
        captivating visuals. Today, I am on a mission to bring innovation and creativity together, sculpting seamless
        designs that resonate with users. When I am not immersed in the world of code, you can find me exploring the
        latest design trends, seeking inspiration from everyday life, and fueling my creativity one cup of coffee at a
        time.
      </StyledParagraph>
    </PrimarySection>
  )
}

export default AboutSection

const StyledParagraph = styled.p`
  font-size: 1.2rem;
`
