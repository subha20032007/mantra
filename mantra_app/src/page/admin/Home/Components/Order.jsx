import React from 'react'
import { OrderTitle } from '../Constant/Constants'

const Order = () => {
  return (
    <div>
        <h1 className=' text-lg font-bold text-center py-4'>Order</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              {
                OrderTitle.map((item, i) => {
                  return (
                    <th key={i} scope="col" className=" px-4 py-3">
                      {item}
                    </th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
              <td className="p-4">
                <img  src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww" className=' h-10' alt="Product img" />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 ">
                Titan Watch
              </td>
              <td className="px-6 py-4">
                2
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 ">
                $599
              </td>
              <td className="px-6 py-4">
                <button className="font-medium text-red-600  hover:underline">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Order