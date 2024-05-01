import Arrow from '../arrow/Arrow';
import style from './button.module.css';

const Button = ({ text, type, arrow, link=null }) => {
	return (
		<a className={`${style.button} ${style[type]}`} href={link}>
			{text}
			{arrow && <Arrow />}
		</a>
	);
};

export default Button;
