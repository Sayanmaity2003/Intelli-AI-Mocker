import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

function HowWorks() {
  return (
    <div className='mt-4 text bg-orange-100 p-2 border rounded-xl'>
      {/* <div className='h-60 w-50'>How it Works?</div> */}

      <div>
          <h1 className="text-3xl font-bold mb-4 text-violet-800">How it Works? OR What you get?</h1>
      </div>

        <div className='flex flex-col gap-2'>

        <div className='bg-green-50 p-3 border rounded-lg'>
            <h2><strong>Personalized Setup:</strong></h2>
            <p>Start by entering your job position, preferred tech stacks, and years of experience. This helps us understand the kind of interview you’re preparing for.</p>
        </div>
        
        <div className='bg-green-50 p-3 border rounded-lg'>       
            <h2><strong>AI-Powered Interview Generation:</strong></h2>
            <p>Based on your input, an AI model carefully analyzes the requirements of your job profile and generates 5 important interview questions tailored to your role and expertise.</p>
        </div>
        <div className='bg-green-50 p-3 border rounded-lg'>
            <h2><strong>Self-Interview Session:</strong></h2>
            <p>Once your questions are ready, you’ll have the opportunity to answer them by turning on your camera and microphone. This simulates a real interview environment where you can practice your responses.</p>
        </div>
        <div className='bg-green-50 p-3 border rounded-lg'>
            <h2><strong>Instant Feedback & Evaluation:</strong></h2>
            <p>After completing your interview, the AI will compare your answers with ideal responses and provide personalized feedback. You will also see a rating for your performance, allowing you to gauge your readiness.</p>
        </div>

        <div className='bg-green-50 p-3 border rounded-lg'>
            <h2><strong>Review & Learn:</strong></h2>
            <p>You can review your previous interviews at any time, including the questions, your answers, the correct answers provided by AI, and your performance ratings.</p>
        </div>

        <div className='bg-green-50 p-3 border rounded-lg'>
            <h2><strong>Delete Past Interviews: </strong></h2>
            <p> If you no longer wish to keep a record of a previous interview, simply click the delete button, and it will be removed from your profile.</p>
        </div>
        </div>
    </div>
  )
}

export default HowWorks;