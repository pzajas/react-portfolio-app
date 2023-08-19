import { FunctionComponent } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { IRootState } from 'typescript/types'

import { setIsMenuVisible } from '@redux/features/booleanSlice'

export const PrimaryNavbar: FunctionComponent = () => {
  const { isMenuVisible } = useSelector((state: IRootState) => state.boolean)
  const dispatch = useDispatch()

  const handleToggleMenu = () => {
    dispatch(setIsMenuVisible(!isMenuVisible))
  }

  return (
    <NavbarContainer>
      <NavbarIcon size={30} onClick={handleToggleMenu} />
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  display: flex;
  width: 100vw;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  /* z-index: 999; */
`

const NavbarIcon = styled(AiOutlineMenu)`
  color: black;
  /* z-index: 999; */
  margin-right: 2rem;
`
