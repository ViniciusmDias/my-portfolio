import React from "react"
import "./styles.css"
import Button from "../button"
import { SocialProfileJsonLd } from "gatsby-plugin-next-seo"
import profileImage from "../../images/vinigoogle.jpg"
import nextLogo from "../../images/next.svg"
import reactLogo from "../../images/react.svg"
import nodeLogo from "../../images/node.svg"
import awsLogo from "../../images/aws.svg"
import javascript from "../../images/javascript.svg"
import gatsbyLogo from "../../images/gatsby.svg"


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
				<div className="background">
					<img src={profileImage} alt="Profile image" />
				</div>
				<div className="description">
					<h1>I'm a software 
						engineer with +5 
						years of experience
					</h1>

					<h2> 
						I'm primarily focused on frontend applications. My main programming skill is JavaScript, and I have extensive experience with technologies such as:
					</h2>
					<div className="techLogos">
						<img src={nextLogo} alt="Next image"  />
						<img src={awsLogo} alt="Next image" style={{ alignSelf: "flex-end"}} />
						<img src={reactLogo} alt="Next image" />
						<img src={nodeLogo} alt="Next image" />
						<img src={gatsbyLogo} alt="Next image" />
						<img src={javascript} alt="Next image" />
					</div>
					<Button title="Let's talk!" route="contact" />
				</div>
			</div>
		</>
	)
}
