module.exports = {
	siteMetadata: {
		title: `Vinicius Dias`,
		titleTemplate: "Vinicius Dias · Frontend Developer",

		author: {
			name: `Vinicius Dias`,
			summary: `Who lives and works in Florianópois building useful things.`,
		},
		description: `A web-portfólio`,
		siteUrl: `https://viniciusdias.works`,
		social: {
			twitter: `vinimdias10`,
		},
		url: "https://viniciusdias.works",
		siteUrl: "https://viniciusdias.works", // No trailing slash allowed!
		// Path to your image you placed in the 'static' folder
		twitterUsername: "@vinimdias10",
		image: `${__dirname}/src/img/profile.jpeg`, // Path to your image you placed in the 'static' folder
	},
	pathPrefix: "/",
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
				],
			},
		},
		`gatsby-plugin-next-seo`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sitemap`,
		{
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-9VMMMP0MN9", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID",
					"GTM-N4GKBK8Z" // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "https://www.googletagmanager.com",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-N4GKBK8Z",
	
				// Include GTM in development.
				//
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,
	
				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				//
				// Defaults to null
				defaultDataLayer: { platform: "gatsby" },
	
				// Name of the event that is triggered
				// on every Gatsby route change.
				//
				// Defaults to false
				enableWebVitalsTracking: true,
				// Defaults to https://www.googletagmanager.com
				selfHostedOrigin: "https://www.googletagmanager.com",
				// Defaults to gtm.js
				selfHostedPath: "/gtag/js?id=G-9VMMMP0MN9",
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://viniciusdias.works",
				sitemap: "https://viniciusdias.works/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		`gatsby-plugin-mdx`,
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Portfolio de Vinicius Dias`,
				short_name: `VD`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/favicon.svg`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/content`,
				ignore: [`**/\.*`], // ignore files starting with a dot
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
		`gatsby-plugin-advanced-sitemap`,
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
				allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: true, // boolean to turn off the default caching headers
				transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
				generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
			},
		},
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
				once: true, // Defines if animation needs to be launched once
				disable: false, // Flag for disabling animations

				// Advanced Options
				selector: "[data-sal]", // Selector of the elements to be animated
				animateClassName: "sal-animate", // Class name which triggers animation
				disabledClassName: "sal-disabled", // Class name which defines the disabled state
				rootMargin: "0% 50%", // Corresponds to root's bounding box margin
				enterEventName: "sal:in", // Enter event name
				exitEventName: "sal:out", // Exit event name
			},
		},
		"gatsby-plugin-page-transitions",
	],
}
