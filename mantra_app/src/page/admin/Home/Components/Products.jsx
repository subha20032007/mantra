import React, { useState } from 'react'
import UpdateModal from './UpdateModal'
import { UpdateIcon } from '../Svg/Svg'
import { ProductTitle } from '../Constant/Constants';

const Products = () => {
    const [IsEdit, setIsEdit] = useState(false);
    return (
        <div>
            {
                IsEdit && <UpdateModal {...{ IsEdit, setIsEdit }} />
            }
                <h1 className=' text-center font-bold py-2 text-lg'>All Products</h1>
            <div className={`relative overflow-x-auto shadow-md sm:rounded-lg `}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            {
                                ProductTitle.map((item, i) => {
                                    return (
                                        <th key={i} scope="col" className="px-6 py-3">
                                            {item}
                                        </th>
                                    )
                                })
                            }

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b  hover:bg-gray-50 ">

                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Titan Watch
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Watch
                            </td>
                            <td className="px-6 py-4">
                                $299
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => setIsEdit(!IsEdit)} className=" text-gray-700  hover:text-black  hover:underline">
                                    {UpdateIcon}
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Products