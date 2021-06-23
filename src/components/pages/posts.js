import React, { useContext } from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/posts.css'

import { SocialContext } from '../'

const Posts = () => {

	const context = useContext(SocialContext)

	return ( 
		<Row>
			<Col>
				<ul>
					{context.posts && context.posts.map(post => (
						<li key={post.id}>
							<Link to={`/comments?id=${post.id}`}>
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
		</Row>
	)
}
 
export default Posts