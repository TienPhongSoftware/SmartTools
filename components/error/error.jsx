import Link from 'next/link'

function Error() {
    return (
        <div className="text-center mt-16 bg-gray-100 pb-14">
            <div className='inline-block'><svg className='' height="150" viewBox="0 0 24 24" width="150" xmlns="http://www.w3.org/2000/svg"><path d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12.0003283,17.9983464 C11.4478622,17.9983464 11,17.5506311 11,16.9983464 C11,16.4460616 11.4478622,15.9983464 12.0003283,15.9983464 C12.5527943,15.9983464 13.0006565,16.4460616 13.0006565,16.9983464 C13.0006565,17.5506311 12.5527943,17.9983464 12.0003283,17.9983464 Z M11.0029544,5.99834639 L13.0036109,5.99834639 L13.0036109,13.9983464 L11.0029544,13.9983464 L11.0029544,5.99834639 Z" fill-rule="evenodd"/></svg></div>
            <h1 className="text-4xl mb-5 font-medium">This user could not be found</h1>
            <Link href='/' className=' text-blue-500 hover:text-blue-800 hover:underline'>Back to the home page</Link>
        </div>
    )
}

export default Error;