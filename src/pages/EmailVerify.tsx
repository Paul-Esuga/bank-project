// import { useState } from 'react'
import '../App.css'
import { Link, Outlet } from "react-router-dom"
import { useState } from 'react'
import lock from '../assets/lock.svg'

function EmailVerify() {
  const [showMatricId, setShowMatricId] = useState(false)

  return (
    <main >
      <div className='flex justify-between mt-30 lg:gap-60'>
        <div className=' flex-1/2 text-black justify-items-end-safe'>
          <img src={lock} alt="" className='h-100 w-full text-black  aspect-square' />
          <div className='ml-10 lg:ml-25 justify-self-start'>
            <h2 className='text-2xl! mt-5 w-[70%] md:w-[80%] sm:w-[90%] text-left' style={{ fontFamily: "TT" }}>Your account is secured</h2>
            <p className='text-sm text-left text-gray-700 ' style={{ fontFamily: "TT" }}>It is important for us to verify that the email address belongs to you, so that we can secure your financial transactions.</p>
          </div>
        </div>
        <div className='bg-white ml-20 p-10 rounded-xl flex-1/2 mt-10'>
          <div className='bg-white mb-10 text-black'>
            <div>
              <div className='mb-10 grid justify-items-stretch '>
                <h1 className='justify-self-center font-sans text-gray-900 text-2xl! font-semibold'>Confirm Email Address</h1>
                <p className='justify-self-start text-base! text-gray-400'>Enter 4-digit code we have sent to your email address: iakinyemi@ecobank.com.</p>
                <Link to="/" style={{ color: '#0282AD', fontSize: '14px' }} >Not my email address </Link>
              </div>
              <input type="number" name="" id="" />
              <div className='mt-10 mb-10'>
                <p>Didn't receive the code?</p>
                <Link to="/" style={{ color: '#0282AD', fontSize: '14px' }} >Resend the Code</Link>
              </div>
            </div>

            {showMatricId ? <button className='bg-[#006B3F] text-white w-[100%] rounded-sm p-2 mt-1'>
              <Link to="/verify" style={{ color: 'white' }} >Proceed to create account </Link>
            </button> : <button className='bg-[#006B3F] text-white w-[100%] rounded-sm p-2 mt-1 opacity-50'>
              <p style={{ color: 'white' }} >Proceed to create account </p>
            </button>}

          </div>


        </div>
      </div>
      <Outlet />
    </main>
  )
}

export default EmailVerify
