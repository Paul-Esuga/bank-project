import '../App.css'
import { Link, Outlet } from "react-router-dom"
import { useEffect, useState } from 'react'
import lock from '../assets/lock.svg'
import Modal from '../components/Modal'
import success from '../assets/confirm.png'
import Denial from '../components/Denial'
import denialImage from '../assets/denial.jpg'

function EmailVerify({ emailValue }: { emailValue: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const [isTimeout, setIsTimeout] = useState(false)
  const [count, setCount] = useState(179)
  const [otp, setOtp] = useState(new Array(4).fill(""))
  const isFull = (arr: any[]) => { return (arr.every(item => item !== undefined && item !== null && item !== '')) };
  const correct = '1234'


  function handleChange(e: any, index: number) {
    // const {value} = e;
    // const value.substring(value.length - 1)
    if (!isNaN(e.target.value)) {
      setOtp([
        ...otp.map((data, indx) => { return indx == index ? e.target.value : data; }
        )
      ])

      if (e.target.value && e.target.nextSibling) {
        e.target.nextSibling.focus()
      }
      console.log(otp);
    }
    else {
      console.log('else vcalue is ', isNaN(e.target.value))

      return false;
    }
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count - 1)
    }, 1000);

    if (count < 0) {
      setIsTimeout(true)
      setCount(3)
    }
    return () => clearTimeout(timer)
  },)

  function formatTwoDigits(number: number) {
    return String(number).padStart(2, '0')
  }

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
                <p className='justify-self-start text-base! text-gray-400'>Enter 4-digit code we have sent to your email address: {emailValue}</p>
                <Link to="/" style={{ color: '#0282AD', fontSize: '14px' }} >Not my email address </Link>
              </div>
              <div className='flex sm:gap-3 md:gap-3  w-[80%] justify-center justify-self-center'>
                {
                  otp.map((data, index) => {
                    return (
                      <input type="text" name=""
                        onChange={(e) => handleChange(e, index)}
                        maxLength={1}
                        value={data}
                        inputMode='numeric'
                        autoComplete='off'
                        className='border-1 aspect-square rounded-md bg-gray-50 w-12 pl-5 border-[#BCD848] focus:border-[#9EBF3A] outline-0 focus:border-3' />
                    )
                  })
                }
              </div>
              <div className='mt-10 text-black font-semibold mb-8 text-xl'>
                {isTimeout ?
                  <div className='mb-10 font-medium'>
                    <p>Didn't receive the code?</p>
                    <p style={{ color: '#0282AD', fontSize: '14px' }} onClick={() => {
                      setIsTimeout(false); setCount(179); console.log("i'm counting ", count)
                    }}>Resend the Code</p>
                  </div> :
                  (count > 119 ?
                    <div>2 : {formatTwoDigits(count % 60)}</div>
                    : (count > 59 ?
                      <div>1 : {formatTwoDigits(count % 60)}</div> :
                      <div>0 : {formatTwoDigits(count % 60)}</div>
                    ))
                }
              </div>
            </div>
            {isFull(otp) ?
              <button className='bg-[#006B3F] text-white w-[100%] rounded-sm p-2 mt-1 opacity-100 cursor-pointer'
                onClick={() => {
                  otp.join('') == correct ?
                    setIsOpen(true) : setIsClosed(true)
                }
                }>
                <div style={{ color: 'white' }} >Proceed to create account </div>
              </button> :
              <div className='bg-[#006B3F] text-white w-[100%] rounded-sm p-2 mt-1 opacity-50'>
                <p style={{ color: 'white' }} >Proceed to create account </p>
              </div>}

          </div>

          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className='align-middle items-center justify-center rounded-md'>
              <img src={success} alt="" className='justify-self-center w-[35%] mb-10' />
              <h2 className='text-black text-2xl font-semibold mb-2'>Confirmation Successful</h2>
              <p className='text-gray-800 text-sm w-[80%] justify-self-center mb-8'>Dear customer, your email address has been successfully confirmed.</p>
              <button className='bg-[#006B3F] text-white w-[100%] rounded-sm p-2 mt-2 mb-2 opacity-100 cursor-pointer' onClick={() => setIsOpen(false)}>Proceed</button>
            </div>
          </Modal>
          <Denial isClosed={isClosed} onClose={() => setIsClosed(false)}>
            <div className='align-middle items-center justify-center rounded-md'>
              <img src={denialImage} alt="" className='justify-self-center w-[35%] mb-10' />
              <h2 className='text-black text-2xl font-semibold mb-2'>Incorrect OTP</h2>
              <p className='text-gray-800 text-sm w-[80%] justify-self-center mb-8'>Dear customer, your email address has not been confirmed.</p>
              <button className='bg-[#960018] text-white w-[100%] rounded-sm p-2 mt-2 mb-2 opacity-100 cursor-pointer' onClick={() => setIsClosed(false)}>Try again</button>
            </div>
          </Denial>


        </div>
      </div>
      <Outlet />
    </main>
  )
}

export default EmailVerify
