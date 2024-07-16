import React from "react"
import Experience from "../experience"
import "./styles.css"
import Button from "../button"
export default function Experiences() {
	return (
		<div className="container experiences">
			<h1>Experiences</h1>
			<Experience />
			<Button title="Blog" route="blog" />
		</div>
	)
}
