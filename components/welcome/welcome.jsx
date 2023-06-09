import Link from 'next/link'

function Welcome() {
    return (
        <div className="text-center mt-16 ">
            <h1 className="text-4xl mb-5">Welcome to SmartTools!</h1>
            <p className="bg-green-200 inline-block p-2">Please login to use SmartTools services here! <Link href='/login' className=' text-blue-500 hover:text-blue-800 hover:underline'>Login</Link></p>
        </div>
    )
}

export default Welcome;