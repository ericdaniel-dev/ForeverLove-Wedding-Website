import Decor1 from '../src/assets/wedding decoration.jpg';

function Decorative(){
	return(
		<div id="decor" className="w-full h-auto overflow-auto">
		  <h3 className="text-xl text-center underline underline-offset-4">ForeverLove Decoration: Elevate Your Wedding with Timeless Elegance</h3>
		  <div id="decorBox" className="flex flex-col w-full items-center md:flex-row-reverse">
		    <div id="sampledecor" className="h-96 w-full md:w-1/3">
		    	<img src={Decor1} className="skeleton w-full h-full object-contain" alt="Wedding decorations"/>
		    </div>
		    <div id="descdecor" className="w-full md:w-2/3 p-4">
		      <p>
		        &nbsp;&nbsp;&nbsp;&nbsp;Evoke a sense of enchantment and romance with our exquisite 
		        Decoration services. Our team of skilled decorators takes pride 
		        in transforming wedding venues into captivating spaces that embody 
		        your unique style and vision. Whether it's an intimate garden affair 
		        or a lavish ballroom celebration, we pay meticulous attention to every 
		        detail, from floral arrangements and lighting to elegant drapery and 
		        thematic elements. With ForeverLove Decoration, we strive to create an 
		        ambiance that leaves a lasting impression on you and your guests, making 
		        your wedding a truly unforgettable experience.
		      </p>
		    </div>
		  </div>
		</div>
	);
}

export default Decorative;