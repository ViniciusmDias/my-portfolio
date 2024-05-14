import React from "react"
import Experience from "../experience"
import "./styles.css"
import Button from "../button"
export default function Experiences() {
	return (
		<div className="container experiences">
			<h1>Experiences</h1>
			<h2>All the way I went until I get here.</h2>
			<Experience />
			<Button title="resume" />
		</div>
	)
}
