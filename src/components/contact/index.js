import React, { useRef } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa"
import "./styles.css"

export default function Contact() {
	
	return (
		<div className="container contact">
			<h1>Contact</h1>

			<form
				id="form"
				name="contact"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				netlify
			>
				<input type="hidden" name="form-name" value="contact" />

			
				<h3
					className="contact-info"
					data-sal="slide-up"
					data-sal-delay="200"
					data-sal-easing="ease"
					data-sal-duration="1000"
				>
					Let's talk!
				</h3>
				<div className="row">
					<label>
						Name (required)
						<input
							type="text"
							name="name"
							placeholder="Write your name"
							id="name"
							required
						/>
					</label>
					<label>
						E-mail (required)
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
				<label>Your Role: 
					<select name="role[]">
					<option value="leader">Leader</option>
					<option value="follower">Follower</option>
				</select>
				</label>
					<label>
						Cellphone (opcional)
						<input
							type="text"
							name="phone"
							id="phone"
							placeholder="Write your cellphone number"
						/>
					</label>
				</div>
				<div className="row">
					<label>
						Message (required)
						<textarea
							name="message"
							id="message"
							rows="5"
							placeholder="Write your message"
						/>
					</label>
				</div>

				<button type="submit">Send</button>
			</form>

			<div className="social-icons">
				<a href="https://github.com/ViniciusmDias">
					<FaGithub />
				</a>
				<a href="https://www.linkedin.com/in/vinicius-m-dias/">
					<FaLinkedin />
				</a>
			</div>
		</div>
	)
}
