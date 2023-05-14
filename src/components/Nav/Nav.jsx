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
	const closeNav = useCallback(() => {
		setShowMenu(false);
	}, []);

	return (
		<nav className={styles.navbar}>
			<Logo URL='/' text='Panda<span>Dev</span>' />
			<div className={styles.icons}>
				<button></button>
				<BurgerMenu handleOnClick={toggleMenu} showMenu={showMenu} />
			</div>
			<NavList
				showMenu={showMenu}
				handleOnClick={closeNav}
				toUpperCase={false}
			/>
		</nav>
	);
};

export default Nav;
