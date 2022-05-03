import React, { useContext } from 'react'
import {Row, Col, Card, Button, ButtonGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/feed.css'

import { SocialContext } from '..'

const Feed = () => {

	const context = useContext(SocialContext)

	return (
		<Row className="justify-content-md-center">
			<Col>
				<h2>Social Network</h2>
				<ButtonGroup className=" gap-2" vertical>
					<Button variant="outline-success" size="lg" href="https://tbrantleyii.me" >Profile</Button>
					<Button variant="outline-success" size="lg">Settings</Button>
				</ButtonGroup>
			</Col>
			<Col>
				<ul>
					{context.posts && context.posts.map(post => (
						<li key={post.id}>
							<Link to={`/post/${post.id}`}>
								<Row>
									<Card>
										<Card.Body>
											<Card.Title>{post.title}</Card.Title>
											<Card.Body>{post.body}</Card.Body>
										</Card.Body>
									</Card>
								</Row>
							</Link>
						</li>
					))}
				</ul>
			</Col>
			<Col>
				<p>This is just a fun little project I've done</p>
			</Col>
		</Row>
	)
}

export default Feed