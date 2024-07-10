import React, { useRef } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa"
// import emailjs from '@emailjs/browser';
import "./styles.css"

export default function Contact() {
	// const form = useRef();
	// const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_go3j608', 'contact_form', form.current, {
  //       publicKey: 'DV-0p88b8VfK2SUnK',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };
	
	// return (
	// 	<div className="container contact">
	// 		<h1>Contact</h1>

	// 		<form
	// 			name="contact"
	// 			ref={form}
	// 			onSubmit={sendEmail}
	// 		>
	// 			<input type="hidden" name="form-name" value="contact" />

	// 			<div hidden>
	// 				<label>
	// 					Don’t fill this out: <input name="bot-field" />
	// 				</label>
	// 			</div>
	// 			<h3
	// 				className="contact-info"
	// 				data-sal="slide-up"
	// 				data-sal-delay="200"
	// 				data-sal-easing="ease"
	// 				data-sal-duration="1000"
	// 			>
	// 				Let's talk!
	// 			</h3>
	// 			<div className="row">
	// 				<label>
	// 					Name (required)
	// 					<input
	// 						type="text"
	// 						name="user_name"
	// 						placeholder="Write your name"
	// 						id="name"
	// 						required
	// 					/>
	// 				</label>
	// 				<label>
	// 					E-mail (required)
	// 					<input
	// 						type="email"
	// 						name="user_email"
	// 						id="email"
	// 						placeholder="Write your email"
	// 						required
	// 					/>
	// 				</label>
	// 			</div>
	// 			<div className="row">
	// 				<label>
	// 					Cellphone (opcional)
	// 					<input
	// 						type="text"
	// 						name="contact_number"
	// 						id="phone"
	// 						placeholder="Write your cellphone number"
	// 					/>
	// 				</label>
	// 			</div>
	// 			<div className="row">
	// 				<label>
	// 					Message (required)
	// 					<textarea
	// 						name="message"
	// 						id="message"
	// 						rows="5"
	// 						placeholder="Write your message"
	// 					/>
	// 				</label>
	// 			</div>

	// 			<button type="submit" value="Send">Send</button>
	// 		</form>

	// 		<div className="social-icons">
	// 			<a href="https://github.com/ViniciusmDias">
	// 				<FaGithub />
	// 			</a>
	// 			<a href="https://www.linkedin.com/in/vinicius-m-dias/">
	// 				<FaLinkedin />
	// 			</a>
	// 		</div>
	// 	</div>
	// )
}
