import { useState } from 'react';
import Button from './Component/Button';
import List from './Component/List';
import Buttons from './Component/Buttons';

function App() {

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  const user = {
    uname: "omar",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 50
  }


  return (
    <>
      <div>
        <Buttons count={count} handleClick={handleClick}/>
        <h1> Same button use two times </h1>
        <Buttons count={count} handleClick={handleClick}/>
        <h1 className='text-4xl'> This is test div </h1>
        <h1>{user.uname}</h1>
        <img src={user.imageUrl} width={user.imageSize} />
        <Button/>
        <List/>
      </div>
    </>
  )
}

export default App
