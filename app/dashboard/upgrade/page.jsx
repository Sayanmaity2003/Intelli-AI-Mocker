"use client"
import React from 'react'
import PricingPlan from '@/utils/PricingPlan';
import { useUser } from '@clerk/nextjs';
function UpgradePage() {
  const {user} = useUser();
//   return (
//     <div>
//       <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
//     {PricingPlan.map((item, idx)=>(
//       <div key={idx} className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-5 hover:scale-105 hover:shadow-md cursor-pointer transition-all bg-green-100">
//       <div className="text-center">
//         <h2 className="text-lg font-medium text-gray-900">
//           {item.duration}
//           <span className="sr-only">Plan</span>
//         </h2>

//         <p className="mt-2 sm:mt-4">
//           <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> ₹{item.price} </strong>

//           <span className="text-sm font-medium text-gray-700">/{item.duration}</span>
//         </p>
//       </div>

//       {/* <ul className="mt-6 space-y-2">
//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Create 3 Free Mock Interview </span>
//         </li>

//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Unlimited Retake Interview </span>
//         </li>

//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Email support </span>
//         </li>

//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Help center access </span>
//         </li>
//       </ul> */}
//       <ul className="mt-6 space-y-2 leading-8">
//         {item.offering.map((offer, idx)=>(
//           <li className="flex items-center gap-1" key={idx}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             // strokeWidth="1.5"
//             // stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             {/* <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /> */}
//           </svg>
//           <span className="text-gray-700"> {offer.value} </span>
//         </li>
//         ))}
//       </ul>

//       <a
//         href={item.link+'?prefilled_email='+user?.primaryEmailAddress.emailAddress}
//         target='_blank'
//         className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
//       >
//         Get Started
//       </a>
//       </div>
//     ))}
//   </div>
// </div>
//     </div>
//   )




  return(
    <div>
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
  {PricingPlan.map((item, idx)=>(
    <div key={idx} className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
        {item.duration}
          <span className="sr-only">Plan</span>
        </h2>

        {/* <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> ₹{item.price} </strong>

          <span className="text-sm font-medium text-gray-700">/{item.duration}</span>
        </p>

        <a
          
          className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          href={item.link+'?prefilled_email='+user?.primaryEmailAddress.emailAddress}
          target='_blank'
        >
          Get Started
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

        <ul className="mt-2 space-y-2 sm:mt-4">
        {item.offering.map((offer, idx)=>(
          <li className="flex items-center gap-1" key={idx}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>

            <span className="text-gray-700"> {offer.value} </span>
          </li>
        ))}
          
        </ul>
      </div>
    </div>
  ))}
  </div>
</div>
</div>
  );
}

export default UpgradePage;