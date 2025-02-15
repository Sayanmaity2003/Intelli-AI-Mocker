// "use client"
// import { db } from '@/utils/db'
// import { UserAnswer } from '@/utils/schema'
// import { eq } from 'drizzle-orm'
// import React, { useEffect, useState } from 'react'
// import {
//     Collapsible,
//     CollapsibleContent,
//     CollapsibleTrigger,
//   } from "@/components/ui/collapsible"
// import { ChevronsUpDown } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { useRouter } from 'next/navigation'

// function Feedback({params}) {
//     const [feedbackList, setFeedbackList] = useState([]);
//     const router = useRouter();
//     useEffect(()=>{
//         GetFeedback();
//     }, []);
//     const GetFeedback= async()=>{
//         const result = await db.select()
//         .from (UserAnswer)
//         .where(eq(UserAnswer.mockIdRef, params.interviewId))
//         .orderBy(UserAnswer.id);

//         console.log(result);
//         setFeedbackList(result);
//     }
//   return (
//     <div className='p-10'>
        
//         {feedbackList?.length==0?
//         <h2 className='font-bold text-xl text-gray-500'>No Interview Feedback Record Found</h2>:
        
//         <>
//         <h2 className='text-3xl font-bold text-green-500'>Congratulation!</h2>
//         <h2 className='text-2xl font-bold'>Here is your intervew feedback</h2>
//         <h2 className='text-violet-700 text-lg my-3'>Your overall interview rating: <strong>7/10</strong></h2>
//         <h2 className='text-sm text-gray-500'>Find below interview question with Correct answer, Your answer and Feedback for improvement</h2>
//         {feedbackList&&feedbackList.map((item, idx)=>(
//             <Collapsible key={idx} className='mt-7'>
//                 <CollapsibleTrigger className='flex gap-7 justify-between p-2 bg-secondary rounded-lg my-2 text-left w-full'>
//                 {item.question} <ChevronsUpDown className='h-5 w-5'/>
//                 </CollapsibleTrigger>
//                 <CollapsibleContent>
//                 <div className='flex flex-col gap-2'>
//                     <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating: </strong>{item.rating}</h2>
//                     <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'><strong>Your Answer: </strong>{item.userAns}</h2>
//                     <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'><strong>Correct Answer: </strong>{item.correctAns}</h2>
//                     <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-blue-900'><strong>Feedback: </strong>{item.feedback}</h2>
//                 </div>
//                 </CollapsibleContent>
//             </Collapsible>
//         ))}
//         </>}
//         <Button className='bg-violet-700' onClick={()=>router.replace('/dashboard')}>Go Home</Button>
//     </div>
//   )
// }

// export default Feedback





"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, useParams } from "next/navigation";

function Feedback() {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();
  const params = useParams(); // Use this to unwrap the promise
//   const [overallRating, setOverallRating] = useState(0);
  
  
//   let totalRating = 0;
//   useEffect(() => {
//     setOverallRating(totalRating);
//   }, []);
  



  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    try {
      const result = await db
        .select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef, params.interviewId))
        .orderBy(UserAnswer.id);

      console.log(result);
      setFeedbackList(result);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  return (
    <div className="p-10">
      {feedbackList?.length === 0 ? (
        <h2 className="font-bold text-xl text-gray-500">
          No Interview Feedback Record Found
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">Congratulations!</h2>
          <h2 className="text-2xl font-bold">
            Here is your interview feedback
          </h2>
          {/* <h2 className="text-violet-700 text-lg my-3">
            Your overall interview rating: <strong>7/10</strong>
          </h2> */}
          <h2 className="text-sm text-gray-500">
            Find below interview questions with Correct answers, Your answers,
            and Feedback for improvement
          </h2>
          {feedbackList &&
            feedbackList.map((item, idx) => (
              <Collapsible key={idx} className="mt-7">
                <CollapsibleTrigger className="flex gap-7 justify-between p-2 bg-secondary rounded-lg my-2 text-left w-full">
                  {item.question} <ChevronsUpDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating: </strong>
                      {item.rating}
                      {/* {console.log(ratingCount)} */}
                      {/* {ratingCount = ratingCount+Number(item.rating)} */}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                      <strong>Your Answer: </strong>
                      {item.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                      <strong>Correct Answer: </strong>
                      {item.correctAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-blue-900">
                      <strong>Feedback: </strong>
                      {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
                // setOverallRating((e)=>e+1)
            ))}
        </>
      )}
      <Button className="bg-violet-700" onClick={() => router.replace("/dashboard")}>
        Go Home
      </Button>
    </div>
  );
}

export default Feedback;
