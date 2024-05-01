import { useState } from 'react';
import airtableBase from '../../api/utils';
import style from './subscription-form.module.css';

const SubscriptionForm = ({ nextCohortId }) => {
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const showSubmitted = () => {
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 2000);
    }

    const handleSubmit = async event => {
        event.preventDefault();

        // Prevent multiple submissions while waiting for the response
        if (submitting) return;

        setSubmitting(true);

        try {
            // Add email to Airtable
            const baseID = import.meta.env.VITE_AIRTABLE_MLSA_MP_BASE_ID;
            const tableID = 'tbls4RTVhgwZrAROU';
            const table = airtableBase(baseID)(tableID);

            // Prepare the data to be inserted
            const fields = {
                Email: email,
                Cohort: [nextCohortId],
            };

            await table.create([{ fields }]);

            // Reset the form fields after successful submission
            setEmail('');
            showSubmitted()
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className={style.container}>
            {submitted ? (
                <p className={style.success}>You have been successfully subscribed!</p>
            ) : 
                <form onSubmit={handleSubmit} className={style.form}>
                    <input
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        className={style.input}
                        required
                    />
                    <button type="submit" className={style.button}>
                        {submitting ? <Loader className={style.loader} /> : 'Submit'}
                    </button>
                </form>
            }
        </div>
    );
};

const Loader = ({ className }) => (
    <div className={className}>
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231   0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475   2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464    1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
          stroke="white"
        />
      </svg>
    </div>
  )

export default SubscriptionForm;
