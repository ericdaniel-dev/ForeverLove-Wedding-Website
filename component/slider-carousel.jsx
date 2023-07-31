import React from 'react';
import { useState } from 'react';
import WeddingPhoto1 from '../src/assets/wedding beach 1.webp';
import WeddingPhoto2 from '../src/assets/wedding beach.webp';
import WeddingPhoto3 from '../src/assets/wedding beach 3.webp';

function SliderCarousel(){
	const [current, setCurrent] = useState(2);
	const listImage = [WeddingPhoto1, WeddingPhoto2, WeddingPhoto3];
	const prevImg = () => {
		if(current==0){
			setCurrent(2);
		}
		else{
			setCurrent(current-1);
		}
	}
	const nextImg = () => {
		if(current==2){
			setCurrent(0);
		}
		else{
			setCurrent(current+1);
		}	
	}
	return(
		<div id="sliderBox" className="flex flex-col items-center justify-center w-full h-full cursor-pointer gap-5">
			<img src={listImage[current]} className="transform scale-[0.8] w-full h-3/4 object-fill" alt="Wedding images"/>
			<div className="h-1/4">
				<button className="text-3xl border-2 rounded-full p-2" onClick={prevImg}>←</button>
				<button className="text-3xl border-2 rounded-full p-2" onClick={nextImg}>→</button>
			</div>
		</div>
		);
}

export default SliderCarousel;