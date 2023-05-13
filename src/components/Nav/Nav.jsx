'use client';

import { useState, useCallback } from 'react';
import styles from './nav.module.scss';
import NavList from './NavList';
import { Logo } from '../Logo/Logo';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Nav = () => {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = useCallback(() => {
		setShowMenu((showMenu) => !showMenu);
	}, []);

	return (
		<nav className={styles.navbar}>
			<Logo URL='/' text='Panda<span>Dev</span>' />
			<BurgerMenu handleOnClick={toggleMenu} showMenu = {showMenu} />
			<NavList showMenu={showMenu} toUpperCase={false} />
		</nav>
	);
};

export default Nav;
