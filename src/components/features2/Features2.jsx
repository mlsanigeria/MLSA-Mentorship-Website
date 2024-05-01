import SectionSubtitle from '../section-subtitle/SectionSubtitle';
import SectionTitle from '../section-title/SectionTitle';
import style from './features2.module.css';

const Features2 = () => {
	return (
		<section className={style.features}>
			<div className={style.featuresContent}>
				<div className={style.heading}>
					<SectionTitle margin={'small'}>
					Become a Microsoft Learn Student Ambassador
					</SectionTitle>
					<SectionSubtitle
						content='Take a Structured Path to Success by Joining the Microsoft Learn Student Ambassador Program through the Mentorship Program.'
					/>
				</div>
				<article className={style.twoCols}>
					<div>
						<img src='/assets/images/mlsa_milestones.gif' alt='Features' />
					</div>
					<div>
						<h3 className={style.articleTitle}>
							Building Future Tech Leaders
						</h3>
						<p className={style.text}>
							The MLSA Mentorship program is designed to equip you with the knowledge, skills, and confidence to become a successful Microsoft Learn Student Ambassador. It offers you a structured program with clear milestones to guide you on your journey.
						</p>
						<ul>
							<li className={style.listItem}>Access a series of online modules covering all aspects of the MLSA role, from technical skills to community management.</li>
							<li className={style.listItem}>Get paired with a dedicated mentor who will provide personalized guidance and support throughout each program stage.</li>
							<li className={style.listItem}>Track your progress through regular reviews with your mentor, ensuring you stay on track and achieve your goals.</li>
						</ul>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Features2;
