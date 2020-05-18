import React from 'react';

const Contact = () => {
	return (
		<div className="mv4 relative">
			<div className="tc b center-txt white">Contact Me</div>
			<p className="tc white">The above map shows the location of Paramount Terrace Elementary where you can visit me during school hours. The best way to contact me is via email. Please click on the button below to directly send me an email through the website. Thank you.</p>
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
				  <form className="measure">
				    <fieldset id="name" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0 white">Send e-mail to Mrs. Rios:</legend>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6 white" htmlFor="name">Name:</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="text" 
				        name="name" 
				        id="name"
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"
				        id="email-address"
				        />
				      </div>
					  <div className="mt3">
				        <label className="db fw6 lh-copy f6 white" htmlFor="message">Message:</label>
						<textarea className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						cols="10"
						rows="10"
				        type="text" 
				        name="message"
				        id="message"
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      className="white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
				      type="button" 
				      value="Send" 
				      />
				    </div>
				  </form>
				</main>
			</article>
		</div>
	);
}

export default Contact;