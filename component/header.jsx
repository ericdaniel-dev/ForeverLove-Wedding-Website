import React from 'react';
import { useState } from 'react';

function Header(){
	const [navIsOpen, SetNavIsOpen] = useState(false);
	function toggleNav(){
		const menubar = document.getElementById('menubar');
		if(navIsOpen){
			menubar.classList.remove('hidden');
			SetNavIsOpen(false);
		}
		else{
			menubar.classList.add('hidden');
			SetNavIsOpen(true);
		}
	}
	return(
		<header className="w-full h-auto border-2 border-black p-2">
			<div id="headerbox" className="flex items-center justify-between">
				<h1 className="text-lg md:text-xl">ForeverLove Wedding</h1>
				<nav id="navbar" className="flex">
					<ul id="menubar" className="hidden md:flex flex-col md:flex-row p-2 gap-2">
						<li><a href="/" className="p-2 hover:bg-gray-300 text-base md:text-lg">Home</a></li>
						<li><a href="/service" className="p-2 hover:bg-gray-300 text-base md:text-lg">Services</a></li>
						<li><a href="/pricing" className="p-2 hover:bg-gray-300 text-base md:text-lg">Pricing</a></li>
						<li><a href="/testimonial" className="p-2 hover:bg-gray-300 text-base md:text-lg">Testimonial</a></li>
						<li><a href="/contact" className="p-2 hover:bg-gray-300 text-base md:text-lg">Contact</a></li>
					</ul>
					<button onClick={toggleNav} className="inline-block md:hidden rounded-md border-2 border-black p-2">≣</button>
				</nav>				
			</div>
		</header>
		)
}

export default Header;