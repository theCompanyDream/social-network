import React from 'react'

import { Navbar } from 'react-bootstrap'

const Header = () => {
	return ( 
		<header>
			<Navbar bg="dark" variant="dark">

				<Navbar.Brand href="/">Social Network</Navbar.Brand>

			</Navbar>
		</header>
	)
}
 
export default Header