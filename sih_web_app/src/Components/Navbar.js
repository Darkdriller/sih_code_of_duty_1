import React, { useEffect, useState } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import useFetch from "react-fetch-hook";
import Select from "react-select";
// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <Link
//             to="/"
//             className="navbar-logo flex items-center"
//             onClick={closeMobileMenu}
//           >
//             Shyam Prasad Mukherji Rurban Mission
//             <i className="fab fa-typo3" />
//           </Link>
//           <div className="menu-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"} />
//           </div>
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/map" className="nav-links" onClick={closeMobileMenu}>
//                 Map
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/leaderboard"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Leaderboard
//               </Link>
//             </li>
//             {/* <li className="nav-item">
//               <Link
//                 to="/smart_analysis"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Smart Analysis
//               </Link> */}
//             {/* </li> */}
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }
// import React from 'react''
// import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
function CallApi(param, value) {
  const { data, error } = useFetch("http://localhost:8080/search", {
    method: "post",
    headers: { Accept: "application/json" },
    body: JSON.stringify({ access_token: param, name: value }),
    credentials: "same-origin",
  });
  console.log({ access_token: param, name: value });
  return data;
}
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [Stateval, setStateval] = useState(null);
  const [Distval, setDistval] = useState(null);
  const [Panchval, setPanchval] = useState(null);
  const [submit,setsubmit] = useState(null);
  var state_data = CallApi("st", null);
  var dist_data = CallApi("st-dst", Stateval);
  var panch_data = CallApi("st-dst-pct", [Stateval, Distval]);
  var clusterIdx=CallApi("clst",[Stateval,Distval,Panchval]);
  function toggleModal() {
    setIsOpen(!isOpen);
    setDistval(null);
    setPanchval(null);
    setStateval(null);
  }
  function HandleSubmit(){
    setsubmit(true)
    console.log(clusterIdx)
    clusterIdx?window.location.href=`/Cluster/${clusterIdx[0].Clusteridx}`:void(0);
  }

  return (
    <div class="px-4 sm:px-6 md:px-8">
      <div class="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
        <Link
          viewBox="0 0 248 31"
          class="text-slate-900 dark:text-white w-auto h-5"
          to="/"
        >
          Shyam Prasad Mukherji Rurban Mission
        </Link>
        <div class="flex items-center">
          <button
            type="button"
            class="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-centernp dark:hover:text-slate-300"
            onClick={toggleModal}
          >
            <span class="sr-only">Search</span>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="false"
            >
              <path d="m19 19-3.5-3.5"></path>
              <circle cx="11" cy="11" r="6"></circle>
            </svg>
          </button>
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
          >
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select an State
              </label>
              <Select
                defaultValue={Stateval}
                onChange={setStateval}
                options={state_data}
                {...console.log(state_data)}
              />
              <label
                for="countries"
                class="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select a district
              </label>
              <Select
                defaultValue={Distval}
                onChange={setDistval}
                options={dist_data}
                {...console.log(state_data)}
              />
              <label
                for="countries"
                class="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select a Gram Panchayat
              </label>
              <Select
                defaultValue={Panchval}
                onChange={setPanchval}
                options={panch_data}
                {...console.log(state_data)}
              />
            </div>

            <button
              type="submit"
              class=" my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={HandleSubmit}
            
            >
              Submit
            </button>
          </Modal>
          {/* <div class="-my-1 ml-2 -mr-1 md:hidden">
            <button
              type="button"
              class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span class="sr-only">Navigation</span>
              <svg width="24" height="24" fill="none" aria-hidden="true">
                <path
                  d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div> */}
          <div class="md:flex items-center">
            <nav>
              <ul class="flex items-center space-x-8">
                <li>
                  <a
                    class="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/map"
                  >
                    Maps
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://tailwindui.com/?ref=top"
                    class="hover:text-sky-500 dark:hover:text-sky-400"
                  >
                    Components
                  </a>
                </li> */}
                <li>
                  <a
                    class="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/leaderboard"
                  >
                    Leaderboard
                  </a>
                </li>
                {/* <li>
                  <a
                    class="hover:text-sky-500 dark:hover:text-sky-400"
                    href="https://jobs.tailwindcss.com/?ref=top"
                  >
                    Jobs
                    <span class="ml-2 font-medium text-xs leading-5 rounded-full text-sky-600 bg-sky-400/10 px-2 py-0.5  dark:text-sky-400">
                      New
                    </span>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
