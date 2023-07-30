import CardLists from './pricecard.jsx';

function PricingList(){
	const services = [
	  {
	    service: 'Wedding Planning Service',
	    description: 'Personalized wedding planning tailored to match your desires and personalities. Themed wedding design and arrangement of all details.',
	    price: 2500,
	  },
	  {
	    service: 'Photography & Videography Package',
	    description: 'Professional photographers and videographers capturing every detail and emotion. High-quality photos and videos presented in creative styles.',
	    price: 3000,
	  },
	  {
	    service: 'Wedding Decoration',
	    description: 'Exquisite and personalized wedding decorations. Beautiful table settings and stunning floral arrangements.',
	    price: 1500,
	  },
	  {
	    service: 'Bridal Makeup & Dream Gowns',
	    description: 'Professional makeup artists to enhance your natural beauty. Wide selection of elegant and enchanting bridal gowns.',
	    price: 1100
	  },
	  {
	    service: 'Entertainment Services',
	    description: 'Captivating entertainment options to delight your guests. Musicians, bands, traditional or modern dance performances, and more.',
	    price: 800,
	  },
	  {
	    service: 'Complimentary Initial Consultation',
	    description: 'Schedule a consultation with our team to discuss your wedding vision. Free of charge.',
	    price: 'free',
	  },
];
	return(
		<div id="pricinglistBox" className="flex flex-col gap-10">
			<h2 className="text-2xl">ForeverLove - Wedding Agency Pricing List</h2>
			<div id="listBox">
				<CardLists services={services}/>
			</div>
		</div>
		);
}

export default PricingList;