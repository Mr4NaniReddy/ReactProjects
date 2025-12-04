import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemberCard from './components/TeamMemberCard'
import { team } from './Data/data'

function App() {

  return (
    <>
      <h1>Team details</h1>
      {
        team.map(member=>{
          return <MemberCard name={member.name} key={member.id} image={member.image} />
        })

      }
    </>
  )
}

export default App
