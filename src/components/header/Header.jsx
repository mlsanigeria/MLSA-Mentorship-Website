import Button from '../button/Button';
import style from './header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<nav className={style.nav}>
				<img className={style.logo} src='assets/images/logo.svg' alt='Logo' />
				<ul className={style.list}>

					<li>
						<Button text={'Who are we?'} type={'regular'} arrow={false} link={'https://mlsa.ng'} />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
