import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import MapPage from "./MapPage";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl uppercase text-gray-800 font-semibold">
          SPMRM
        </h1>

        <div className="mt-6 font-normal leading-7">
          As per Census of India statistics, the rural population in India,
          stands at 833 million, constituting almost 68% of the total
          population. Further, the rural population has shown a growth of 12%
          and an increase in the absolute number of villages by 2279 units
          during the 2001-2011 period. Large parts of rural areas in the country
          are not stand-alone settlements but part of a cluster of settlements,
          which are relatively proximate to each other. These clusters typically
          illustrate potential for growth, have economic drivers and derive
          locational and competitive advantages. These clusters once developed
          can then be classified as 'Rurban'. Hence taking cognizance of this,
          the Government of India has proposed the Shyama Prasad Mukherji Rurban
          Mission (SPMRM), aimed at developing such rural areas by provisioning
          of economic, social and physical infrastructure facilities. Taking
          also into view, the advantages of clusters, both from an economic view
          point as well as to optimize benefits of infrastructure provision, the
          Mission aims at development of 300 Rurban clusters, in the next five
          years. These clusters would be strengthened with the required
          amenities, for which it is proposed that resources be mobilized
          through convergence of various schemes of the Government, over and
          above which a Critical Gap Funding (CGF) would be provided under this
          Mission, for focused development of these clusters.
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div
          className="md:block hidden"
          style={{
            background:
              "url(https://source.unsplash.com/random/800x800?nature&sig=1) center / cover no-repeat",
          }}
        ></div>

        <div className="px-6 py-16 container mx-auto min-h-[24rem] flex justify-center flex-col">
          <h2 className="text-3xl font-semibold">Mission's Vision</h2>
          <p className="mt-4 leading-7">
            The Shyama Prasad Mukherji Rurban Mission (SPMRM) follows the vision
            of "Development of a cluster of villages that preserve and nurture
            the essence of rural community life with focus on equity and
            inclusiveness without compromising with the facilities perceived to
            be essentially urban in nature, thus creating a cluster of "Rurban
            Villages".
          </p>
        </div>

        <div className="px-6 py-16 container mx-auto min-h-[24rem] flex justify-center flex-col">
          <h2 className="text-3xl font-semibold">Mission's Objectives</h2>
          <p className="mt-4 leading-7">
            The objective of the Shyama Prasad Mukherji Rurban Mission (SPMRM)
            is to stimulate local economic development, enhance basic services,
            and create well planned Rurban clusters.
          </p>
        </div>

        <div
          className="md:block hidden"
          style={{
            background:
              "url(https://source.unsplash.com/random/800x800?nature&sig=2) center / cover no-repeat",
          }}
        ></div>

        <div
          className="md:block hidden"
          style={{
            background:
              "url(https://source.unsplash.com/random/800x800?nature&sig=3) center / cover no-repeat",
          }}
        ></div>

        <div className="px-6 py-16 container mx-auto min-h-[24rem] flex justify-center flex-col">
          <h2 className="text-3xl font-semibold">Mission's Outcomes</h2>
          <p className="mt-4 leading-7">
            The larger outcomes envisaged under this Mission are: i. Bridging
            the rural-urban divide-viz: economic, technological and those
            related to facilities and services. ii. Stimulating local economic
            development with emphasis on reduction of poverty and unemployment
            in rural areas. iii. Spreading development in the region. iv.
            Attracting investment in rural areas.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 px h-[300px]">
        {/* <MapExample /> */}
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
