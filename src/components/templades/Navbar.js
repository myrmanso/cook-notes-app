import React from 'react'
import Ancor from '../moleculas/Ancor';
import SearchRecipes from '../organismos/SearchRecipes';

import LogoIcon from '../../assets/icons/logoIcon';
import UserIcon from '../../assets/icons/userIcon';
import PlusIcon from '../../assets/icons/plusIcon';

const Navbar = ({ handleSearch, showSearch }) => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <Ancor
        href='/'
        className="navbar__navigation__ancor-logo"
      >
        <LogoIcon width="50" height="50" />
      </Ancor>
      <Ancor
        href='/'
        className="navbar__navigation__link-to-page"
      >
        Início
      </Ancor>
      {showSearch && <SearchRecipes handleSearch={handleSearch} />}
      <Ancor
        href='/recipe'
        className="navbar__navigation__plus-icon"
      >
        <PlusIcon />
      </Ancor>
      <Ancor
        href='/'
        className="navbar__navigation__user-icon"
      >
        <UserIcon />
      </Ancor>
      <Ancor
        href='/'
        className="navbar__navigation__link-to-page"
      >
        Sair
      </Ancor>
    </nav>
  </header>
);

export default Navbar;
