import style from './footer.module.css';

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div>
				<img className={style.logo} src='assets/images/logo.svg' alt='Logo' />
			</div>
			<p className={style.fade} >Disclaimer: This site is owned and operated by Microsoft Learn Student Ambassadors, Nigeria.</p>
		</footer>
	);
};

export default Footer;
