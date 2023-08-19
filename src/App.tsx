import { styled } from 'styled-components'

import { Menu } from '@components/menus/HamburgerMenu'
import { PrimaryNavbar } from '@components/navbars/PrimaryNavbar'

import { AboutSection, ContactSection, FooterSection, HeroSection, SkillSection } from './components/sections/xindex'

const App = () => {
  return (
    <StyledWebsiteContainer>
      <PrimaryNavbar />

      <HeroSectionWrapper>
        <HeroSection />
      </HeroSectionWrapper>

      <ContentContainer>
        <AboutSection />
        <SkillSection />
        <ContactSection />
        <FooterSection />
      </ContentContainer>

      <Menu />
    </StyledWebsiteContainer>
  )
}

export default App

const StyledWebsiteContainer = styled.div`
  position: relative;
  padding: 0;
  margin-right: 0;
  box-sizing: border-box;
  min-height: 100vh;
  scroll & * {
    font-family: 'Poppins', sans-serif;
  }
`

const HeroSectionWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1; /* Ensure HeroSection is above other content */
`

const ContentContainer = styled.div`
  background-color: #181818;
  margin-top: 100vh; /* Offset the space occupied by HeroSection */
`
