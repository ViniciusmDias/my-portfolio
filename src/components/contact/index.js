import React from 'react';
import "./styles.css"

export default function Contact() {
	
	return (
		<div className="container contact">
			<h1
			className="contact-info"
			data-sal="slide-up"
			data-sal-delay="200"
			data-sal-easing="ease"
			data-sal-duration="1000"
			>
				Let's talk!
			</h1>

			<form
				id="form"
				name="contact"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				netlify
			>
				<input type="hidden" name="form-name" value="contact" />
				<div className="row">
					<label>
						Name
						<input
							type="text"
							name="name"
							placeholder="Write your name"
							id="name"
							required
						/>
					</label>
					<label>
						E-mail
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Write your email"
							required
						/>
					</label>
				</div>
				<div className="row">
					<label>
						Phone
						<input
							type="text"
							name="phone"
							id="phone"
							placeholder="Write your phone number"
						/>
					</label>
				</div>
				<div className="row">
					<label>
						Message
						<textarea
							name="message"
							id="message"
							rows="4"
							placeholder="Write your message"
						/>
					</label>
				</div>

				<button type="submit">Send</button>
			</form>
		</div>
	)
}
