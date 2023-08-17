import { useState } from 'react'
import { PrimaryNavbar } from '@components/navbars/PrimaryNavbar'
import { Menu } from '@components/menus/HamburgerMenu'

const App = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <div>
      <PrimaryNavbar setIsMenuVisible={setIsMenuVisible} />
      <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
    </div>
  )
}

export default App
