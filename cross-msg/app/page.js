'use client'

import Nav from './components/nav'
import Write from './components/write'
import Read from './components/read'




export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24 gap-4">
      <Nav />
      <Write />
      <Read />  
    </main>
  )
}
