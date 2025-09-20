import { useState } from "react";

function Buttons({count , handleClick}){

    // const [count, setCount] = useState(0);
    // const handleClick = () => {
    //     setCount(count + 1);
    // }

    return (
        <>
            <button onClick={handleClick} className="bg-green-400 hover:bg-green-600 text-2xl px-2 py-2 *: ml-4 mt-2 mb-2"> Click me </button>

            <p className="mb-4 text-2xl text-black"> Countdown start {count} times </p>
        </>
    )
}

export default Buttons