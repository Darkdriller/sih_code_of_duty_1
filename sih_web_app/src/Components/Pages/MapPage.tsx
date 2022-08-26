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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MapPage;
