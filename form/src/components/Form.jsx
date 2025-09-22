import { useState } from "react"

function Form(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState("")
    
   const handleForm = (e)=>{
        e.preventDefault()
        if(formValidation()){
            console.log(name);

        }
   }

   const formValidation = () => {
    const newErrors = {}
    if(!name.trim()) newErrors.name ='Name is required'
    if(!email.trim() || !/^\S+@\S\.\S+$/.test(email)) newErrors.email ='Invalid or Email is required'
    if(!message.trim()) newErrors.message ='Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
   }

    return (
        <>
        <form onSubmit={handleForm} className="max-w-md mx-auto bg-white text-black p-4 rounded space-y-3">
            <div> 
                <label className="block mb-1 font-semibold"> Name : </label>
                <input className="border p-2 md:w-65 w-full" 
                type="text" name="name" id="name" 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter your name" />
                {
                    errors.name && <p className="text-red-500 italic">{errors.name}</p>
                }
            </div>
            <div> 
                <label className="block mb-1 font-semibold"> Email : </label>
                <input className="border p-2 md:w-65 w-full" 
                type="email" name="email" id="email"
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter your email" />
                {
                    errors.email && <p className="text-red-500 italic">{errors.email}</p>
                }
            </div>
            <div> 
                <label className="block mb-1 font-semibold"> Message : </label>
                <textarea className="border p-2 md:w-65 w-full" 
                rows={6} name="message" id="message"
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}
                placeholder="Enter your message" />
                {
                    errors.message && <p className="text-red-500 italic">{errors.message}</p>
                }
            </div>
            <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded float-right"> Submit </button>
        </form>
        </>
    )
}

export default Form