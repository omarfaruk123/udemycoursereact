import { useState } from 'react'
import Members from './components/Members'


function App() {
  const [count, setCount] = useState(0)

  const members = [
    {
      id: 1,
      name: "Omar",
      role: "Web Developer",
      image: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    {
      id: 2,
      name: "Smith",
      role: "QA Engineer",
      image: 'https://randomuser.me/api/portraits/women/53.jpg'
    },
    {
      id: 3,
      name: "Faruk",
      role: "Software Engineer",
      image: 'https://randomuser.me/api/portraits/women/43.jpg'
    },
    {
      id: 4,
      name: "Kamal",
      role: "Doctor",
      image: 'https://randomuser.me/api/portraits/women/40.jpg'
    },
    {
      id: 5,
      name: "Mamun",
      role: "Kobler",
      image: 'https://randomuser.me/api/portraits/women/36.jpg'
    },
    {
      id: 6,
      name: "Anower",
      role: "Designeer",
      image: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    {
      id: 7,
      name: "Komol",
      role: "Actor",
      image: 'https://randomuser.me/api/portraits/women/26.jpg'
    },
    {
      id: 8,
      name: "Badol",
      role: "Police",
      image: 'https://randomuser.me/api/portraits/women/73.jpg'
    },
  ]

  return (
    <>
      <div className='min-h-screen p-6 max-w-screen-xl mx-auto'>
        <h1 className='text-3xl text-center font-bold text-blue-600 mb-6'> Team Member List App</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            members.map((member)=>
              <Members key={member.id} name={member.name} role={member.role} image={member.image}/>
            )
          }
          
        </div>
      </div>
    </>
  )
}

export default App
