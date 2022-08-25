import Footer from "../Footer";
import Navbar from "../Navbar";
import Maps from "../map/chloroindia";
import React from "react";

// const MapPage = () => {
//   return (
//     <>
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-5 gap-8">
//           <div className="col-span-2 h-fit">
//             <Maps />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
const MapPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-6 h-fit">
            <Maps />
          </div>

          <div className="col-span-3">
            <form action="">
              <label htmlFor="state">
                Please select the state to see the cluster report
              </label>
              <select name="state" id="state" className="w-full mt-2">
                <option value="KL">Kerala</option>
                <option value="MP">Madhya Pradesh</option>
              </select>
            </form>

            <div className="mt-6">
              <h3 className="text-xl font-semibold">Selection Procedure</h3>
              <div className="mt-2 border border-gray-700 p-4 bg-gray-50">
                Somethine here
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MapPage;
