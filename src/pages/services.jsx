import React from 'react';
import Photography from '../../component/photography.jsx';
import Decorative from '../../component/decorative.jsx';

function ServicesPage(){
	return(
		<section id="servicespage" className="flex flex-col w-full gap-10 p-2 overflow-auto">
			<Photography/>
			<Decorative/>
		</section>
		);
}

export default React.memo(ServicesPage);