import React from 'react';
import AboutUs from '../../component/aboutus.jsx';
import OurServices from '../../component/our-services.jsx';
import Introduction from '../../component/introduction.jsx';

function AboutUsPage(){
	return(
		<section id="aboutuspage" className="flex flex-col w-full h-auto gap-2 p-2 border-2">
			<Introduction/>
			<AboutUs/>
			<OurServices/>
		</section>
		);
}

export default React.memo(AboutUsPage);