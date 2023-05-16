/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import Link from 'next/link'

function Signup() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    // Call your signup API here
  }

  return (
    <div className="flex flex-col items-center justify-center font-general-medium">
      <h1 className="text-3xl font-bold mb-8">Create an account</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
            focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="repassword">
            Repeat password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="repassword"
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign up
          </button>
        </div>
          <div className='mt-16 text-center'>
           Already have an account?{" "} 
          <Link href="/login" as="/login">
            <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:underline">
              Log in
            </span>
          </Link>
          </div>
      </form>
    </div>
  )
}

export default Signup;