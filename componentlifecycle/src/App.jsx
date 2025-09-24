import { useState } from 'react'
import FetchData from './components/FetchData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-4'>
        <FetchData/>
      </div>
    </>
  )
}

export default App
