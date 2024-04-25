import { useState } from 'react'

function App() {

  return (
    <div className="container max-w-lg mx-auto mt-4">
      <h1 className="mb-8 text-3xl text-center">Form User</h1>
      <div className='flex items-center mb-4'>
        <label className='shrink w-[150px]'>First Name:</label>
        <input 
          type="text"
          className="block border border-grey-light w-full p-3 rounded"
          name="first_name"
          placeholder="First Name" />
      </div>
      <div className='flex items-center mb-4'>
        <label className='shrink w-[150px]'>Last Name:</label>
        <input 
          type="text"
          className="block border border-grey-light w-full p-3 rounded"
          name="last_name"
          placeholder="Last Name" />
      </div>
      <div className='flex items-center mb-4'>
        <label className='shrink w-[150px]'>Email:</label>
        <input 
          type="email"
          className="block border border-grey-light w-full p-3 rounded"
          name="email"
          placeholder="Email" />
      </div>
      <div className='flex items-center mb-4'>
        <label className='shrink w-[150px]'>Gender:</label>
        <div className='flex grow'>
          <div>
              <input type="radio" id="male" name="gender" value="male"  />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>

        </div>
      </div>
      <div className='flex items-center mb-4'>
        <label className='shrink w-[150px]'>Status:</label>
        <select id="status" name="status" className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none">
          <option selected>Choose a status</option>
          <option value="new">New</option>
          <option value="registered">Registered</option>
          <option value="pending">Pending Approval</option>
        </select>
      </div>
     
    </div>
  )
}

export default App
