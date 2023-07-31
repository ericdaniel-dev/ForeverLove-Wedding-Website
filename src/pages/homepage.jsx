import React from 'react';
import Introduction from '../../component/introduction.jsx';
import AboutUsShort from '../../component/aboutus-short.jsx';
import OurServices from '../../component/our-services.jsx';

function HomePage(){
	return(
		<section id="homepage" className="flex flex-col gap-10 w-full h-auto p-1">
			<Introduction/>
			<AboutUsShort/>
			<OurServices/>
		</section>
		);
}

export default React.memo(HomePage);