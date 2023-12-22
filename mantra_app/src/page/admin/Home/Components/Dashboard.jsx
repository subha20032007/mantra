import React from 'react'
import { DashboardTitle } from '../Constant/Constants'

const Dashboard = () => {
  return (
    <div>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
        <div id="fullWidthTabContent" className="border-t border-gray-200 ">
          <div className=" p-4 bg-white rounded-lg md:p-8 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <div className="grid max-w-screen-xl grid-cols-2  gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3  sm:p-8">
              {
                DashboardTitle.map((item, i) => {
                  return (
                    <div key={i} className="flex m-2 flex-col bg-gray-200 py-10 rounded-lg items-center justify-center">
                      <h1 className="mb-2 text-4xl font-extrabold">{i + 10}+</h1>
                      <h1 className="text-gray-500 ">{item}</h1>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Dashboard