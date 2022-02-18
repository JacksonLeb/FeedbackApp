import { useState } from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'


function App() {

  return (
    <div>
      <Header />
      <div className='container'>
        <FeedbackItem />
      </div>
    </div>
  )
}

export default App
