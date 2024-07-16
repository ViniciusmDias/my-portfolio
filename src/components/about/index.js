import React from "react"
import "./styles.css"
import Button from "../button"
import lifeImage from "../../images/vinicanto.jpeg"
import lifeImage2 from "../../images/vinitramps.jpg"
import lifeImage3 from "../../images/vinidois.jpg"

export default function About() {
	return (
		<div className="container about">
			<div className="row">
				<div className="content">
					<h2>About me</h2>
					<p>I am a software developer with <strong>5 years of experience</strong>, primarily focused on <strong>frontend</strong> applications. My main programming skill is <strong>JavaScript</strong>, and I have extensive experience with technologies such as <strong>Next.js, React.js, TypeScript, Node.js, Gatsby.js, and React-Native</strong>. Recently, I worked in a DevOps role for 8 months, gaining cloud skills in <strong>AWS, Kubernetes, Lambda, ECS, EC2, and CI/CD</strong>, and maintaining a healthy production environment
					</p>
				</div>
				<div className="image">
					<img src={lifeImage} alt="Profile image" />
				</div>
			</div>
			<div className="row reverse">
				<div className="content">
					<h2>My last experience</h2>
					<p>In my last role, I also <strong>led a team of developers</strong>, conducted 1-on-1 meetings, and served as a technical reference for frontend development. I hold a degree in Information Systems from the Federal University of Santa Catarina, where I learned the fundamentals of programming, algorithms, networks, and data structures. I have also participated in several bootcamps (Code Nation, Gama Academy, Rocketseat), expanding my knowledge and network in the field.
					</p> 
				</div>
				<div className="image">
					<img src={lifeImage2} alt="Profile image" />
				</div>
			</div>
			<div className="row">
				<div className="content">
					<h2>I'm interested in</h2>
					<p>Currently, I am enhancing my Frontend skills through courses on Frontend Masters and developing personal projects with the objective of making them profitable. I am also taking private English lessons to improve my conversational skills for global opportunities. I have experience working remotely, which has honed my ability to collaborate effectively across different time zones and cultures.I am available for roles that align with my expertise and growth areas, particularly those involving remote or hibrid work, DevOps, and Frontend development. If my profile interests you, please contact me!</p>
				</div>
				<div className="image">
					<img src={lifeImage3} alt="Profile image" />
				</div>
			</div>
			<Button title="Experiences" route="experiences" />
		</div>
	)
}
