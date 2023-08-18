import { styled } from 'styled-components'

import { Menu } from '@components/menus/HamburgerMenu'
import { PrimaryNavbar } from '@components/navbars/PrimaryNavbar'

import {
  AboutSection,
  ContactSection,
  FooterSection,
  HeroSection,
  ProjectSection,
  SkillSection,
} from './components/sections/xindex'

const App = () => {
  return (
    <StyledWebsiteContainer>
      <PrimaryNavbar />

      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />

      <Menu />
    </StyledWebsiteContainer>
  )
}

export default App

const StyledWebsiteContainer = styled.div`
  padding: 0;
  margin-right: 0;
  box-sizing: border-box;
  height: 100vh;

  & * {
    font-family: 'Poppins', sans-serif;
  }
`
