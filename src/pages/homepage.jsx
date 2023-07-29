import React from 'react';
import Introduction from '../../component/introduction.jsx';
import AboutUsShort from '../../component/aboutus-short.jsx';

function HomePage(){
	return(
		<div id="homepage" className="flex flex-col gap-2 w-full h-auto p-2 border-2">
			<Introduction/>
			<AboutUsShort/>
		</div>
		);
}

export default HomePage;