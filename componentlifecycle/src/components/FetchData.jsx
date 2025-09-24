
import { useEffect, useState } from "react"

function FetchData()
{
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) => {
            setData(data)
        })
    },[])
    return (
        <>
            <h1 className="text-2xl font-semibold"> Fetch all dat from json placeholder </h1>
            <ul>
                {
                    data.map((item,index) => (
                        <li key={index}>{item.id} {item.title}</li>
                        ))
                    
                }
            </ul>
        </>
    )
}

export default FetchData