import { FunctionComponent } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { styled } from 'styled-components'

interface PrimaryNavbarProps {
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const PrimaryNavbar: FunctionComponent<PrimaryNavbarProps> = ({ setIsMenuVisible }) => {
  const handleToggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState)
  }

  return (
    <NavbarContainer>
      <NavbarLogo style={{ fontSize: 20, alignSelf: 'center' }}>Logo</NavbarLogo>

      <NavbarIcon size={30} onClick={handleToggleMenu} />
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  display: flex;
  height: 5vh;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`

const NavbarLogo = styled.p`
  font-size: 20px;
  align-self: center;
`

const NavbarIcon = styled(AiOutlineMenu)`
  color: white;
  align-self: center;
  z-index: 100;
`
