import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
	return ( 
		<header>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Social Network</Navbar.Brand>

				<Navbar.Collapse>
					<Nav className="mr-auto">
						<Nav.Link href="/comments">Comments</Nav.Link>
					</Nav>
				</Navbar.Collapse>

			</Navbar>
		</header>
	)
}
 
export default Header