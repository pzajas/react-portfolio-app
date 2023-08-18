import { FunctionComponent } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { IRootState } from 'typescript/types'

import { setIsMenuVisible } from '@redux/features/booleanSlice'

export const PrimaryNavbar: FunctionComponent = () => {
  const { isMenuVisible } = useSelector((state: IRootState) => state.boolean)
  const distaptch = useDispatch()

  const handleToggleMenu = () => {
    distaptch(setIsMenuVisible(!isMenuVisible))
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
