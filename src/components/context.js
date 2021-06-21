import { createContext } from 'react'

const SocialContext = createContext({
	posts: [],
	comments: []
})

export default SocialContext