import { useState } from 'react'
import hsImage from './assets/image 1.png'
import cowboy from './assets/cowboy.png'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App({ countryCode, setEmailValue }: { countryCode: string; emailValue: string; setEmailValue: any }) {
  type AccountType = 'PAYMENT ACCOUNT' | 'SAVINGS ACCOUNT' | 'CURRENT ACCOUNT'
  const accounts: AccountType[] = ['PAYMENT ACCOUNT', 'SAVINGS ACCOUNT', 'CURRENT ACCOUNT']
  const [pickObj, setPickObj] = useState<Record<AccountType, boolean>>({
    'PAYMENT ACCOUNT': false,
    'SAVINGS ACCOUNT': false,
    'CURRENT ACCOUNT': false
  })
  const updatePickObj = (key: AccountType, value: boolean) => {
    setPickObj(prev => {
      return {
        ...prev, [key]: value
      }

    })
  }
  const [num, setNum] = useState('')
  const [email, setEmail] = useState('')
  function handleNumField(e: any) {
    if (isNaN(e.target.value)) { e.preventDefault() }
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
          <form className=''>
            <div className='justify-items-start'>
              {num ?
                <div className='left '>
                  <label htmlFor='num' className='text-gray-500 text-left justify-self-start w-full focus:text-green-700'>Enter your mobile number</label>

                </div>
                : <div></div>
              }
              <div className='flex w-full  border-2 border-b-gray-400 pb-0 mb-6'>
                {num ?
                  <div className='text-gray-600 align-top pb-1 mr-2'>{countryCode}</div>
                  : <div></div>}
                <input type="text"
                  name="Mnum"
                  value={num}
                  inputMode='numeric'
                  onChange={(e) => {
                    setNum(e.target.value)
                    handleNumField(e)
                  }}
                  id="num"
                  required
                  placeholder='Enter your mobile number'
                  className='pb-1 max-w-50 w-full h-[8%] leading-14 text-black rounded-0 focus:border-0 focus:outline-0  focus:label' />
              </div>
            </div>
            <div className='justify-items-start'>
              {email ?
                <div className='left '>
                  <label htmlFor='num' className='text-gray-500 text-left justify-self-start w-full focus:text-green-700'>Enter your email address</label>

                </div>
                : <div></div>
              }
              <input type="text"
                name="Email Address"
                id=""
                placeholder='Enter your email address'
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className='w-full h-[8%] text-black mb-4 rounded-0 focus:border-0 pb-2 focus:outline-0 border-b-2 border-b-gray-400 focus:border-b-2 focus:border-b-gray-400' />
            </div>
            <p className='flex text-black mb-2 mt-2'>SELECT ACCOUNT TYPE:</p>
            <div className='flex'>
              {accounts.map((acc) => {
                return (
                  <div
                    onClick={() => {
                      updatePickObj(acc, !pickObj[acc]);
                      let x = accounts
                      if (pickObj[acc] == false) {
                        const pick = document.getElementById(acc)
                        x = x.filter(item => item !== acc)
                        const np1 = document.getElementById(x[0])
                        const np2 = document.getElementById(x[1])
                        pickObj[x[0]] = false
                        pickObj[x[1]] = false
                        pick?.classList.add('color')
                        pick?.classList.remove('notcolor')
                        np1?.classList.add('notcolor')
                        np2?.classList.add('notcolor')
                      } else {
                        const pick = document.getElementById(acc)
                        pick?.classList.add('notcolor')
                        pick?.classList.remove('color')
                      }
                      console.log('\npickObj after the click: ', pickObj)

                    }}
                  >
                    <div
                      className='border-1 border-gray-400  p-2 cursor-pointer text-[#6a7282]' id={acc}
                    >
                      {acc}
                    </div>
                  </div>)
              }

              )}
            </div>
            <div className='flex text-gray-500 border-1 border-gray-100 text-sm mb-8'>
            </div>
            <div>
              {((pickObj['PAYMENT ACCOUNT'] || pickObj['SAVINGS ACCOUNT'] || pickObj['CURRENT ACCOUNT']) && email && num)
                ?
                <button className='bg-[#006B3F] text-white w-[100%] rounded-sm p-2 mt-1' onClick={setEmailValue(email)}>
                  <Link to="/terms" style={{ color: 'white' }} >Proceed </Link>
                </button>
                :
                <div className='bg-[#006B3F] text- w-[100%] rounded-sm p-2 mt-9 opacity-50
                 abs'>
                  <p style={{ color: 'white' }} >Proceed </p>
                </div>}
            </div>
          </form>
        </div>
      </div>
      <Outlet />
    </main>
  )
}

export default App





