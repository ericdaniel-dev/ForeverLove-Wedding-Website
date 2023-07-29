function Introduction(){
	return(
		<section id="introduction" className="border-2 border-black p-2">
			<div id="introductionBox" className="flex flex-col md:flex-row h-[400px] items-center">
				<div id="slogan" className="flex flex-col items-center justify-center w-full md:w-1/2">
					<h2 className="text-xl">
						Introducing ForeverLove
					</h2> 
					<p className="text-lg">
						Where Timeless Love Stories Begin
					</p>
				</div>
				<div id="coverimage" className="flex items-center justify-center border-2 h-full w-full md:w-1/2">
					<div>
						<div className="">x</div>
						<div className="">y</div>
					</div>
				</div>
			</div>
		</section>
		);
}

export default Introduction;