import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/index"
import Header from "../components/header"

import Intro from "../components/intro"

const IndexPage = () => (
	<Layout>
		<SEO
			title="Frontend Developer"
			description="I'm live in Florianópolis and actually builds WebSites, E-Commerces and LandingPages."
		/>
		<Intro />
	</Layout>
)

export default IndexPage
