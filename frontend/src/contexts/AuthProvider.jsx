import React, { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { createContext } from "react";

const AuthData=createContext();

const AuthProvider = ({children}) => {

    const [userData,setUserData]=useState(null);
    useEffect(()=>{
        // localStorage.clear()
        setLocalStorage();
        const {employees,admin}=getLocalStorage();
        setUserData({employees,admin});
    },[])

    return (
        <div className='authProvider'>
            <AuthData.Provider value={[userData,setUserData]}>
                {children}
            </AuthData.Provider>
        </div>
    )
}

export { AuthData }
export default AuthProvider
