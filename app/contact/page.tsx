'use client'

import { useState } from 'react';
import * as S from './styles'

export default function Contact() {
	const [status, setStatus] = useState("");
	const [error, setError] = useState("");

	const handleFormSubmit = async (event: any) => {
		event.preventDefault();
		try {
			setStatus('pending');
			setError("");
			const myForm = event.target;
			const formData: any = new FormData(myForm);
			const res = await fetch('/__forms.html', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData).toString()
			});
			if (res.status === 200) {
				setStatus('ok');
			} else {
				setStatus('error');
				setError(`${res.status} ${res.statusText}`);
			}
		} catch (e) {
				setStatus('error');
				setError(`${e}`);
		}
	};

  return (
    <S.Contact className="container">
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
				onSubmit={handleFormSubmit}
			>
				<input type="hidden" name="form-name" value="contact" />
				<S.Row>
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
				</S.Row>
				<S.Row>
					<label>
						Phone
						<input
							type="text"
							name="phone"
							id="phone"
							placeholder="Write your phone number"
						/>
					</label>
				</S.Row>
				<S.Row>
					<label>
						Message
						<textarea
							name="message"
							id="message"
							rows={4}
							placeholder="Write your message"
						/>
					</label>
				</S.Row>
				<button type="submit" disabled={status === 'pending'}>
					Send
				</button>
				{status === 'ok' && (
					<div className="alert alert-success">
						<SuccessIcon />
						Submitted!
					</div>
				)}
				{status === 'error' && (
					<div className="alert alert-error">
						<ErrorIcon />
						{error}
					</div>
				)}
			</form>
		</S.Contact>
  )
}

function SuccessIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="stroke-current shrink-0 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
}

function ErrorIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="stroke-current shrink-0 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
}