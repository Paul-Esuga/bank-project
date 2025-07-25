import hsLogo from "../assets/logo.png"
import flagNg from "../assets/flag-ng.png"
import flagGh from "../assets/flag-gh.png"
import flagZm from "../assets/flag-zim.png"
import flagCm from "../assets/flag-cm.png"
import arrow from "../assets/Chevron_Down.png"
import { useState } from "react";


export default function Navbar({ setCountryCode }: { setCountryCode: any }) {
  // const [menuOpen, setMenuOpen] = useState(false);
  let countries = [
    { name: "Nigeria", flag: flagNg },
    { name: "Ghana", flag: flagGh },
    { name: "Zimbabwe", flag: flagZm },
    { name: "Cameroon", flag: flagCm }
  ];
  let flags = [flagNg, flagGh, flagZm, flagCm]
  let nations = ["Nigeria", "Ghana", "Zimbabwe", "Cameroon"]
  const codes = ["+234 -", "+233 -", "+263 -", "+237 -"]
  const [country, setCountry] = useState(countries[0])
  const [showCountry, setShowCountry] = useState(false)
  // const updateCountry = () => {

  // }
  // const country = ["Nigeria", "Ghana", "Kenya"];

  return (
    <>
      <div className="bg-white text-white  flex justify-between items-center px-4 py-6 fixed top-0 left-0 w-full z-50 ">
        <img src={hsLogo} className="left-align ml-20" />
        <div className=" text-black">


          <div className="flex border-3 border-solid p-4 rounded-xl mr-15 w-46 justify-between">
            <img src={country.flag} alt="" className="h-6 w-8 mr-3" />
            <p className="mr-3">{country.name}</p>
            <img src={arrow} onClick={() => { setShowCountry(prev => !prev), console.log('nations after filter:" ', nations) }} className="justify-end " />
          </div>

          <div className="mt-2 absolute bg-white justify-items-start rounded-xl border-2" >
            {showCountry ?
              // 
              (flags = flags.filter(item => item !== country.flag),
                console.log(countries, " and country: ", country),
                countries = countries.filter(item => (item.name !== country.name)),
                console.log(countries, " and country: ", country),
                nations.filter(item => item !== country.name).map((nation, key) => {
                  // console.log('nations in map: ', nations)
                  return (
                    <div className="flex justify-between cursor-pointer py-4 px-4  w-46 border-solid border-1 rounded-md" onClick={() => {
                      setCountry(countries[key])
                      setCountryCode(codes[key])
                      setShowCountry(prev => !prev)

                    }}>
                      <img src={flags[key]} alt="" className="h-6 w-8 mr-2" />
                      <p className="ml-2 " >{nation}</p>
                    </div>
                  )
                }))

              : <p></p>}
          </div>



          {/* {showCountry ?

            nations.map((nation) => {
              <p>hi</p>
            })

            

            : <p>no</p>

          }  */}

        </div>

      </div>
    </>
  );
}

// <div className="mt-8 absolute bg-white p-1 border-2">
//   <div className="flex justify-between cursor-pointer mb-4 px-4 py-2" onClick={() => { setCountry(countries[0]) }}>
//     <img src={flagNg} alt="" className="h-6 w-8 mr-2" />
//     <p className="mr-4 ">Nigeria</p>
//   </div>
//   <div className="flex justify-between cursor-pointer mb-4 px-4 py-2" onClick={() => { setCountry(countries[1]) }}>
//     <img src={flagGh} alt="" className="h-6 w-8 mr-2" />
//     <p className="mr-4 ">Ghana</p>
//   </div>
//   <div className="flex justify-between cursor-pointer px-4 py-2" onClick={() => { setCountry(countries[2]) }}>
//     <img src={flagKy} alt="" className="h-6 w-8 mr-2" />
//     <p className="mr-4">Kenya</p>
//   </div>

// </div>



