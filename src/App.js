import { useState, Suspense, useLayoutEffect } from 'react';
import { Route } from "react-router-dom"

import logo from './logo.svg';
import './styles/App.css';

import { Layout, SocialContexnt } from './components'

const App = () => {

  const [body, setState] = useState({})
  
  useLayoutEffect(() => {
    
  })

  return (
    <SocialContexnt.Provider value={body}>
      <Layout>
        <Suspense>

        </Suspense>
      </Layout>
    </SocialContexnt.Provider>
  )
}

export default App
