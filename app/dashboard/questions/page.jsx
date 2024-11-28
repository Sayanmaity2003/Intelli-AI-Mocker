// // app/dashboard/questions/page.js
// import React from "react";

// function QuestionsPage() {
//   return (
//     <div className="p-4">
          
//       <p>Here you can add and view the questions.</p>
//       {/* Add more content here such as a list of questions or form to add questions */}
//     </div>
//   );
// }

// export default QuestionsPage;


"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import {QuestionsItemCard} from '../interview/[interviewId]/start/_component/InterviewItemCard';

function QuestionsPage() {
    const {user} = useUser();
    const [interviewList, setInterviewList] = useState([]);
    useEffect(()=>{
        user&&GetInterviewList();
    },[user])
    const GetInterviewList = async()=>{
        const result=await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id));

        console.log(result);
        setInterviewList(result);
    }
  return (
    <div className='mt-5'>
        <h1 className="text-3xl font-bold mb-4 text-violet-800">Questions Section</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
            {interviewList&&interviewList.map((interview, idx)=>(
                <QuestionsItemCard 
                interview={interview}
                key={idx}/>
            ))}
        </div>
    </div>
  )
}

export default QuestionsPage;