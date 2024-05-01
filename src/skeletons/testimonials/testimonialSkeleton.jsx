import SectionTitle from '../../components/section-title/SectionTitle';
import style from './testimonialSkeleton.module.css';

const TestimonialsSkeleton = () => {
  return (
    <section className={style.testimonials}>
      <SectionTitle margin={'large'}>
        Sound too good? Hear from previous Mentees
      </SectionTitle>
      <div className={style.grid}>
        {[1, 2, 3].map((item) => (
          <article key={item} className={style.cardSkeleton}>
            <div className={style.avatarSkeleton}></div>
            <p className={style.textSkeleton}></p>
            <p className={style.authorSkeleton}></p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSkeleton;
