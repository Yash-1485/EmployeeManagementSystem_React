import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { useContext, useEffect, useState } from "react"
import { AuthData } from "./contexts/AuthProvider"

function App() {

  const [user,setUser]=useState(null);
  const [userData,setUserData]=useState(null);

  const [authData,setAuthData]=useContext(AuthData);

  useEffect(()=>{
    if(authData){
      const loggedIn=JSON.parse(localStorage.getItem("loggedInUser"));
      if(loggedIn){
        setUser(loggedIn.role);        
      }
    }
  },[authData])

  const handleLogin=(email,pwd)=>{
    if(authData && authData.admin.find((e)=>e.email===email && e.password===pwd)){
      setUser("admin")
      const admin = authData.admin.find((e)=>e.email===email && e.password===pwd)
      localStorage.setItem("data",JSON.stringify(admin));
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }else if(authData && authData.employees.find((e)=>e.email===email && e.password===pwd)){
      const employee =  authData.employees.find((e)=>e.email===email && e.password===pwd)
      setUserData(employee);
      setUser("employee");
      localStorage.setItem("data",JSON.stringify(employee));
      localStorage.setItem("loggedInUser",JSON.stringify({role:"employee"}));
    }else{
      alert("Invalid credentials")
    }
  }

  return (
    <>
      <div className="">
        {!user?<Login handleLogin={handleLogin}/>:""}
        {user==="admin"?<AdminDashboard changeUser={setUser} data={userData} />:(user==="employee"?<EmployeeDashboard changeUser={setUser} data={userData} />:null)}
      </div>
    </>
  )
}

export default App
