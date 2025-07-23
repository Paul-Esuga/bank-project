import { useState } from 'react'
import hsImage from './assets/image 1.png'
import cowboy from './assets/cowboy.png'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

const Card = ({ title, bool }: { title: string; bool: boolean }) => {
  // console.log('The values for this card are: \ntitle = ' + title + '\nbool = ' + bool)
  const [account, setAccount] = useState({ backgroundColor: '#FFFFFF', color: '#6a7282' })
  const [accType, setAccType] = useState(bool)
  const removeColor = () => {
    setAccount(() => {
      return {
        backgroundColor: '#FFFFFF', color: '#6a7282'
      }
    })
  }
  return (
    <div onClick={() => {
      removeColor();
      setAccType(!accType);
    }}>

      <div
        className='border-1 border-gray-400  p-2 cursor-pointer' style={{
          backgroundColor: accType ? account.backgroundColor : '#006B3F',
          color: accType ? account.color : 'white'
        }}
      >
        {title}
      </div>
    </div>
  )
}

function App() {
  // const [pick, setPick] = useState(false)
  const [pickObj, setPickObj] = useState({
    pa: false,
    sa: true,
    ca: true
  })
  const updatePickObj = (key: keyof typeof pickObj, value: boolean) => {
    setPickObj(prev => {
      return {
        ...prev, [key]: value
      }

    })
  }

  return (
    <main className='font-TT'>
      <div className='flex justify-between mt-20'>
        <div className=' flex-1/2 text-black'>
          <img src={hsImage} alt="" className='h-100 w-100 text-black' />
          <h1 className='justify-self-start ml-7 text-3xl! mt-5' style={{ fontFamily: "TT" }}>Join HISCode today!</h1>
          <p className='ml-7 text-sm justify-self-start text-gray-700' style={{ fontFamily: "TT" }}>The biggest software solutions centre in Africa!</p>
        </div>
        <div className='bg-white ml-20 p-10 rounded-xl flex-1/2 mt-10'>
          <div className=' text-black'>
            <div className='bg-white mb-10'>
              <div className='flex items-end justify-self-center mb-3'>
                <h1 className='font-sans text-black text-4xl! '>Welcome!</h1>
                <img src={cowboy} alt="" className='bg-tansparent h-8 w-8 ml-1' />
              </div>
              <p className='text-sm max-wbg-red-500 object-center m-auto'>Dear customer, you have requested to open a new account, kindly complete the input fields and select your account type.</p>
            </div>
          </div>
          <form action="submit">
            <input type="text" name="Mobile Number" id="" placeholder='Enter your mobile number' className='w-full h-[5%] text-black mb-4 rounded-0 focus:border-0 pb-2' />
            <input type="text" name="Email Address" id="" placeholder='Enter your email address' className='w-full h-[5%] text-black mb-4 rounded-0 focus:border-0 pb-2' />
            <p className='flex text-black mb-2 mt-2'>SELECT ACCOUNT TYPE:</p>

            <div className='flex text-gray-500 border-1 border-gray-100 text-sm mb-8'>
              {
                <>

                  <div onClick={() => {
                    updatePickObj('pa', !pickObj.pa);
                    !pickObj.pa ? (updatePickObj('sa', true), updatePickObj('ca', true)) : console.log(' ')
                    console.log(pickObj)
                  }}><Card title='PAYMENT ACCOUNT' bool={pickObj.pa} /></div>

                  <div onClick={() => {
                    updatePickObj('sa', !pickObj.sa);
                    !pickObj.sa ? (updatePickObj('pa', true), updatePickObj('ca', true)) : console.log(' ')
                    console.log(pickObj)
                  }}><Card title='SAVINGS ACCOUNT' bool={pickObj.sa} /></div>

                  <div onClick={() => {
                    updatePickObj('ca', !pickObj.ca);
                    !pickObj.ca ? (updatePickObj('pa', true), updatePickObj('sa', true)) : console.log(' ')
                    console.log(pickObj)
                  }}><Card title='CURRENT ACCOUNT' bool={pickObj.ca} /></div>

                </>
              }

            </div>
            <button className='bg-[#006B3F] text-white w-[100%] rounded-sm p-2 mt-1'>
              <Link to="/terms" style={{ color: 'white' }} >Proceed </Link>
            </button>
          </form>
        </div>
      </div>
      <Outlet />
    </main>
  )
}

export default App




// const updateColor = () => {
//   setAccount(prev => {
//     return { ...prev, backgroundColor: '#006B3F', color: 'white' }
//   });
// }
