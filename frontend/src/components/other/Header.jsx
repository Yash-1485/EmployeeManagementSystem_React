const Header = ({changeUser,data}) => {
    const logOut=()=>{
        // localStorage.setItem("data",null);
        // localStorage.setItem("loggedInUser",null);
        localStorage.removeItem("data");
        localStorage.removeItem("loggedInUser");
        // window.location.reload();
        changeUser('');
    }

    // if(!data){
    //     return <p className="text-white text-xl">Loading Data...</p>
    // }

    return (
        <div className='flex justify-between items-end'>
            <h1 className="text-xl font-medium">
                Hello <br /> <span className='text-3xl font-semibold'>{data?data.name:"Admin"} 👋</span>
            </h1>
            <button type="button" className='px-4 py-2 bg-rose-600 hover:bg-rose-600/90 transition-all border-none rounded-sm text-lg font-semibold shadow-[0_0_15px_rgba(100,100,100,0.1)]' onClick={()=>{logOut()}}>Log Out</button>
        </div>
    )
}

export default Header
