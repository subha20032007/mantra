import React from 'react'

const Add_Message = () => {
    return (
        <div className=' mt-10'>
            <form className=" w-[24rem] mx-auto  ">
                <div className="mb-5 w-full ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                    <input type="text" className="shadow-sm bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-2.5 " required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">To</label>
                    <select id="category" className="bg-gray-50 border-2 border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option value="TV">Users</option>
                        <option value="PC">Venodors</option>
                        <option value="GA">Employees</option>
                    </select>
                </div>
                <div className="my-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your Message</label>
                    <textarea cols="48" rows="10" className=' focus:border-blue-500 p-2   outline-none rounded-lg resize-none border-2 border-gray-300'></textarea>
                </div>
                <div className="flex justify-center items-start mb-5">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add Message</button>
                </div>
            </form>
        </div>
    )
}

export default Add_Message