import { Logo } from '../molecules/Logo/Logo';
import { MenuList } from '../molecules/MenuList/MenuList';
const Nav = () => {
	return (
		<nav>
			<Logo />
			<MenuList />
			Navigation{' '}
		</nav>
	);
};

export default Nav;
