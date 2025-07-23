// import { useState } from "react";
// import { Link } from "react-router-dom";
import hsLogo from "../assets/logo.png"
import flagNg from "../assets/flag-ng.png"
import flagGh from "../assets/flag-gh.png"
import flagKy from "../assets/flag-ky.png"
import arrow from "../assets/Chevron_Down.png"
import { useState } from "react";

// const countries = [
//   { name: "Nigeria", flag: flagNg },
//   { name: "Ghana", flag: flagGh },
//   { name: "Kenya", flag: flagKy }
// ];
// const [country, setCountry] = useState({ name: "Nigeria", flag: flagNg })
// type obj = {
//   name: string,
//   flag: string
// }

// function Options({ countries } : obj[]) {
//   // const countries = [
//   //   { name: "Nigeria", flag: flagNg },
//   //   { name: "Ghana", flag: flagGh },
//   //   { name: "Kenya", flag: flagKy }
//   // ];
//   // const [country, setCountry] = useState(countries[0])
//   return (
//     <div>
//       <div className="flex justify-between cursor-pointer" onClick={() => { setCountry(countries[0]) }}>
//         <img src={flagNg} alt="" className="h-6 w-8 mr-2" />
//         <p className="mr-4">Nigeria</p>
//       </div>
//       <div className="flex justify-between cursor-pointer" onClick={() => { setCountry(countries[1]) }}>
//         <img src={flagGh} alt="" className="h-6 w-8 mr-2" />
//         <p className="mr-4">Ghana</p>
//       </div>
//       <div className="flex justify-between cursor-pointer" onClick={() => { setCountry(countries[2]) }}>
//         <img src={flagKy} alt="" className="h-6 w-8 mr-2" />
//         <p className="mr-4">Kenya</p>
//       </div>
//     </div>
//   )
// }

export default function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false);
  const countries = [
    { name: "Nigeria", flag: flagNg },
    { name: "Ghana", flag: flagGh },
    { name: "Kenya", flag: flagKy }
  ];
  const [country, setCountry] = useState(countries[0])
  const [showCountry, setShowCountry] = useState(false)
  // const updateCountry = () => {

  // }
  // const country = ["Nigeria", "Ghana", "Kenya"];

  return (
    <>
      <div className="bg-white text-white  flex justify-between items-center px-4 py-6 fixed top-0 left-0 w-full z-50 ">
        <img src={hsLogo} className="left-align ml-20" />
        <div className=" text-black ">


          <div className="flex border-2 p-4 rounded-xl mr-15">
            <img src={country.flag} alt="" className="h-6 w-8 mr-3" />
            <p className="mr-3">{country.name}</p>
            <img src={arrow} onClick={() => { setShowCountry(prev => !prev) }} />
          </div>


          {/* ================================== */}

          {showCountry ?


            <div className="mt-8 absolute bg-white p-1 border-2">
              <div className="flex justify-between cursor-pointer mb-4 px-4 py-2" onClick={() => { setCountry(countries[0]) }}>
                <img src={flagNg} alt="" className="h-6 w-8 mr-2" />
                <p className="mr-4 ">Nigeria</p>
              </div>
              <div className="flex justify-between cursor-pointer mb-4 px-4 py-2" onClick={() => { setCountry(countries[1]) }}>
                <img src={flagGh} alt="" className="h-6 w-8 mr-2" />
                <p className="mr-4 ">Ghana</p>
              </div>
              <div className="flex justify-between cursor-pointer px-4 py-2" onClick={() => { setCountry(countries[2]) }}>
                <img src={flagKy} alt="" className="h-6 w-8 mr-2" />
                <p className="mr-4">Kenya</p>
              </div>

            </div>

            : ""

          }

        </div>
      </div>
    </>
  );
}





