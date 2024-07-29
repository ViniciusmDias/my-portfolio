import * as S from './styles'

export default function Contact() {
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
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
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
				<button type="submit">Send</button>
			</form>
		</S.Contact>
  )
}