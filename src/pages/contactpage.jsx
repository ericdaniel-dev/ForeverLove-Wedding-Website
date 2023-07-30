import React from 'react';
import Contact from '../../component/contact.jsx';

function ContactPage(){
	return(
		<section id="contactpage" className="w-full h-auto p-1 lg:p-3">
			<Contact/>
		</section>
		);
}

export default React.memo(ContactPage);