import React from "react"
import "./styles.css"
import Button from "../button"
import { SocialProfileJsonLd } from "gatsby-plugin-next-seo"
import Post from "../posts"

export default function Intro() {
	return (
		<>
			<SocialProfileJsonLd
				type="Person"
				name="Vinicius Dias "
				url="https://viniciusdias.works/"
				sameAs={[
					"https://www.facebook.com/diasvini",
					"https://instagram.com/diasvini10",
					"https://www.linkedin.com/in/vinicius-m-dias/",
					"https://twitter.com/vinimdias10",
				]}
			/>
			<div className="container intro">
				<h1>I'm a software engineer.</h1>
				<div className="background" />
				<div className="description">
					<h2>About me</h2>
					<p>I am a software developer with <strong>5 years of experience</strong>, primarily focused on <strong>frontend</strong> applications. My main programming skill is <strong>JavaScript</strong>, and I have extensive experience with technologies such as <strong>Next.js, React.js, TypeScript, Node.js, Gatsby.js, and React-Native</strong>. Recently, I worked in a DevOps role for 8 months, gaining cloud skills in <strong>AWS, Kubernetes, Lambda, ECS, EC2, and CI/CD, and maintaining a healthy production environment </strong>.
					</p>
					
					<h2>I'm interested in</h2>
					<p>Currently, I am enhancing my frontend skills through courses on Frontend Masters and developing personal projects with the aim of making them profitable. I am also taking private English lessons to improve my conversational skills for global opportunities. I am available for roles that align with my expertise and growth areas. If my profile interests you, please contact me!
					</p>					
					{/* <Post /> */}
					<Button title="Let's talk!" route="contact" />
				</div>
			</div>
		</>
	)
}
