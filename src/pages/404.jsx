function NotFound(){
	return(
		<div id="notfound" className="flex flex-col items-center justify-center gap-5 h-full p-5">
			<h1 className="text-3xl">Not Found</h1>
			<h2 className="text-5xl">404</h2>
			<p className="text-xl">
				We apologize, but it seems that the page 
				you're looking for doesn't exist.<br/> Error 404: Page Not Found
			</p>
		</div>
		);
}

export default NotFound;