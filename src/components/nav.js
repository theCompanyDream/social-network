import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
	return ( 
		<header>
			<Navbar bg="dark" variant="dark">

				<Navbar.Brand href="#home">Social Network</Navbar.Brand>

			</Navbar>
		</header>
	)
}
 
export default Header