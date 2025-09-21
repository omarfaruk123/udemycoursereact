function Members({name,role,image}){
    return (
        <>
            <div className='bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:-translate-y-2 transition-all duration-200 ease-in-out hover:ring-2 ring-green-400 cursor-pointer'>
                <img className='w-32 h-32 rounded-full mx-auto mb-4 object-cover' src={image}/>
                <h1 className='text-xl text-semibold text-gray-800 text-center'> {name} </h1>
                <p className='text-gray-600 text-center'> {role} </p>
          </div>
        </>
    )
}

export default Members