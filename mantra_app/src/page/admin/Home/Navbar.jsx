import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavigationItems } from './Constant/Constants'
import { CloseIcon } from './Svg/Svg'

const Navbar = ({ ShowSidebar, setShowSidebar }) => {
    const route = useLocation()
    const { pathname } = route;
    let Route = pathname.split('/')[3];
    return (
        <div >
            <aside className="flex flex-col w-64 h-[calc(100vh-4rem)] px-4 py-7 overflow-y-auto bg-gray-200 border-r  ">
                <h1 className='md:hidden absolute right-3 top-3 ' onClick={() => setShowSidebar(!setShowSidebar)}>
                    {CloseIcon}
                </h1>
                <div className="flex flex-col justify-between flex-1">
                    <nav>
                        {
                            NavigationItems.map((item, i) => {
                                return (
                                    <Link key={i} to={item.path} onClick={()=>setShowSidebar(!ShowSidebar)} className={`flex items-center px-4 py-2 my-4 text-gray-700  rounded-md  
                                   ${Route === item.path.split('/')[3] ? 'bg-gray-300' : null}
                                   `} >
                                        <span className="mx-4 font-medium">{item.name}</span>
                                    </Link>
                                )
                            })
                        }
                    </nav>

                </div>
            </aside>
        </div >
    )
}

export default Navbar