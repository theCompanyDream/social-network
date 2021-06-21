import React, { useContext } from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import '../styles/posts.css'

import { SocialContext } from '../'

const Posts = () => {

	const context = useContext(SocialContext)

	return ( 
		<Row>
			<Col>
				<h1 className="display-2">Social Network</h1>
			</Col>
			<Col>
				<ul>
					{context.posts && context.posts.map(post => (
						<li>
							<a>
								<Row>
									<Card>
										<Card.Body>
											<Card.Title>{post.title}</Card.Title>
											<Card.Body>{post.body}</Card.Body>
										</Card.Body>
									</Card>
								</Row>
							</a>
						</li>
					))}
				</ul>
			</Col>
		</Row>
	)
}
 
export default Posts