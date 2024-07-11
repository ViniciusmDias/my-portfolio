/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./styles.css"
import "minireset.css"
import Header from "../header"

export default function Layout({ children }) {
	Layout.propTypes = {
		children: PropTypes.node.isRequired,
	}

	return (
	<main className="layout">
		<Header />
		{children}
	</main>)
}
