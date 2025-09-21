import React from "react";
import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="min-h-screen bg-black text-white flex justify-center items-center"> 
                <div className="bg-white rounded-lg shadow-md text-center p-6">
                    <h1 className="text-2xl text-bold text-gray-800"> Counter App </h1>
                    <p className="text-black"> Counts {count} times </p>

                    <button onClick={() => setCount(count + 1)} className="bg-green-600 pl-1 pr-1 pt0.5 pb-0.5 rounded-lg transition">Increase</button>
                    <button onClick={() => setCount(count ? count - 1 : 0)} className="bg-red-600 pl-1 pr-1 pt0.5 pb-0.5 rounded-lg m-2 transition">Decrease</button>
                    <button onClick={() => setCount(0)} className="bg-blue-600 pl-1 pr-1 pt0.5 pb-0.5 rounded-lg transition">Reset</button>

                </div>
            </div>
        </>
    )
}

export default Counter