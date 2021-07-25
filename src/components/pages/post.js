import React, { useContext, useEffect, useState } from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { SocialContext } from '..'

const Post = () => {

	let { id } = useParams();
	const context = useContext(SocialContext)
	const [page_comments, setPage] = useState({post: [], comments: []})

	useEffect(() => {
		
		if (context.posts) {
			const post = context.posts.find(post => post.id == id);
			const comments =  context.comments.filter((comment) => {
				return comment.id === id
			})
			console.log(post);
			setPage({post: post, comments: comments})
		}

	}, [context, page_comments, id])

	return ( 
		<Row>
			<Col>
				<Card>
					<Card.Title>{page_comments.post.title}</Card.Title>
					<Card.Body>{page_comments.post.body}</Card.Body>
				</Card>
			</Col>
			<Col>
				<ul>
					{context.comments && context.comments.filter( 
						comment => comment.postId == id
					).map(comment => (
						<li key={comment.id}>
							<Card>
								<Card.Title>{comment.name}</Card.Title>
								<Card.Body>{comment.body}</Card.Body>
							</Card>
						</li>
					))}
				</ul>
			</Col>
		</Row>		
	)
}
 
export default Post