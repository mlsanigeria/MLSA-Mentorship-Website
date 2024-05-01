import Features from '../features/Features';
import Features2 from '../features2/Features2';
import Footer from '../footer/Footer';
import GetStarted from '../get-started/GetStarted';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import airtableBase from '../../api/utils';
import { updateCohorts } from '../../store/cohortSlice';
import Testimonials from '../testimonials/Testimonials';

const MainContainer = () => {
    const dispatch = useDispatch();
    const baseID = import.meta.env.VITE_AIRTABLE_MLSA_MP_BASE_ID;
    const tableID = 'tblGhWAEpby8u9cuz';
    const table = airtableBase(baseID)(tableID);

    useEffect(() => {
        const fetchCohorts = async () => {
            try {
                const allCohorts = [];

                await table.select({
                    filterByFormula: '{visibility} = "public"',
                }).eachPage((records, fetchNextPage) => {
                    records.forEach(record => {
                        allCohorts.push(record._rawJson);
                    });
                    fetchNextPage();
                });

                dispatch(updateCohorts({ cohorts: allCohorts }));
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchCohorts();
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Features2 />
            <Testimonials />
            <GetStarted />
            <Footer />
        </div>
    );
};

export default MainContainer;
