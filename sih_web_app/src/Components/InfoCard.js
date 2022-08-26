import React from "react";
import Icon from "@material-tailwind/react/Icon";

function InfoCard(data) {
  return (
    <>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
      <div class="px-4 mb-10">
        <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
          <div class="flex flex-wrap border-b border-gray-200 undefined">
            <div class="bg-gradient-to-tr from-pink-500 to-pink-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-pink mb-0">
              <Icon name="local_hospital" size="3xl" color="white" />
            </div>
            <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
              <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
                No. of Public Hospitals
              </h5>
              <span class="text-3xl text-gray-900">{data.data.Hospitals}</span>
            </div>
          </div>
          <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
            <span class="font-light whitespace-nowrap">
              These are the Number of Hospitals in the Cluster
            </span>
          </div>
        </div>
      </div>
      <div class="px-4 mb-10">
        <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
          <div class="flex flex-wrap border-b border-gray-200 undefined">
            <div class="bg-gradient-to-tr from-orange-500 to-orange-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-orange mb-0">
              <span class="material-icons text-white text-3xl leading-none">
                water
              </span>
            </div>
            <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
              <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
                Protected Water Supply
              </h5>
              <span class="text-3xl text-gray-900">
                {data.data["Protected Water Supply Sources"]}
              </span>
            </div>
          </div>
          <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
            <span class="font-light whitespace-nowrap">
              No. of Protected Water Supply source
            </span>
          </div>
        </div>
      </div>
      <div class="px-4 mb-10">
        <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
          <div class="flex flex-wrap border-b border-gray-200 undefined">
            <div class="bg-gradient-to-tr from-purple-500 to-purple-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-purple mb-0">
              <span class="material-icons text-white text-3xl leading-none">
                electric_bolt
              </span>
            </div>
            <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
              <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
                Electricity-Domestic
              </h5>
              <span class="text-3xl text-gray-900">
                {data.data["Electricity-Domestic Connection"]}
              </span>
            </div>
          </div>
          <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
            <span class="font-light whitespace-nowrap">
              No. of Domestic Electricity Connections
            </span>
          </div>
        </div>
      </div>
      <div class="px-4 mb-10">
        <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
          <div class="flex flex-wrap border-b border-gray-200 undefined">
            <div class="bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-blue mb-0">
              <span class="material-icons text-white text-3xl leading-none">
                school
              </span>
            </div>
            <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
              <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
                Govt Schools
              </h5>
              <span class="text-3xl text-gray-900">
                {data.data["Govt. Secondary Schools"]}
              </span>
            </div>
          </div>
          <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
            <span class="font-light whitespace-nowrap">
              No. of Govt Secondary Schools
            </span>
          </div>
        </div>
      </div>
    </div>



    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
    <div class="px-4 mb-10">
      <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
        <div class="flex flex-wrap border-b border-gray-200 undefined">
          <div class="bg-gradient-to-tr from-pink-500 to-pink-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-pink mb-0">
            <Icon name="inventory" size="3xl" color="white" />
          </div>
          <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
            <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
                Storage Sources
            </h5>
            <span class="text-3xl text-gray-900">{data.data["System of Storage Sources"]}</span>
          </div>
        </div>
        <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
          <span class="font-light whitespace-nowrap">
            These are total Number of water Storage sources 
          </span>
        </div>
      </div>
    </div>
    <div class="px-4 mb-10">
      <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
        <div class="flex flex-wrap border-b border-gray-200 undefined">
          <div class="bg-gradient-to-tr from-orange-500 to-orange-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-orange mb-0">
            <span class="material-icons text-white text-3xl leading-none">
              bed
            </span>
          </div>
          <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
            <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
              Hospital Beds
            </h5>
            <span class="text-3xl text-gray-900">
              {data.data["Hospital Beds"]}
            </span>
          </div>
        </div>
        <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
          <span class="font-light whitespace-nowrap">
            No of Hospital Beds in the Cluster
          </span>
        </div>
      </div>
    </div>
    <div class="px-4 mb-10">
      <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
        <div class="flex flex-wrap border-b border-gray-200 undefined">
          <div class="bg-gradient-to-tr from-purple-500 to-purple-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-purple mb-0">
            <span class="material-icons text-white text-3xl leading-none">
              electric_bolt
            </span>
          </div>
          <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
            <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
              Electricity-Industrial
            </h5>
            <span class="text-3xl text-gray-900">
              {data.data["Electricity-Industrial Connection"]}
            </span>
          </div>
        </div>
        <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
          <span class="font-light whitespace-nowrap">
            No. of Industrial Electricity Connections
          </span>
        </div>
      </div>
    </div>
    <div class="px-4 mb-10">
      <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
        <div class="flex flex-wrap border-b border-gray-200 undefined">
          <div class="bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-blue mb-0">
            <span class="material-icons text-white text-3xl leading-none">
              school
            </span>
          </div>
          <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
            <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
              Govt Colleges
            </h5>
            <span class="text-3xl text-gray-900">
              {data.data["Govt. Colleges"]}
            </span>
          </div>
        </div>
        <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
          <span class="font-light whitespace-nowrap">
            No. of Govt Colleges
          </span>
        </div>
      </div>
    </div>
  </div>


  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
  <div class="px-4 mb-10">
    <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
      <div class="flex flex-wrap border-b border-gray-200 undefined">
        <div class="bg-gradient-to-tr from-pink-500 to-pink-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-pink mb-0">
          <Icon name="local_hospital" size="3xl" color="white" />
        </div>
        <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
          <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
          Child Welfare Centers
          </h5>
          <span class="text-3xl text-gray-900">{data.data["Maternity and Child Welfare Centres"]}</span>
        </div>
      </div>
      <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
        <span class="font-light whitespace-nowrap">
          These are the Number of child Welffare Centers 
        </span>
      </div>
    </div>
  </div>
  <div class="px-4 mb-10">
    <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
      <div class="flex flex-wrap border-b border-gray-200 undefined">
        <div class="bg-gradient-to-tr from-orange-500 to-orange-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-orange mb-0">
          <span class="material-icons text-white text-3xl leading-none">
            water
          </span>
        </div>
        <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
          <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
            No. Of Doctors
          </h5>
          <span class="text-3xl text-gray-900">
            {data.data["Total Number of Doctors"]}
          </span>
        </div>
      </div>
      <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
        <span class="font-light whitespace-nowrap">
          No. of Available Doctors.
        </span>
      </div>
    </div>
  </div>
  <div class="px-4 mb-10">
    <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
      <div class="flex flex-wrap border-b border-gray-200 undefined">
        <div class="bg-gradient-to-tr from-purple-500 to-purple-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-purple mb-0">
          <span class="material-icons text-white text-3xl leading-none">
            account_balance
          </span>
        </div>
        <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
          <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
          Co-operative Banks
          </h5>
          <span class="text-3xl text-gray-900">
            {data.data["Co-operative Bank"]}
          </span>
        </div>
      </div>
      <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
        <span class="font-light whitespace-nowrap">
          No. of Co-operating Banks in the cluster
        </span>
      </div>
    </div>
  </div>
  <div class="px-4 mb-10">
    <div class="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
      <div class="flex flex-wrap border-b border-gray-200 undefined">
        <div class="bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-blue mb-0">
          <span class="material-icons text-white text-3xl leading-none">
            water
          </span>
        </div>
        <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
          <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">
          Drainage Systems
          </h5>
          <span class="text-3xl text-gray-900">
            {data.data["Drainage Systems"]}
          </span>
        </div>
      </div>
      <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
        <span class="font-light whitespace-nowrap">
          Type of Drainage System                                                                                                                                                                                                                             
        </span>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default InfoCard;
