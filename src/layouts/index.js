import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

const TemplateWrapper = ({ children }) => (
	<div
		style={{
			display: 'grid',
			height: '100vh',
			gridTemplateColumns: '60px 1fr',
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
		>
			<html lang="en" />
		</Helmet>
		<Header />
		<div>{children()}</div>
	</div>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
