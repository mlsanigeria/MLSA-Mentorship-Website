import Button from '../button/Button';
import style from './hero.module.css';
import { useSelector } from 'react-redux';

const Hero = () => {
    // Redux biz starts here
    const currentCohort = useSelector(state => state.cohorts.currentCohort);
    const nextCohort = useSelector(state => state.cohorts.nextCohort);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <section className={style.hero}>
            <div className={style.heroContent}>
                <p className={style.metalButton}>
                    Becoming a Student Ambassador.{' '}
                    <a href='https://mvp.microsoft.com/studentambassadors' className={style.metalButtonLink}>
                        Learn More <span className={style.arrowLink}>{'->'}</span>
                    </a>
                </p>
                <h1 className={style.heroTitle}>
                    MLSA Mentorship Program
                </h1>
                <p className={style.heroText}>
                    The Microsoft Learn Student Ambassadors Mentorship Program is an 8-week program designed to empower you to become the right Student Ambassador for yourself and your community. 
                </p>
                <ul className={style.list}>
                    {/* Render button if currentCohort is available, otherwise check if nextCohort is available and show next cohort, otherwise revert to a fallback */}
                    {currentCohort?.length > 0 ? (
                        <li>
                            <Button text={'Apply Now'} type={'accent'} arrow={true} link='#ApplicationForm' />
							<p className={style.infoBoxTitle}>Applications close on {formatDate(currentCohort[0].fields.application_end_date)}</p>
                        </li>
                    ) : nextCohort?.length > 0 ? (
                        <li>
							<Button text={'Get Notified of Application Status'} type={'regular'} arrow={true} link='#ApplicationForm' />
                            <p className={style.infoBoxTitle}>Applications reopen on {formatDate(nextCohort[0].fields.application_start_date)}</p>
                        </li>
                    ) : (
                        <li>
                            <p className={style.infoBoxTitle}>Applications are currently closed</p>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Hero;
