import { useState } from 'react'
import Link from 'next/link'
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik'
import login_validate from '../../lib/validate'
import { useRouter } from 'next/router';
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const formik =  useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: login_validate,
    onSubmit
  })

  async function onSubmit(values){
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/"
        })
        console.log(status)
        if(status.ok) router.push(status.url)
        
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Call your login API here
  }

  return (
    <div className="flex flex-col items-center justify-center font-general-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light ">
      <h1 className="text-3xl font-bold mb-8">Sign in to your account</h1>
      <form onSubmit={formik.handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light" htmlFor="email">
            Email
          </label>
          <div className={`${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            {...formik.getFieldProps('email')}
          />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light" htmlFor="password">
            Password
          </label>
          <div className={`${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            {...formik.getFieldProps('password')}
          />
          </div>
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