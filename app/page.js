import { Button } from "@/components/ui/button";
import Image from "next/image";
// import {Button} from "@/components/ui/button";
export default function Home() {
  return (
    <>


<html className="scroll-smooth"><head><script src='https://cdn.tailwindcss.com/'></script></head><body><div className="bg-white">
    <div className="mx-auto  text-gray-700 body-font fixed left-0 w-full bg-white shadow-md z-50 px-4 sm:px-6 lg:px-8">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 md:flex-row">
            <div className="flex justify-center items-center cursor-pointer">
                <Image src={"/mainlogo.svg"} className="ml-2" width={50} height={50} alt="logo" />
                <a href="#home"><span className="ml-2 font-serif text-xl text-violet-800"><strong>IntelliMock</strong></span></a>
                {/* <a href="/dashboard"><span className="ml-2 font-serif text-xl text-violet-800"><strong>IntelliMock</strong></span></a> */}
            </div>
            <div className="relative flex flex-col md:flex-row items-center">
                <nav className="flex flex-wrap items-center pt-2 pb-2 pb-5 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
                    <a href="#home" className="mr-6 font-medium leading-6 text-gray-600 hover:text-violet-900 hover:font-bold secondary_text link-editable editable">Home</a>
                    <a href="#how" className="mr-6 font-medium leading-6 text-gray-600 hover:text-violet-900 hover:font-bold secondary_text link-editable editable">How It Works</a>
										{/* <a href="#features" className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900 secondary_text link-editable editable">Features</a> */}
										<a href="#pricing" className="mr-6 font-medium leading-6 text-gray-600 hover:text-violet-900 hover:font-bold secondary_text link-editable editable">Pricing</a>
										{/* <a href="#faq" className="mr-6 font-medium leading-6 text-gray-600 hover:text-violet-900 hover:font-bold secondary_text link-editable editable">Faq</a> */}
										{/* <a href="#aboutus" className="mr-6 font-medium leading-6 text-gray-600 hover:text-violet-900 hover:font-bold secondary_text link-editable editable">About Us</a> */}
					                </nav>
                <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                    <a href="/dashboard" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-purple-600 secondary_text link-editable">Sign in</a>
                    <a href="/dashboard" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 secondary_text btn-editable">Sign up</a>
                </div>
            </div>
        </div>
    </div>
</div>
<section id="home">
<div className="bg-gradient-to-b from-white to-white">
	<div className="px-4 py-32 mx-auto max-w-7xl">
	  <div className="w-full mx-auto text-center md:w-11/12 xl:w-8/12 md:text-center">
		<h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold primary_text editable" data-content="website-headlines">Nail Your Next Interview with Intelli Mock's AI-Powered Mock Interviews!</h1>
		<p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal secondary_text editable" data-content="website-subheadlines">Don't leave your interview success to chance. Prepare with Intelli Mock's AI-powered personalized mock interviews, designed specifically for your job, tech stack, and experience level. Sign up now to ace your interviews!</p>
		{/* <form className="flex items-center justify-center w-full pt-1 mx-auto mb-8"> */}
		  {/* <label className="mr-2 mb-0 w-2/4">
			<span className="sr-only">Your Email</span>
			<input className="mt-0 border text-lg border-gray-300 rounded-sm secondary_text px-3 py-3 w-full box-border" type="email" placeholder="Enter your email..." required={true} fdprocessedid="euwhl5"/>
		  </label> */}
		  <a href="/dashboard"><button className="bg-purple-600 text-lg text-white font-medium border border-indigo-600 px-8 py-3 rounded hover:bg-purple-700 secondary_text btn-editable editable" type="submit" fdprocessedid="pbse6q">Get Started</button></a>
		{/* </form> */}
		<div className="flex flex-col justify-start mb-3 space-x-0 space-y-2 text-xs text-gray-600 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
		  <div className="flex items-center">
			
			<p className="text-sm text-gray-600 secondary_text editable"></p>
		  </div>
		  <div className="flex items-center">
			
			<p className="text-sm text-gray-600 secondary_text editable"></p>
		  </div>
		  <div className="flex items-center">
			
			<p className="text-sm text-gray-600 secondary_text editable"></p>
		  </div>
		</div>
	  </div>
	</div>
</div>
</section>

{/* <section id="home">
<div className="bg-white">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
	  <div className="flex flex-col lg:flex-row">
		<div className="max-w-xl pr-16 w-5/12 mb-10">
		  <h5 className="mb-6 text-3xl font-extrabold leading-none text-gray-900 primary_text editable" data-content="website-headlines">Land Your Dream Job with Personalized AI Mock Interviews</h5>
		  <p className="mb-6 text-gray-600 secondary_text editable" data-content="product-descriptions">Ready to land your dream job? With Intelli Mock, you can practice like a pro! Our personalized mock interviews are meticulously crafted to fit your specific job role, tech stack, and experience level. Gain the confidence and skills you need to shine in any interview setting. Don’t leave your future to chance—sign up today and transform the way you prepare for success!</p>
		  <div className="flex items-center">
			<a href="/dashboard"><button  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium text-white transition duration-200 rounded shadow-md bg-purple-600 text-white primary_button_background primary_button_text focus:shadow-outline focus:outline-none btn-editable editable" fdprocessedid="4mhgy">Get started</button></a>
			{/* <a href="/" aria-label="" className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-600 accent_text link-editable editable">Learn more</a> */}
		  {/* </div>
		</div>
		<div className="grid gap-5 w-7/12 row-gap-5 sm:grid-cols-2">
		  <div className="max-w-md" data-content="features">
			<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-50 bg-editable secondary_accent_bg">
			  <svg className="w-12 h-12 text-purple-600 accent_text" stroke="currentColor" viewBox="0 0 52 52">
				<polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
			  </svg>
			</div>
			<h6 className="mb-2 font-semibold leading-5 text-gray-900 primary_text editable" data-subcontent="feature-title">Personalized for success</h6>
			<p className="text-sm text-gray-600 secondary_text editable" data-subcontent="feature-content">Intelli Mock offers personalized mock interview sessions tailored to your job, tech stack, and experience, helping you prepare confidently and land your dream job.</p>
		  </div>
		  <div className="max-w-md" data-content="features">
			<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-50 bg-editable secondary_accent_bg">
			  <svg className="w-12 h-12 text-purple-600 accent_text" stroke="currentColor" viewBox="0 0 52 52">
				<polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
			  </svg>
			</div>
			<h6 className="mb-2 font-semibold leading-5 text-gray-900 primary_text editable" data-subcontent="feature-title">Personalized Practice</h6>
			<p className="text-sm text-gray-600 secondary_text editable" data-subcontent="feature-content"> Intelli Mock provides tailored interview sessions based on your job, tech stack, and experience. Our AI ensures each session targets your needs, boosting your confidence and readiness to succeed.</p>
		  </div>
		  {/* <div className="max-w-md" data-content="features">
			<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-50 bg-editable secondary_accent_bg">
			  <svg className="w-12 h-12 text-purple-600 accent_text" stroke="currentColor" viewBox="0 0 52 52">
				<polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
			  </svg>
			</div>
			<h6 className="mb-2 font-semibold leading-5 text-gray-900 primary_text editable" data-subcontent="feature-title">Personalized Practice</h6>
			<p className="text-sm text-gray-600 secondary_text editable" data-subcontent="feature-content"> With Intelli Mock, you can receive personalized mock interviews based on your specific job, tech stack, and experience. This allows you to practice and improve in areas that are most relevant to your target role, giving you a competitive edge in real interviews. Plus, our AI technology provides realistic</p>
		  </div> */}
		  {/* <div className="max-w-md" data-content="features">
			<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-50 bg-editable secondary_accent_bg">
			  <svg className="w-12 h-12 text-purple-600 accent_text" stroke="currentColor" viewBox="0 0 52 52">
				<polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
			  </svg>
			</div>
			<h6 className="mb-2 font-semibold leading-5 text-gray-900 primary_text editable" data-subcontent="feature-title">Personalized AI mock interviews</h6>
			<p className="text-sm text-gray-600 secondary_text editable" data-subcontent="feature-content"> Say goodbye to generic interview questions and hello to a customized experience with Intelli Mock. Our AI technology analyzes your job, tech stack, and experience to create mock interviews that will help you ace your real ones.</p>
		  </div>
		</div>
	  </div>
	</div>
</div> */}
{/* </section> */} 


<section id="how">
<div className="bg-white">
   <div className="px-4 py-16 mx-auto sm:max-w-7xl md:max-w-7xl lg:max-w-7xl md:px-24 lg:px-8 lg:py-20">
	  <div className="grid gap-6 row-gap-10 lg:grid-cols-2" data-content="how-it-works">
		<div className="lg:py-6 lg:pr-16">
		  <h2 className="mb-8 font-bold text-black text-4xl primary_text editable">How it works</h2>
			<div className="flex" data-subcontent="step_1">
			<div className="flex flex-col items-center mr-4">
			  <div>
				<div className="flex items-center justify-center w-10 h-10 border rounded-full">
				  <svg className="w-4 text-purple-600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
					<line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
					<polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
				  </svg>
				</div>
			  </div>
			  <div className="w-px h-full bg-gray-300"></div>
			</div>
			<div className="pt-1 pb-8 w-full">
			  <p className="mb-2 text-xl text-gray-900 font-bold primary_text editable" data-subcontent="step-title">Choose your job, tech stack, and experience</p>
			  <p className="text-base text-gray-600 secondary_text editable" data-subcontent="step-content">Provide information on your desired job role, the technology you specialize in, and your level of experience.</p>
			</div>
		  </div>
		  <div className="flex" data-subcontent="step_2">
			<div className="flex flex-col items-center mr-4">
			  <div>
				<div className="flex items-center justify-center w-10 h-10 border rounded-full">
				  <svg className="w-4 text-purple-600" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
					<line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
					<polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
				  </svg>
				</div>
			  </div>
			  <div className="w-px h-full bg-gray-300"></div>
			</div>
			<div className="pt-1 pb-8 w-full">
			  <p className="mb-2 text-xl text-gray-900 font-bold primary_text editable" data-subcontent="step-title">Begin your interview</p>
			  <p className="text-base text-gray-600 secondary_text editable" data-subcontent="step-content">Begin your personalized interview  with Intelli Mock by turning your camera and microphone on</p>
			</div>
		  </div>
		  <div className="flex" data-subcontent="step_3">
			<div className="flex flex-col items-center mr-4">
			  <div>
				<div className="flex items-center justify-center w-10 h-10 border rounded-full">
				  <svg className="w-6 text-purple-600" stroke="currentColor" viewBox="0 0 24 24">
					<polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="6,12 10,16 18,8"></polyline>
				  </svg>
				</div>
			  </div>

			</div>
			<div className="pt-1 pb-0 w-full">
			  <p className="mb-2 text-xl text-gray-900 font-bold primary_text editable" data-subcontent="step-title">Recieve Immediate Feedback and tips</p>
			  <p className="text-base text-gray-600 secondary_text editable" data-subcontent="step-content">Receive immediate feedback and tips on how to improve your performance from our AI-powered platform. Continue to practice until you feel confident for your real interview.</p>
			</div>
		  </div>
		</div>
		<div className="relative">
		  <img className="inset-0 object-cover w-full rounded shadow-lg h-96 lg:absolute lg:h-full img-editable" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" alt=""/>
		<p className="photo-credit absolute bottom-3 text-white text-xs right-4 tracking-tight secondary_text font-medium"></p></div>
	  </div>
	</div>
</div>
</section>

<section id="pricing">
<div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 bg-white sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-5xl primary_text editable">Pricing</h2>
          <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-500 secondary_text editable" data-content="website-subheadlines">Prepare for your next interview with confidence using Intelli Mock's personalized AI mock interviews catered to your specific job, tech stack, and experience level. Sign up now for an edge in the competitive job market.</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-content="pricing-features">
        {/* --------------------------------------------------------------------------------------------------------------------- */}
          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col items-start space-y-6">
            <div className="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <div className="mt-4 flex items-baseline">
                <p className="text-5xl font-extrabold tracking-tight text-gray-900 primary_text editable">₹0</p>
                <p className="ml-1 text-xl font-semibold text-gray-900 primary_text editable">/month</p>
              </div>
              {/* <p className="mt-6 text-gray-500 text-base secondary_text editable" data-content="website-subheadlines">Get ahead of the competition and nail your next interview with the help of AI-powered personalized mock interviews from Intelli Mock. Sign up now to ace your dream job!</p> */}

              <hr className="my-6"/>

              <ul role="list" className="space-y-4">
                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature"> ✔️ Create 3 Free Mock Interview</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ Unlimited Retake Interview</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">❌ Practice Question</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">❌ Email Support</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">❌ 1:1 Mentorship</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">❌ Exclusive Features</p>
                </li>
              </ul>
            </div>

            <a href="/dashboard" className="bg-purple-100 text-purple-600 hover:bg-purple-200 mt-8 block w-full py-3 px-6 border-0 rounded-md text-center font-medium transition-all btn-editable">Get Started</a>
          </div>
        {/* --------------------------------------------------------------------------------------------------------------------- */}

          <div className="
              relative
              p-8
              bg-white
              border border-gray-200
              rounded-2xl
              shadow-sm
              flex flex-col
              space-y-6
            ">
            <div className="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>

              <p className="
                  absolute
                  top-0
                  py-1.5
                  px-4
                  bg-purple-600                  rounded-full
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-white
                  transform
                  -translate-y-1/2 secondary_text bg-editable editable
                ">
                Most popular
              </p>
              <div className="mt-4 flex items-baseline text-gray-900">
                <p className="text-5xl font-extrabold tracking-tight text-gray-900 primary_text editable">₹199.99</p>
                <p className="ml-1 text-xl font-semibold text-gray-900 primary_text editable">/month</p>
              </div>
              {/* <p className="mt-6 text-gray-500 text-base secondary_text editable" data-content="website-subheadlines">Get prepared for your dream job with Intelli Mock - the AI-powered mock interview platform that simulates real-life scenarios tailored to your specific job, technology, and experience.</p> */}

              <hr className="my-6"/>

              
              <ul role="list" className="space-y-4">
                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ Create 10 Free Mock Interview</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ Unlimited Retake Interview</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ Practice Question</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ Email Support</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ 1:1 Mentorship</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">❌ Exclusive Features</p>
                </li>

                {/* <li className="flex">
                  <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ Email Support</p>
                </li> */}
              </ul>
            </div>
			<a href="/dashboard" className="bg-purple-600 text-white hover:bg-purple-700 mt-8 block w-full py-3 px-6 border-0 rounded-md text-center font-medium transition-all btn-editable">Get Started</a>
          </div>
        {/* --------------------------------------------------------------------------------------------------------------------- */}

          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col space-y-6">
            <div className="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <div className="mt-4 flex items-baseline text-gray-900">
                <p className="text-5xl font-extrabold tracking-tight text-gray-900 primary_text editable">₹299.99</p>
                <p className="ml-1 text-xl font-semibold text-gray-900 primary_text editable">/month</p>
              </div>
              {/* <p className="mt-6 text-gray-500 text-base secondary_text editable" data-content="website-subheadlines">Master your interviews with the power of artificial intelligence. Our personalized mock interviews are tailored to your specific job, tech stack, and experience, giving you the edge you need to succeed. Sign up now and ace your next interview with Intelli Mock.</p> */}

              <hr className="my-6"/>
              <ul role="list" className="space-y-4">
                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ Create Unlimited Free Mock Interview</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ Unlimited Retake Interview</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ Practice Question</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ Email Support</p>
                </li>

                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ 1:1 Mentorship</p>
                </li>


                <li className="flex">
                  {/* <svg className="flex-shrink-0 w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg> */}
                  <p className="ml-3 text-gray-500 text-base secondary_text w-full editable" data-subcontent="feature">✔️ Exclusive Features</p>
                </li>

              </ul>
            </div>

            <a href="/dashboard" className="bg-purple-100 text-purple-600 hover:bg-purple-200 mt-8 block w-full py-3 px-6 border-0 rounded-md text-center font-medium transition-all btn-editable">Get Started</a>
          </div>
        </div>
      </div>
</div>
</section>

{/* <section id="faq">
<div className="px-4 pt-20 pb-24 mx-auto md:px-2 bg-white">
	<div className="max-w-6xl px-8 mx-auto lg:px-16">
	  <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-3xl primary_text editable">Frequently Asked Questions</h2>
	  <div className="text-sm border-t border-b border-gray-200 divide-y divide-gray-200">
		<div className="faq is_retractable">
		  <div className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none">
			<h4 className="secondary_text text-gray-900 text-base w-full editable" data-content="faq">What is Intelli Mock, and how does it help with interview preparation?**
   - This question allows potential users to understand the core service you offer and its benefits.</h4>
			<svg className="flex-none w-4 h-4 ml-4 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
		  </div>
		  <p className="pb-5 pr-0 text-gray-700 secondary_text text-sm md:pr-40 editable" style={{ display: 'none' }} data-subcontent="faq-answers">At Intelli Mock, we understand the nerves and pressure that come with job interviews. That's why we have developed an innovative AI-powered platform to help you ace your interviews. Our main goal is to provide personalized mock interviews that are tailored to your specific job, tech stack, and experience. This means that you get the most relevant practice for the real thing. Our platform uses cutting-edge technology to simulate real-life interview scenarios, providing you with a realistic and valuable learning experience.</p>
		</div>
		<div className="faq is_retractable">
		  <div className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none">
			<h4 className="secondary_text text-gray-900 text-base w-full editable" data-content="faq">How do personalized mock interviews work?**
   - This question can clarify the process of customizing mock interviews based on a user's job, tech stack, and experience level.</h4>
			<svg className="flex-none w-4 h-4 ml-4 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
		  </div>
		  <p className="pb-5 pr-0 text-gray-700 secondary_text text-sm md:pr-40 editable" style={{ display: 'none' }} data-subcontent="faq-answers">At Intelli Mock, we understand that every job and tech stack require unique skills and experience. That's why our AI-powered platform offers personalized mock interviews tailored specifically to your needs. When you sign up for our service, you will be prompted to input your job title, tech stack, and years of experience. Our intelligent algorithm will then analyze this information and create a customized mock interview that simulates the real thing. This means you will receive questions and scenarios relevant to your specific role and industry, giving you the most realistic practice possible. Our goal is to help you ace your interviews by providing targeted preparation that caters to your individual needs. Sign up now and experience the power of AI in mastering your next interview!</p>
		</div>
		<div className="faq is_retractable">
		  <div className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none">
			<h4 className="secondary_text text-gray-900 text-base w-full editable" data-content="faq">Can I choose specific topics or skills to focus on during my mock interviews?**
   - This addresses the flexibility of your platform and helps users know they can tailor their practice sessions.</h4>
			<svg className="flex-none w-4 h-4 ml-4 transition transform active-ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
		  </div>
		  <p className="pb-5 pr-0 text-gray-700 secondary_text text-sm md:pr-40 editable" style={{ display: 'none' }} data-subcontent="faq-answers">Yes, absolutely! At Intelli Mock, we understand that every job and tech stack requires different skills and knowledge. That's why our personalized mock interviews allow you to choose specific topics and skills to focus on. Whether it's technical skills, communication, or situational questions, our AI will provide targeted practice sessions tailored to your needs. So don't worry about being unprepared for any aspect of your upcoming interview – with Intelli Mock, you'll be fully equipped to ace it! Sign up now and start practicing today.</p>
		</div>
	  </div>
	</div>
</div>
</section> */}

{/* <section id="aboutus">
<div className="bg-purple-50 pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
      <div className="container ">
        <div className="wow fadeInUp bg-white rounded-md" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="items-stretch justify-between flex">
                <div className="w-full px-14 py-12">
                  <span className="mb-2 inline-block text-base font-semibold secondary_text editable text-purple-600 rounded-md">ABOUT US</span>
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px] tracking-tight primary_text editable" data-content="website-headlines">Master Your Interview Skills with Intelli Mock's AI-Powered Platform</h2>
                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal secondary_text editable" data-content="about-us">At Intelli Mock, we understand the importance of a successful interview. That's why we have created an innovative platform that utilizes AI technology to help you ace your interviews.<br/>Our team consists of experienced professionals who have been on both sides of the interviewing process - as candidates and as employers. We know firsthand the challenges and nerves that come with preparing for an interview.<br/>That's why we have developed personalized mock interviews that are tailored to your specific job, tech stack, and experience. Our advanced AI algorithm simulates real interview scenarios, giving you valuable feedback and insights to improve your performance.<br/>We believe that every candidate deserves a fair chance at their dream job, which is why our platform is accessible and affordable for all. With Intelli Mock, you can confidently walk into any interview knowing you have prepared with the best.<br/>So why leave your success up to chance? Sign up with Intelli Mock today and let us help you land your dream job.</p>             
                  <a href="#" className="inline-flex items-center justify-center rounded py-3 px-6 text-base font-semibold text-white transition duration-300 ease-in-out bg-purple-600 hover:bg-purple-700 hover:shadow-lg btn-editable">
                    Learn More
                  </a>
                </div>
                <div className="text-center flex" style={{ maxWidth: '50%' }}>
                  <div className="relative z-10 h-full">
                    <img src="https://images.unsplash.com/photo-1494537449588-7f07cede2556" alt="image" className="mx-auto lg:ml-auto rounded-tr-md rounded-br-md h-full object-cover img-editable active-img"/>
                  <p className="photo-credit absolute bottom-3 text-white text-xs right-4 tracking-tight secondary_text font-medium">Photo by <a href="https://unsplash.com/imperiumnordique?utm_source=copymatic&utm_medium=referral" target="_blank" className="text-white underline">Helena Hertz</a> on <a href="https://unsplash.com/?utm_source=copymatic&utm_medium=referral" target="_blank" className="text-white underline">Unsplash</a></p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</section> */}






<div className="bg-white">
    <div className="pt-16 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-start justify-between pb-6">
            <a href="#_" className="flex order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font">
				<span className="text-xl font-black leading-none text-gray-900 select-none logo">Intelli Mock</span>
			</a>
            <div className="grid w-full grid-cols-2 mt-20 sm:grid-cols-4 gap-y-16 lg:gap-x-8 md:w-5/6 md:mt-0 md:pr-6">
                <div className="md:justify-self-end">
                    <h3 className="font-semibold text-black primary_text">Product</h3>
                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Features</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Integrations</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Documentation</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Pricing</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:justify-self-end">
                    <h3 className="font-semibold text-black primary_text">About</h3>
                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Our Story</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Company</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Our Team</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Work With Us</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:justify-self-end">
                    <h3 className="font-semibold text-black primary_text">Resources</h3>
                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Help Center</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Developer API</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Our Blog</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Status</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Sitemap</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:justify-self-end">
                    <h3 className="font-semibold text-black primary_text">Contact</h3>
                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Advertising</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Press</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Partners</span>
                            </a>
                        </li>
                        <li>
                            <a href="#_" className="relative inline-block text-gray-600 group link-editable hover:text-purple-600">
                                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                <span>Email</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center justify-between py-10 border-t border-solid lg:flex-row border-gray">
            <ul className="flex flex-wrap space-x-5 text-xs">
                <li className="mb-6 text-center flex-full text-gray-600 lg:flex-none lg:mb-0">© 2024 Intelli Mock</li>
                <li className="ml-6">
                    <a href="#_" className="relative inline-block text-black group hover:text-purple-600 link-editable">
                        <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></span>
                        <span>Privacy Policy</span>
                    </a>
                </li>
                <li className="ml-6">
                    <a href="#_" className="relative inline-block text-black group hover:text-purple-600 link-editable">
                        <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></span>
                        <span>Disclaimers</span>
                    </a>
                </li>
                <li className="ml-6">
                    <a href="#_" className="relative inline-block text-black group hover:text-purple-600 link-editable">
                        <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></span>
                        <span>Terms and Conditions</span>
                    </a>
                </li>
            </ul>

            <ul className="flex items-center mt-10 space-x-5 lg:mt-0">
                <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 link-editable">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 link-editable">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900 link-editable">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div></body>
</html>

    </>
  );
}
