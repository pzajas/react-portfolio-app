import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { IRootState } from 'typescript/types';

import { setIsMenuVisible } from '@redux/features/booleanSlice';

interface SideMenuProps {
  isMenuVisible: boolean
}

export const Menu = () => {
  const { isMenuVisible } = useSelector((state: IRootState) => state.boolean);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(setIsMenuVisible(!isMenuVisible));
  };

  return <SideMenu isMenuVisible={isMenuVisible} onClick={toggleMenu}></SideMenu>;
};

const SideMenu = styled.nav<SideMenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  background-color: #252525;
  transition: transform 0.4s;
  transform: translateX(${(props) => (props.isMenuVisible ? '0' : '100%')});

  z-index: 500;
`;

export default Menu;
