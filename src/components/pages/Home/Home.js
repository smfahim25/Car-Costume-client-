import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import HomeReview from './HomeReview';
import Offer from './Offer';

import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <HomeReview></HomeReview>
            <Offer></Offer>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;