// import { useState } from 'react'
import hsImage from '../assets/image 1.png'
import '../App.css'
import { Link, Outlet } from "react-router-dom"
import { useState } from 'react'

function Terms() {
  const [showMatricId, setShowMatricId] = useState(false)

  return (
    <main >
      <div className='flex justify-between mt-30'>
        <div className=' flex-1/2 text-black'>
          <img src={hsImage} alt="" className='h-100 w-100 text-black' />
          <h2 className='justify-self-start ml-7 text-3xl! mt-5' style={{ fontFamily: "TT" }}>Join HISCode today!</h2>
          <p className='ml-7 text-sm justify-self-start text-gray-700' style={{ fontFamily: "TT" }}>The biggest software solutions centre in Africa!</p>
        </div>
        <div className='bg-white ml-20 p-10 rounded-xl flex-1/2 mt-10'>
          <div className='bg-white mb-10 text-black'>
            <div className='mb-10 grid justify-items-stretch '>
              <h1 className='justify-self-start font-sans text-gray-900 text-2xl! font-semibold'>Terms and Conditions</h1>
              <p className='justify-self-start text-sm!'>Last Updated: <span className='text-gray-400 '>May 01, 2022</span></p>
            </div>
            <div className='justify-items-stretch '>
              <p className='max-w object-center text-base text-gray-700 justify-self-start text-left'>This terms and condition describes Our policies and  procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. </p>
              <p className='max-w object-center  text-base text-gray-700 justify-self-start text-left mb-4'>
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
              <p className='max-w text-base text-gray-900 justify-self-start text-left font-semibold'>Interpretations and Definitions</p>
              <p className='max-w object-center  text-base text-gray-700 justify-self-start text-left'>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            </div>
            <div className='mb-5 grid justify-items-stretch mt-5'>
              <h1 className='justify-self-start font-sans text-gray-900 text-2xl! font-semibold'>Privacy Policy</h1>
              <p className='justify-self-start text-sm!'>Last Updated: <span className='text-gray-400 '>May 01, 2022</span></p>
            </div>
            <div>
              <p className='max-w object-center  text-base text-gray-700 justify-self-start text-left'>This privacy policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. </p>
            </div>
            <div className='flex mb-10 mt-10 gap-4'>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={showMatricId}
                  onChange={(e) => setShowMatricId(e.target.checked)}
                />
                <div className="w-6 h-6 bg-gray-50 rounded-sm peer peer-checked:bg-gray-50 relative transition-colors duration-300 border-3 border-solid border-gray-700 text-gray-950 align-top font-black">
                  <p className='self-start align-text-top font-black'>{showMatricId ? "✓" : " "}</p>
                </div>
              </label>
              <p className='text-sm '>I agree and accept the terms of the privacy and user agreement.</p>
            </div>
            {/* opacity-100 peer-checked:opacity-100 */}

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

export default Terms
