import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favIcon from '../assets/favicon.png'
import Header from '../components/Header'
require('prismjs/themes/prism-solarizedlight.css')
import css from '../assets/app.css'

const TemplateWrapper = ({ children }) => (
	<div
		style={{
			display: 'grid',
			height: '100vh',
			gridTemplateColumns: '1fr',
			gridTemplateRows: '60px 1fr',
		}}
	>
		<Helmet
			title="Stefan Ivić - Portfolio"
			meta={[
				{ name: 'description', content: 'Stefan Ivić - Portfolio' },
				{
					name: 'keywords',
					content:
						'front-end, design, developer, minimal, gatsby, stefan, ivic, ivić',
				},
			]}
			link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favIcon}` }]}
		>
			<html lang="en" />
		</Helmet>
		<Header />
		{children()}
	</div>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
