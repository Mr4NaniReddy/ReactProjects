import { useState } from 'react'
import './App.css'
import MyChannelVideos from './components/Videos'
import UseStates from './components/UseStates'


function App() {

  return (
    <>
      <MyChannelVideos />
      <UseStates messeage={"Hi what are you doing"}/>
    </>
  )
}

export default App
