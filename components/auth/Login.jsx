import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    // Construct the request body
    const data = {
      username: email,
      password: password,
    };
    // Make the API request
    fetch('https://loginapitp.herokuapp.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        
        // Handle the response from the API
        if(data.statusCode === 400) {
          setErrors(data.errors)
        }
        console.log ('data ' + JSON.stringify(data));
        // Add your logic to handle the response here
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center font-general-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light ">
      <h1 className="text-3xl font-bold mb-8">Sign in to your account</h1>
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
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light" htmlFor="password">
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
        <div className='bg-red-50 mb-5'>
          {errors.length > 0 && (
            <ul>
              {errors.map((error, index) => (
                <li className='text-red-600' key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center justify-between">
          <Link href="/forgotpass" passHref>
            <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:underline">
                Forgot your password?
            </span>
          </Link>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log in
          </button>
        </div>
        <div className='mt-16 text-center'>
          Do not have an account?{" "}
          <Link href="/signup" passHref>
            <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:underline">
                Sign up
            </span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login;