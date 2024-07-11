import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/"
import Header from "../components/header"

import Contact from "../components/contact"

const ContactPage = () => (
	<Layout>
		<SEO title="My contact" description="Contact me" />
		<Contact />
	</Layout>
)

export default ContactPage
