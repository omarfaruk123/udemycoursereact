import React from "react";

function List()
{
    const listItems = [
        {title: 'Mango friuts', isFruit:true, id:1},
        {title: 'Banana friuts', isFruit:false, id:2},
        {title: 'Apple friuts', isFruit:true, id:3},
    ];

    const items = listItems.map((item)=>{
        return(
            <li key={item.id} className={`${item.isFruit ? "text-red-500" : "text-blue-400"}`}>{item.title}</li>
        )
    })

    return (
        <>
        <ul>
            {items}
        </ul>
        </>
    )
}

export default List