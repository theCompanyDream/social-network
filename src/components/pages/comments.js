import React, { useContext, useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { SocialContext } from '../'

const Comment = (post) => {

	const context = useContext(SocialContext)
	const [comments, setComment] = useState()
	let { id } = useParams();

	useEffect(() => {
		const post = context.posts.find(post => post.id == id);

		console.log(id);
		if (post) {

		}

	}, [])

	return ( 
		<Row>
			<Col></Col>
			<Row></Row>
		</Row>

	)
}
 
export default Comment