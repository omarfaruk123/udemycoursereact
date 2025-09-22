import { useState } from 'react'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black h-screen flex justify-center items-center'>
        <Form/>
      </div>
    </>
  )
}

export default App
