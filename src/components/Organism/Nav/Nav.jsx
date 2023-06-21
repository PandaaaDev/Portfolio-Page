'use client';

import { useState, useCallback } from 'react';
import styles from './Nav.module.scss';
import NavList from '@/components/Molecules/NavList/NavList';
// import NavList from './NavList';
import { Logo } from '@/components/Atoms/Logo/Logo';
import BurgerButton from '@/components/Atoms/Buttons/BurgerButton/BurgerButton';

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
				<BurgerButton handleOnClick={toggleMenu} showMenu={showMenu} />
				<NavList
					showMenu={showMenu}
					handleOnClick={closeNav}
					toUpperCase={false}
				/>
			</div>
		</nav>
	);
};

export default Nav;
