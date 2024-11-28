// import React from 'react'

// function AllQuestions() {
//   return (
//     <div>AllQuestions</div>
//   )
// }

// export default AllQuestions;





// "use client"
// import { db } from '@/utils/db'
// import { MockInterview } from '@/utils/schema'
// import { useEffect, useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { useRouter } from 'next/navigation'
// import { eq } from 'drizzle-orm'

// function AllQuestions({ params }) {
//     const [questions, setQuestions] = useState([]);
//     const [jobPosition, setJobPosition] = useState(""); // To store the job position
//     const router = useRouter();

//     const mockid = params.interviewId; // Assuming mockid is passed as a URL parameter or prop

//     useEffect(() => {
//         if (mockid) {
//             GetFeedback(mockid);
//         }
//     }, [mockid]);

//     const GetFeedback = async (mockid) => {
//         // Fetch the mock interview data for a specific mockid
//         const result = await db.select()
//             .from(MockInterview)
//             .where(eq(MockInterview.mockId, mockid)); // Filter by mockid

//         console.log(result); // Debugging the fetched result

//         if (result.length > 0) {
//             const data = result[0]; // Assuming mockid is unique, take the first result
//             const questions = JSON.parse(data.jsonMockResp); // Parse the questions from jsonMockResp
//             setQuestions(questions); // Set the questions state
//             setJobPosition(data.jobPosition); // Set the job position
//         } else {
//             setQuestions([]); // If no data found, set questions to an empty array
//             setJobPosition(""); // Clear job position if no data
//         }
//     };

//     return (
//         <div className='p-10'>
//             <h2 className='text-3xl font-bold text-violet-700'>Interview Questions</h2>

//             {jobPosition && (
//                 <h3 className='text-xl text-gray-700 mt-2'>
//                     <strong>Job Position:</strong> {jobPosition}
//                 </h3>
//             )}

//             {questions.length === 0 ?
//                 <h2 className='font-bold text-xl text-gray-500'>No Interview Feedback Record Found</h2> :
//                 <>
//                     <h2 className='text-sm text-gray-500'>
//                         Find below interview questions for the selected mock interview:
//                     </h2>

//                     <div className='mt-3'>
//                         {questions.map((question, idx) => (
//                             <div key={idx} className='flex text-violet-700 bg-violet-100 gap-7 justify-between p-2 bg-secondary rounded-lg my-2 text-left w-full'>
//                                 {question.question}
//                             </div>
//                         ))}
//                     </div>
//                 </>
//             }

//             <Button className='bg-violet-700' onClick={() => router.replace('/dashboard')}>Go Home</Button>
//         </div>
//     );
// }

// export default AllQuestions;





"use client";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { eq } from "drizzle-orm";
import { use } from "react"; // Import React's `use`

function AllQuestions({ params }) {
  const unwrappedParams = use(params); // Unwrap the params promise
  const [questions, setQuestions] = useState([]);
  const [jobPosition, setJobPosition] = useState(""); // To store the job position
  const router = useRouter();

  const mockid = unwrappedParams.interviewId; // Access unwrapped params

  useEffect(() => {
    if (mockid) {
      GetFeedback(mockid);
    }
  }, [mockid]);

  const GetFeedback = async (mockid) => {
    try {
      // Fetch the mock interview data for a specific mockid
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, mockid)); // Filter by mockid

      console.log(result); // Debugging the fetched result

      if (result.length > 0) {
        const data = result[0]; // Assuming mockid is unique, take the first result
        const questions = JSON.parse(data.jsonMockResp); // Parse the questions from jsonMockResp
        setQuestions(questions); // Set the questions state
        setJobPosition(data.jobPosition); // Set the job position
      } else {
        setQuestions([]); // If no data found, set questions to an empty array
        setJobPosition(""); // Clear job position if no data
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  return (
    <div className="p-10">
      {jobPosition && (
        <div className="bg-orange-100 flex justify-center items-center border rounded-xl" >
            <h3 className="text-xl text-gray-700">
                <strong className="text-orange-600 font-serif ">Job Position: {jobPosition}</strong> 
            </h3>
        </div>
      )}

      {questions.length === 0 ? (
        <h2 className="font-bold text-xl text-gray-500">
          No Interview Feedback Record Found
        </h2>
      ) : (
        <>
          <div className="mt-3">
            {questions.map((question, idx) => (
              <div
                key={idx}
                className="flex text-violet-700 bg-violet-100 gap-7 justify-between p-2 bg-secondary rounded-lg my-2 text-left w-full"
              >
                {question.question}
              </div>
            ))}
          </div>
        </>
      )}

      <Button
        className="bg-violet-700"
        onClick={() => router.replace("/dashboard")}
      >
        Go Home
      </Button>
    </div>
  );
}

export default AllQuestions;



