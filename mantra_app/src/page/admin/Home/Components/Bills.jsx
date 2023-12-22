import React from 'react'
import { BillTitle } from '../Constant/Constants'

const Bills = () => {
  return (
    <div>
      <section className="container px-4 mx-auto">
        <h1 className=' text-xl text-center font-bold py-2'>Bills</h1>
        <div className="flex flex-col mt-5">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50 ">
                    <tr>
                      {
                        BillTitle.map((item, i) => {
                          return (
                            <th key={i} scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                              <span>{item}</span>
                            </th>
                          )
                        })
                      }
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <span>#3062</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <img className="object-cover w-8 h-8 rounded-full" src='https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' alt="" />
                          <div>
                            <h2 className="text-sm font-medium text-gray ">Binod Taru</h2>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">Jan 4, 2022</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 ">
                          <h2 className="text-sm font-normal text-green-600">Paid</h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">Titan watch</td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            View
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

export default Bills