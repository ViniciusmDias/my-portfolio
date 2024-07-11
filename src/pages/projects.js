import React from "react"
import { Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Button from "../components/button"
import Dashboard from "../components/dashboard"

import Img from "gatsby-image"

import "./projects.css"

const ProjectsPage = ({ data }) => {
	const posts = data.allMarkdownRemark.edges

	return (
		<Layout>
			<SEO title="Projects" description="All projects in my carrer." />
			<div className="container works">
				<hr />
				<h1>Projects</h1>

				<h2>
					Some projects that I have contributed in some way and I'm very proud
					of.
				</h2>

				<Dashboard />
				<section>
					{posts.map(({ node }) => {
						const title = node.frontmatter.title || node.fields.slug
						return (
							<article key={node.fields.slug}>
								<Link
									style={{ boxShadow: `none` }}
									title="go to project"
									to={node.fields.slug}
								>
									<div className="image">
										<Img
											fluid={node.frontmatter.imgUrl.childImageSharp.fluid}
											alt={`logo of ${node.frontmatter.title}`}
										/>
									</div>
									<section className="about">
										<small>{node.frontmatter.date}</small>
										<h3
											style={{
												marginBottom: rhythm(1 / 4),
											}}
										>
											{title}
										</h3>
										<p
											dangerouslySetInnerHTML={{
												__html: node.frontmatter.description || node.excerpt,
											}}
										/>
										<div className="techs">
											{node.frontmatter.techs.split(", ").map(item => (
												<span>{item}</span>
											))}
										</div>
									</section>
								</Link>
							</article>
						)
					})}
				</section>
			</div>

			<Button title="experiences" />
		</Layout>
	)
}

export default ProjectsPage

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						techs
						imgUrl {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`
