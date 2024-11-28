// "use client"
// import React, { useEffect } from 'react'
// import Image from 'next/image'
// import { UserButton } from '@clerk/nextjs'
// import { usePathname } from 'next/navigation'
// function Header() {

//   const path = usePathname(); 
//   useEffect(()=>{
//     console.log(path);
//   }, []);
//   return (
//     <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
//       <Image src={'/logo.svg'} width={160} height={100} alt='logo'/>
//       <ul className='hidden md:flex gap-6'> {/*initially hidden for small and when screen size is medium flex will apply*/}
//         <li className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${path=='/dashboard'? 'text-indigo-700 font-bold':''}`}>Dashboard</li>
//         <li className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions'? 'text-indigo-700 font-bold':''}`}>Questions</li>
//         <li className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade'? 'text-indigo-700 font-bold':''}`}>Upgrade</li>
//         <li className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how'? 'text-indigo-700 font-bold':''}`}>How it works?</li>
//       </ul>
//       <UserButton/>
//     </div>
//   )
// }

// export default Header
















// "use client";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import { UserButton } from "@clerk/nextjs";
// import { usePathname, useRouter } from "next/navigation"; // Import useRouter for programmatic navigation

// function Header() {
//   const path = usePathname();
//   const router = useRouter(); // Initialize the router to navigate programmatically

//   useEffect(() => {
//     console.log(path);
//   }, [path]);

//   // Function to handle the navigation when a menu item is clicked
//   const handleNavigation = (route) => {
//     router.push(route); // Use router.push to navigate to the specified route
//   };

//   return (
//     <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
//       <Image src={"/logo.svg"} width={160} height={100} alt="logo" />
//       <ul className="hidden md:flex gap-6">
//         <li
//           onClick={() => handleNavigation("/dashboard")} // Navigate to dashboard
//           className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
//             path == "/dashboard" ? "text-indigo-700 font-bold" : ""
//           }`}
//         >
//           Dashboard
//         </li>
//         <li
//           onClick={() => handleNavigation("/dashboard/questions")} // Navigate to questions
//           className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
//             path == "/dashboard/questions" ? "text-indigo-700 font-bold" : ""
//           }`}
//         >
//           Questions
//         </li>
//         <li
//           onClick={() => handleNavigation("/dashboard/upgrade")} // Navigate to upgrade
//           className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
//             path == "/dashboard/upgrade" ? "text-indigo-700 font-bold" : ""
//           }`}
//         >
//           Upgrade
//         </li>
//         <li
//           onClick={() => handleNavigation("/dashboard/how")} // Navigate to how it works
//           className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
//             path == "/dashboard/how" ? "text-indigo-700 font-bold" : ""
//           }`}
//         >
//           How it works?
//         </li>
//       </ul>
//       <UserButton />
//     </div>
//   );
// }

// export default Header;












"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const path = usePathname();
  const router = useRouter();
  const { signOut } = useAuth(); // Clerk's signOut function
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(path);
  }, [path]);

  const handleNavigation = (route) => {
    router.push(route);
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      

      <div className="flex justify-center items-center cursor-pointer" onClick={() => handleNavigation("/dashboard")}>
      <Image src={"/mainlogo.svg"} className="ml-2" width={50} height={50} alt="logo" />
      <span className="ml-2 font-serif text-xl text-violet-800"><strong>IntelliMock</strong></span>
      </div>
      
      {/* Hamburger menu for small screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-indigo-700 focus:outline-none text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Menu for larger screens */}
      <ul className="hidden md:flex gap-14">
        <li
          onClick={() => handleNavigation("/dashboard")}
          className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard" ? "text-indigo-700 font-bold" : ""
          }`}
        >
          Dashboard
        </li>
        <li
          onClick={() => handleNavigation("/dashboard/questions")}
          className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/questions" ? "text-indigo-700 font-bold" : ""
          }`}
        >
          Questions
        </li>
        <li
          onClick={() => handleNavigation("/dashboard/upgrade")}
          className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/upgrade" ? "text-indigo-700 font-bold" : ""
          }`}
        >
          Upgrade
        </li>
        <li
          onClick={() => handleNavigation("/dashboard/how")}
          className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/how" ? "text-indigo-700 font-bold" : ""
          }`}
        >
          How it works?
        </li>
        <UserButton />
      </ul>
      {/* Dropdown menu for smaller screens */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 z-50 md:hidden">
          <ul className="flex flex-col gap-4">
            <li
              onClick={() => handleNavigation("/dashboard")}
              className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard" ? "text-indigo-700 font-bold" : ""
              }`}
            >
              Dashboard
            </li>
            <li
              onClick={() => handleNavigation("/dashboard/questions")}
              className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard/questions" ? "text-indigo-700 font-bold" : ""
              }`}
            >
              Questions
            </li>
            <li
              onClick={() => handleNavigation("/dashboard/upgrade")}
              className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard/upgrade" ? "text-indigo-700 font-bold" : ""
              }`}
            >
              Upgrade
            </li>
            <li
              onClick={() => handleNavigation("/dashboard/how")}
              className={`hover:text-indigo-700 hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard/how" ? "text-indigo-700 font-bold" : ""
              }`}
            >
              How it works?
            </li>
            <li
              onClick={signOut} // Logout option
              className="text-red-600 hover:text-red-800 font-bold transition-all cursor-pointer flex"
            >
              <span className="pr-2">Logout</span> <UserButton />
            </li>
          </ul>
          
        </div>
      )}

    </div>
  );
}

export default Header;



