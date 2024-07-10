import React from "react"
import "./styles.css"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "gatsby"

export default function Button({ title, route }) {

	return (
		<>
			<Link className="button" title={`Go to ${title}`} to={`/${route}`}>
				{title}
				<FaArrowRight />
			</Link>
		</>
	)
}
