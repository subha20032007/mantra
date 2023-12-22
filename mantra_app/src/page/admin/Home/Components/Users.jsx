import React from 'react'
import { UserTitle } from '../Constant/Constants'
import { DeleteIcon, UpdateIcon } from '../Svg/Svg'

const Users = () => {
    return (
        <div>
            <section className="container px-4 mx-auto">
                <h1 className=' font-bold text-lg text-center py-2'>Toatal Users - <span className=' text-blue-800'>10</span>    </h1>
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-gray-50 ">
                                        <tr>
                                            {
                                                UserTitle.map((item, i) => {
                                                    return (
                                                        <th key={i} scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                            <div className="flex items-center gap-x-3">
                                                                <span>{item}</span>
                                                            </div>
                                                        </th>
                                                    )
                                                })
                                            }

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 ">
                                        <tr>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">

                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                                                        <h2 className="font-medium text-gray-800 ">Binod Taru</h2>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">abcd@example.com</td>

                                            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">84884843483</td>
                                            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">India</td>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                487482
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                20 ( items )
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                20,000
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="flex items-center gap-x-6">
                                                    <button className="text-gray-500 transition-colors duration-200  hover:text-black focus:outline-none">
                                                        {DeleteIcon}
                                                    </button>
                                                    <button className="text-gray-500 transition-colors duration-200  hover:text-black focus:outline-none">
                                                        {UpdateIcon}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Users