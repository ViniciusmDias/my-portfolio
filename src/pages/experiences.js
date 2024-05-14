import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"
import Header from "../components/header"

import Experiences from "../components/experiences"

const ExperiencesPage = () => (
	<Layout>
		<SEO title="My Experiences" description="All about my carrer." />
		<Header />

		<Experiences />
	</Layout>
)

export default ExperiencesPage
