import React from 'react';
import Contact from '../../component/contact.jsx';

function ContactPage(){
	return(
		<section id="contact" className="p-3">
			<Contact/>
		</section>
		);
}

export default React.memo(ContactPage);