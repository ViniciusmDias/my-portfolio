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
					<Post />
					<Button title="projects" />
				</div>
			</div>
		</>
	)
}
