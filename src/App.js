import React, { useState, Suspense, useLayoutEffect } from 'react';
import { Route } from "react-router-dom"

import './components/styles/App.css';

import { Layout, SocialContexnt } from './components'

const Home = React.lazy(() => import('./components/pages/home'))
const Posts = React.lazy(() => import('./components/pages/posts'))
const Comments =  React.lazy(() => import('./components/pages/comments'))

const App = () => {

  const [body, setState] = useState({})
  
  useLayoutEffect(() => {
    const fetchPosts = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setState({...body, posts: data}))
    }

    const fetchComments = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data => setState({...body, comments: data}))
    }

      fetchPosts()
      fetchComments()
  }, [body])

  return (
    <SocialContexnt.Provider value={body}>
      <Layout>
        <Suspense fallback={<div>Loading ...</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/comments" component={Comments} />
        </Suspense>
      </Layout>
    </SocialContexnt.Provider>
  )
}

export default App
