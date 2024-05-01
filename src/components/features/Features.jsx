import { FEATURES } from '../../constants/features';
import { LOGOS } from '../../constants/logos';
import SectionTitle from '../section-title/SectionTitle';
import SectionSubtitle from '../section-subtitle/SectionSubtitle';
import style from './features.module.css';

const Features = () => {
	return (
		<section className={style.features}>
			<div className={style.featuresHeader}>
				<SectionSubtitle content={'Our Student Ambassadors work(ed) at;'} className={style.logosText} />
			</div>
			<div className={style.logosGrid}>
				{LOGOS.map(item => {
					return <img key={item.id} src={item.src} />;
				})}
			</div>
			<SectionTitle margin={'large'}>
				Empowering you to become a Force for Good
			</SectionTitle>
			<div className={style.videoContainer}>
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/3vnAJ1B2uLc'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
			<div className={style.featuresGrid}>
				{FEATURES.map(item => {
					return (
						<article key={item.id} className={style.featuresCard}>
							<img src={item.icon} />
							<h3>{item.title}</h3>
							<p>{item.body}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Features;
