import React from 'react';
import { Link } from 'react-router-dom';
import PricingList from '../../component/pricing-list.jsx';

function PricingListPage(){
	return(
		<section id="pricinglistpage" className="w-full min-h-screen flex flex-col items-center justify-center gap-10 p-2 lg:p-5">
			<PricingList/>
			<Link to="/contact" className="text-2xl border-2 border-black rounded-lg p-3">Interested? Contact Us Now!</Link>
		</section>
		);
};


export default React.memo(PricingListPage);