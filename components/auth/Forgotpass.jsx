import { useState } from 'react'
import Link from 'next/link'

function Login() {
  const [email, setEmail] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault()
    // Construct the request body
    const data = {
      email: email,
    };
    // Make the API request
    fetch('https://loginapitp.herokuapp.com/api/users/forgetpassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log(data);
        // Add your logic to handle the response here
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center font-general-medium max-w-sm mx-auto text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light ">
      <h1 className="text-3xl font-bold mb-8">Forgot your password?</h1>
      <p className='text-center text-sm mb-8'>If you can not remember your password, fill in your email below. An email will be sent to you that you can use to reset your password.</p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="flex items-center justify-between">
          
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Continue
          </button>
        </div>
        <div className='mt-16 text-center'>
          <Link href="/login" passHref>
            <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:underline">
                Back to login
            </span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login;