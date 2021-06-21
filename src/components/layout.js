import React from 'react'

import { Container } from 'react-bootstrap'

import { Header } from './'

const Layout = ({ children }) => {
	return (  
		<Container>
			<Header />
			{children}
		</Container>
	)
}
 
export default Layout