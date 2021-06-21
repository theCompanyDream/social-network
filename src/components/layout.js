import React from 'react'

import { Container } from 'react-bootstrap'

import { SEO, Header } from './'

const Layout = ({ children }) => {
	return (  
		<Container>
			<SEO />
			<Header />
			{children}
		</Container>
	)
}
 
export default Layout