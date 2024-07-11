import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"
import Header from "../components/header"

import Resume from "../components/resume"

const ResumePage = () => (
	<Layout>
		<SEO title="My resume" description="All about me." />
		<Resume />
	</Layout>
)

export default ResumePage
