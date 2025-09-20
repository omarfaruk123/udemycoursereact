function Button ()
{
    const handleClick = () => {
        console.log("Hello omar faruk");
        alert("how are you?")
    }
    return (
        <>
           <button onClick={handleClick} className='bg-indigo-500 hover:bg-indigo-800 text-1xl text-blue p-4 mt-3 mb-3'>Click me</button>
        </>
    )
}

export default Button