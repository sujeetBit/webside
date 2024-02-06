

const Contact = () => {
  return (
    <div className=''>
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 py-20       '>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action='https://getform.io/f/15b693f5-8545-4f13-9f3a-2527e7ca8743' method='post' encType='multipaer/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <level className='uppercase text-sm py-2'>Name</level>
                    <input className='border-2 rounded-lg p-3 border-gray-300' type='text' name='name' required='Name'></input>
                </div>
                <div className=' flex flex-col'>
                    <level className='uppercase text-sm py-2'>Phone</level>
                    <input className='border-2 rounded-lg p-3 border-gray-300' type='number' name='phone'></input>
                </div>
            </div>
            <div className=' flex flex-col py-2'>
                <level className='uppercase text-sm py-2'>Email</level>
                <input className='border-2 rounded-lg p-3 border-gray-300' type='text' name='email'></input>
            </div>
            <div className='  flex flex-col py-2'>
                <level className='uppercase text-sm py-2'>Sujbect</level>
                <input className='border-2 rounded-lg p-3 border-gray-300' type='text' name='subject'></input>
            </div>
            <div className=' flex flex-col'>
                <level className='uppercase text-sm py-2'>Massages</level>
                <textarea className='border-2 rounded-lg p-3 border-gray-300' type='text' name='Masasges'></textarea>
            </div>
            <button className=' bg-gray-700 text-white w-full text-center p-5 mt-4 rounded-lg'>
                Send Massages
            </button>
        </form>

    </div>
    </div>
  )
}

export default Contact