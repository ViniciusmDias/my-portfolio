import React from "react"
import Experience from "../experience"
import "./styles.css"
import Button from "../button"
export default function Experiences() {
	return (
		<div className="container experiences">
			<h1>Experiences</h1>
			<p>In my last role, I also <strong>led a team of developers</strong>, conducted 1-on-1 meetings, and served as a technical reference for frontend development. I hold a degree in Information Systems from the Federal University of Santa Catarina, where I learned the fundamentals of programming, algorithms, networks, and data structures. I have also participated in several bootcamps (Code Nation, Gama Academy, Rocketseat), expanding my knowledge and network in the field.
			</p> 
			<Experience />
			<Button title="resume" />
		</div>
	)
}
