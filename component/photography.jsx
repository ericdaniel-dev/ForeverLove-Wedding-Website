import Photo1 from '../src/assets/wedding beach.webp';

function Photography(){
	return(
		<div id="photoandvideo" className="flex flex-col gap-4 w-full h-auto overflow-auto">
		  <h3 className="text-xl text-center underline underline-offset-4">ForeverLove Photography & Videography: Preserving Timeless Moments</h3>
		  <div id="photoBox" className="flex flex-col w-full items-center md:flex-row">
		    <div id="samplephoto" className="h-96 w-full md:w-1/3">
		      <img loading="lazy" src={Photo1} className="w-full h-full object-contain" alt="Photography 1"/>
		    </div>
		    <div id="descphoto" className="w-full md:w-2/3 p-4">
		      <p>
		        &nbsp;&nbsp;&nbsp;&nbsp;Capture the essence of your love story through our exceptional 
		        Photography and Videography services. At ForeverLove, we have a 
		        team of talented and experienced photographers and videographers 
		        who are passionate about immortalizing every cherished moment of 
		        your special day. With an artistic eye and a keen attention to 
		        detail, we aim to create stunning visual narratives that reflect 
		        the love, joy, and emotion shared between you and your partner. 
		        From the laughter in candid shots to the tears of happiness during 
		        the vows, our team will be there to capture it all, ensuring that 
		        your memories remain alive for generations to come.
		      </p>
		    </div>
		  </div>
		</div>
	);
}

export default Photography;