function Footer(){
	return(
		<footer className="w-full h-auto border-2 border-black flex flex-col items-center p-2">
			<div id="footerBox" className="w-full h-auto flex gap-10 flex-col md:flex-row">
				<div id="contactinfo" className="w-full md:w-1/3">
					<h5 className="text-lg underline">Contact Information:</h5>
						<ul>
							<li>Address: Jl. Cinta Abadi No. 123, Kota Bahagia, Negara Cinta</li>
							<li>Phone: +62-123-456789</li>
							<li>Email: info@foreverlove.com</li>
							<li>Website: www.foreverlove.com</li>
						</ul>						
					<h5 className="text-lg underline">Follow Us on Social Media:</h5>
						<ul>
							<li>Facebook: www.facebook.com/foreverlove</li>
							<li>Instagram: www.instagram.com/foreverloveweddings</li>
							<li>Twitter: www.twitter.com/foreverloveevents</li>
						</ul>
				</div>
				<div id="sitemap" className="w-full md:w-1/3">
					<h5 className="text-lg underline">Sitemaps</h5>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/service">Services</a></li>
						<li><a href="/pricing">Pricing</a></li>
						<li><a href="/testimonial">Testimonial</a></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</div>
				<div id="newsletter" className="w-full md:w-1/3">
					<h5 className="text-lg underline">Subscribe for newsletter</h5>
					<form method="" action="" className="flex flex-row gap-3">
						<input type="text" className="rounded-lg border-2 border-gray-600 px-5 py-3" name="emailsubs" id="emailsubs" placeholder="email@gmail.com" autoComplete="off"/>
						<button className="bg-gray-300 px-5 py-3 rounded-lg">Subscribe</button>
					</form>
				</div>
			</div>
			<div id="copyright">
				<p>Copyright @ 2023 - ForeverLove Wedding Agencies</p>
			</div>
		</footer>
		);
}

export default Footer;