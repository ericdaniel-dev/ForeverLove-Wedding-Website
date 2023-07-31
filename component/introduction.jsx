import SliderCarousel from './slider-carousel.jsx';

function Introduction(){
	return(
		<section id="introduction" className="border-2 border-black p-1">
			<div id="introductionBox" className="flex flex-col md:flex-row h-[800px] md:h-[500px] items-center">
				<div id="slogan" className="flex flex-col items-center justify-center h-1/2 md:h-full w-full md:w-1/2">
					<h2 className="text-xl text-center">
						Introducing ForeverLove
					</h2> 
					<p className="text-lg text-center">
						Where Timeless Love Stories Begin
					</p>
				</div>
				<div id="coverimage" className="flex items-center justify-center border-2 h-1/2 md:h-full w-full md:w-1/2">
					<SliderCarousel/>
				</div>
			</div>
		</section>
		);
}

export default Introduction;