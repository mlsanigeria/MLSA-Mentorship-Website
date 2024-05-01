import style from './get-started.module.css';
import { useSelector } from 'react-redux';
import SubscriptionForm from '../subscription/SubscriptionForm';

const GetStarted = () => {
    const currentCohort = useSelector(state => state.cohorts.currentCohort);
    const nextCohort = useSelector(state => state.cohorts.nextCohort);

    // Determine whether to render the application form or email subscription section
    const renderApplicationForm = currentCohort?.length > 0;

    // Determine whether currentCohort or nextCohort are available
    const cohortsAvailable = currentCohort?.length > 0 || nextCohort?.length > 0;

	if (!cohortsAvailable) {
		return null;
	}

    return (
        <section className={style.container} id="ApplicationForm">
            {cohortsAvailable && (
				<>
                    <h3 className={style.title}>
                        {renderApplicationForm ? 'Application Form' : 'Get Notified When Applications Reopen'}
                    </h3>
                    {renderApplicationForm ? (
                        <div className={style.formContainer}>
                            <iframe
                                className={style.form}
                                src={currentCohort[0].fields.application_form_link}
                                width="100%"
                                height="700"
                                title="Airtable Form"
                            ></iframe>
                        </div>
                    ) : (
                        // Render email subscription section with SubscriptionForm component
						<SubscriptionForm nextCohortId={nextCohort[0].id} />
                    )}
                </>
            )}
        </section>
    );
};

export default GetStarted;
