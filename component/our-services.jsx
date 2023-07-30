import WeddingPlan from '../src/assets/wedding plan.svg';
import PhotoVideography from '../src/assets/photography.svg';
import WeddingDecoration from '../src/assets/decoration.svg';
import WeddingMakeup from '../src/assets/makeup.svg';
import WeddingEntertainment from '../src/assets/entertainment.svg';

function OurServices(){
	return(
		<section id="ourservices" className="w-full h-auto border-2 border-black p-2">
			<div id="ourserviceBox" className="flex flex-col gap-1 mx-auto w-full gap-5">
				<h3 className="text-xl text-center underline underline-offset-4">Our Service</h3>
				<div id="servicelist" className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 w-full">
					<div id="weddingplan" className="flex flex-col gap-2 p-2">
						<div id="smalltitle" className="flex items-center justify-center gap-3">
							<img src={WeddingPlan} width="18px" height="18px" alt="wedding plan"/>
							<h4 className="text-lg text-center">Wedding Plan</h4>
						</div>
						<p className="text-justify">
							&nbsp;&nbsp;&nbsp;&nbsp;We believe that every wedding is unique, and that's 
							why we are committed to designing weddings that 
							match your desires and personalities. Our planning 
							team will work with you to ensure every detail is 
							beautifully arranged, from selecting a theme to the 
							decorations.
						</p>
					</div>
					<div id="photograph" className="flex flex-col gap-2 p-2">
						<div id="smalltitle" className="flex items-center justify-center gap-3">
							<img src={PhotoVideography} width="18px" height="18px" alt="Photography and Videography"/>
							<h4 className="text-lg text-center">Photography & Videography</h4>
						</div>
						<p className="text-justify">
							&nbsp;&nbsp;&nbsp;&nbsp;Capturing precious moments at weddings is an art, 
							and we have talented photographers and videographers 
							to capture every detail and emotion on your special 
							day. With creative styles and state-of-the-art technology, 
							we will create everlasting memories.
						</p>
					</div>
					<div id="decoration" className="flex flex-col gap-2 p-2">
						<div id="smalltitle" className="flex items-center justify-center gap-3">
							<img src={WeddingDecoration} width="18px" height="18px" alt="wedding decoration"/>
							<h4 className="text-lg text-center">Decoration</h4>
						</div>
						<p className="text-justify">
							&nbsp;&nbsp;&nbsp;&nbsp;Beautiful decorations are the heart of a memorable 
							wedding. Our design team will create decor that 
							reflects your unique style, from table settings to 
							stunning flowers.
						</p>
					</div>
					<div id="makeup" className="flex flex-col gap-2 p-2">
						<div id="smalltitle" className="flex items-center justify-center gap-3">
							<img src={WeddingMakeup} width="18px" height="18px" alt="wedding plan"/>
							<h4 className="text-lg text-center">Bridal Makeup & Dream Gowns</h4>
						</div>
						<p className="text-justify">
							&nbsp;&nbsp;&nbsp;&nbsp;On your wedding day, you are the star. Our beauty 
							experts will design the perfect makeup to enhance 
							your natural beauty. Additionally, we offer an 
							elegant and beautiful collection of bridal gowns to 
							ensure you look enchanting on your special day.
						</p>
					</div>
					<div id="entertainment" className="flex flex-col gap-2 p-2">
						<div id="smalltitle" className="flex items-center justify-center gap-3">
							<img src={WeddingEntertainment} width="18px" height="18px" alt="wedding entertainment"/>
							<h4 className="text-lg text-center">Entertainment</h4>
						</div>
						<p className="text-justify">
							&nbsp;&nbsp;&nbsp;&nbsp;An unforgettable wedding is about captivating 
							entertainment that touches the hearts of your 
							guests. We provide a variety of entertainment 
							options, from musicians and bands to traditional 
							or modern dance performances, to add a magical 
							touch to your wedding.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurServices;