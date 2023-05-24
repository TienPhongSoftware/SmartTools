/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import { registerValidate } from '../../lib/validate'
import { useRouter } from 'next/router';
function Signup() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRepassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const router = useRouter()

  const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rePassword: ''
        },
        validate: registerValidate,
        onSubmit
    })

  async function onSubmit(values){
        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup', options)
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000')
            })
    }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // Call your signup API here
  //   if (password !== rePassword) {
  //     setPasswordsMatch(false);
  //     return;
  //   }

  //   setPasswordsMatch(true);
  //   // Tiếp tục xử lý đăng ký
    
  // }

  return (
    <div className="flex flex-col items-center justify-center font-general-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light ">
      <h1 className="text-3xl font-bold mb-8">Create an account</h1>
      <form onSubmit={formik.handleSubmit} className="w-full max-w-sm">
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light" htmlFor="email">
            Email
          </label>
          <div className={`${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
            focus:outline-none focus:shadow-outline"
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
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light" htmlFor="repassword">
            Repeat password
          </label>
          <div className={`${formik.errors.rePassword && formik.touched.rePassword ? 'border-rose-600' : ''}`}>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rePassword"
            type="password"
            placeholder='RePassword'
            value={rePassword}
            onChange={(e) => setRepassword(e.target.value)}
            {...formik.getFieldProps('rePassword')}
          />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign up
          </button>
        
        </div>
          {!passwordsMatch && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
            <p>Incorrect password or Repeat password</p>
          </div>
        )}
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