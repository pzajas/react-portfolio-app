import { styled } from 'styled-components'

interface SideMenuProps {
  isMenuVisible: boolean
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const Menu = ({ isMenuVisible, setIsMenuVisible }: SideMenuProps) => {
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  return <SideMenu setIsMenuVisible={setIsMenuVisible} isMenuVisible={isMenuVisible} onClick={toggleMenu} />
}

const SideMenu = styled.nav<SideMenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  background-color: #252525;
  transition: transform 0.4s;

  transform: translateX(${(props) => (props.isMenuVisible ? '0' : '100%')});
`
