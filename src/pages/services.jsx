import Photography from '../../component/photography.jsx';
import Decorative from '../../component/decorative.jsx';

function ServicesPage(){
	return(
		<div id="servicespage" className="flex flex-col w-full gap-5 p-2 overflow-auto">
			<Photography/>
			<Decorative/>
		</div>
		);
}

export default ServicesPage;