import {styled} from 'styled-components'

import { Menu } from '@components/menus/HamburgerMenu'
import { PrimaryNavbar } from '@components/navbars/PrimaryNavbar'

import HeroSection from './components/sections/HeroSection'

const App = () => {
  return (
    <StyledWebsiteContainer>
      <PrimaryNavbar />
      <HeroSection/>

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
    font-family: "Poppins", sans-serif;
  }
`
