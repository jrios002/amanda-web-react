import React from 'react';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageName: '',
			messageSubject: '',
			messageEmail: '',
			messageBody: '',
			data: null
		}
	}

	onNameChage = (event) => {
		this.setState({messageName: event.target.value});
	}

	onSubjectChange = (event) => {
		this.setState({messageSubject: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({messageEmail: event.target.value});
	}

	onMessageChange = (event) => {
		this.setState({messageBody: event.target.value});
	}

	onMessageSubmit = () => {
		fetch('https://shielded-wildwood-95570.herokuapp.com/send',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.messageName,
				subject: this.state.messageSubject,
				email: this.state.messageEmail,
				message: this.state.messageBody
			})
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				document.getElementById("messageForm").reset();
				alert(data.message);
			}
			else if (!data.success) {
				alert(data.message);
			}
		})
		.catch(err => {
			console.log(err);
			alert('Something went wrong. Try again later');
		});
	}

	render () {
		return (
			<div className="mt4 mb6 relative">
				<div className="tc b center-txt white">Contact Me</div>
				<p className="tc white">The above map shows the location of Paramount Terrace Elementary where you can visit me during school hours. The best way to contact me is via email. Please click on the button below to directly send me an email through the website. Thank you.</p>
				<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
					  <form className="measure" id="messageForm">
						<fieldset id="name" className="ba b--transparent ph0 mh0">
						  <legend className="f3 fw6 ph0 mh0 white">Send e-mail to Mrs. Rios:</legend>
						  <div className="mv3">
							<label className="db fw6 lh-copy f6 white" htmlFor="name">Name:</label>
							<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							type="text" 
							name="name" 
							id="name"
							placeholder="First and Last Name"
							onChange={this.onNameChage}
							/>
						  </div>
						  <div className="mt3">
							<label className="db fw6 lh-copy f6 white" htmlFor="email-address">Subject:</label>
							<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							type="text" 
							name="subject"
							id="subject"
							placeholder="Subject"
							onChange={this.onSubjectChange}
							/>
						  </div>
						  <div className="mt3">
							<label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email:</label>
							<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							type="email" 
							name="email-address"
							id="email-address"
							placeholder="Email"
							onChange={this.onEmailChange}
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
							placeholder="Type message here"
							onChange={this.onMessageChange}
							/>
						  </div>
						</fieldset>
						<div className="">
						  <input 
						  className="white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
						  type="button" 
						  value="Send"
						  onClick={this.onMessageSubmit}
						  />
						</div>
					  </form>
					</main>
				</article>
			</div>
		);
	}
}

export default Contact;