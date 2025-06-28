import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail]=useState("");
    const [passsword, setPassword]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        // console.log(email,passsword);
        handleLogin(email,passsword);
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <div className="form h-screen w-screen flex justify-center items-center">
                <div className='border-2 border-teal-600 rounded-xl px-4 py-16 max-w-3xl'>
                    <h1 className="text-5xl font-semibold text-center text-gray-300 mb-10">Login</h1>
                    <form className='fields flex justify-center items-center flex-col gap-5 w-100' onSubmit={(e)=>{handleSubmit(e);}}>
                        <input type="email" name="email" id="email" className='bg-transparent outline-none border-2 border-teal-600 px-5 py-4 w-3/4 rounded-xl placeholder:text-gray-400' placeholder='email' required onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                        <input type="password" name="password" id="password" className='bg-transparent outline-none border-2 border-teal-600 px-5 py-4 w-3/4 rounded-xl placeholder:text-gray-400' placeholder='password' required onChange={(e)=>{setPassword(e.target.value)}} value={passsword}/>
                        <button type="submit" className='bg-teal-600 border-none outline-none px-5 py-4 w-3/4 rounded-xl'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
