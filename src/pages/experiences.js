import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"

import Experiences from "../components/experiences"

const ExperiencesPage = () => (
	<Layout>
		<SEO title="My Experiences" description="All about my carrer." />
		<Experiences />
	</Layout>
)

export default ExperiencesPage
