import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemberCard from './components/TeamMemberCard'

function App() {

  return (
    <>
      <h1>Team details</h1>
      <MemberCard name="nani" role="Developer" />
    </>
  )
}

export default App
