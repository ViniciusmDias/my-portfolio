import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/index"

import Post from "../components/posts"

const BlogPage = () => (
	<Layout>
		<SEO
			title="Frontend Developer"
			description="Articles from Vinicius Dias, software developer."
		/>
		<Post /> 

	</Layout>
)

export default BlogPage
