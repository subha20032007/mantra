import React from 'react'

const Add_Product = () => {
  return (
    <div className=' flex justify-center w-full mx-auto '>
      <section className=" lg:w-[70rem] -mt-5 ">
        <div className="py-8 px-4 mx-auto max-w-2xl ">
          <h2 className="mb-4 text-xl font-bold  text-center text-gray-900 ">Add a new product</h2>
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Product Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50  text-gray-900 text-sm rounded-lg  outline-none border-2 border-gray-300 focus:border-blue-500  block w-full p-2.5 " placeholder="Type product name" required="" />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Product Image</label>
                <input type="file" name="name" id="name" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Type product name" required="" />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Brand</label>
                <input type="text" name="brand" id="brand" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5 " placeholder="Product brand" required="" />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                <input type="text" name="price" id="price" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-600 outline-none  block w-full p-2.5 " placeholder="$2999" required="" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                <select id="category" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none  block w-full p-2.5 ">
                  <option  defaultValue>Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Color</label>
                <input type="text" name="item-weight" id="item-weight" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-600  outline-none block w-full p-2.5 " placeholder="Green" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                <textarea id="description" rows="4" className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:border-blue-500 outline-none " placeholder="Your description here"></textarea>
              </div>
            </div>
            <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700  rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
              Add product
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Add_Product