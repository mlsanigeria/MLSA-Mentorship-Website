import { useState, useEffect } from 'react';
import airtableBase from '../../api/utils';
import SectionTitle from '../section-title/SectionTitle';
import style from './testimonials.module.css';
import TestimonialsSkeleton from '../../skeletons/testimonials/testimonialSkeleton';

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState([]);
	const baseID = import.meta.env.VITE_AIRTABLE_MLSA_MP_BASE_ID;
	const tableID = 'tblA7dLgadtVe1SHE';
	const table = airtableBase(baseID)(tableID);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const fetchTestimonials = () => {
		  const publishedTestimonials = [];
		  table
			.select({
			  filterByFormula: '{Status} = "published"',
			})
			.eachPage(
			  (records, fetchNextPage) => {
				records.forEach((record) => {
				  publishedTestimonials.push(record.fields);
				});
				fetchNextPage();
			  },
			  (err) => {
				if (err) {
				  console.error(err);
				  setIsLoading(false);
				  return;
				}
				setTestimonials(publishedTestimonials);
				setIsLoading(false);
			  }
			);
		};
		fetchTestimonials();
	}, []);

	if (isLoading) return <TestimonialsSkeleton />;

	return (
		<section className={style.testimonials}>
			<SectionTitle margin={'large'}>
				Sound too good? Hear from previous Mentees
			</SectionTitle>
			<div className={style.grid}>
				{testimonials.map(item => {
					return (
						<article key={item.id} className={style.card}>
							{/* <img className={style.avatar} src={item.img} alt={item.name} /> */}
							<p className={style.text}>{item.Notes}</p>
							<p className={style.author}>
								{item.Name}
							</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Testimonials;
