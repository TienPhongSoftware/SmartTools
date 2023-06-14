import Link from 'next/link'

function CheckMail() {
    return (
        <div className="text-center mt-16  pb-14">
            <h1 className="text-4xl mb-4 font-medium">Check your email</h1>
            <h3 className='text-2xl mb-4'>We sent you a message to verify your email address.</h3>
            <p className='mb-4'>If you do not receive a verification email within 5 minutes , try checking your junk email folder</p>
            <Link href='' className=' text-blue-500 hover:text-blue-800 hover:underline'>Resend email</Link>
        </div>
    )
}

export default CheckMail;