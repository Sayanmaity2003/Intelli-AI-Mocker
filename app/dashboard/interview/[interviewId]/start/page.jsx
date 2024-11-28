// "use client"
// import React, { useEffect, useState } from 'react'
// import { db } from '@/utils/db';
// import { MockInterview } from '@/utils/schema';
// import { eq } from 'drizzle-orm';
// import QuestionsSection from './_component/QuestionsSection';
// import RecordAnswerSection from './_component/RecordAnswerSection';

// function StartInterview({params}) {
//     const [interviewData, setInterviewData] = useState();
//     const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
//     const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

//     useEffect(()=>{
//         GetInterviewDetails();
//     },[]);

//     /**Get the interview details by Mockid/Interview Id */
//     const GetInterviewDetails=async()=>{
//         const result=await db.select().from(MockInterview)
//         .where(eq(MockInterview.mockId,  params.interviewId));
//         console.log(result);
//         const jsonMockResp=JSON.parse(result[0].jsonMockResp);
//         console.log(jsonMockResp);
//         setMockInterviewQuestion(jsonMockResp);
//         setInterviewData(result[0]);
//         // setInterviewData(result[0]);
//     }
//   return (
//     <div>
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
//             {/* Questions */}
//             <QuestionsSection 
//             mockInterviewQuestion={mockInterviewQuestion}
//             activeQuestionIndex={activeQuestionIndex}
//             />
//             <RecordAnswerSection/>
//             {/* Video / Audio Recording */}
//         </div>
//     </div>
//   )
// }

// export default StartInterview











"use client"
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import QuestionsSection from './_component/QuestionsSection';
import RecordAnswerSection from './_component/RecordAnswerSection';
import { use } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({ params }) {
  const { interviewId } = use(params); // Unwrap `params` using React.use()
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [voiceRecord, setVoiceRecord] = useState(false);

  const nextDisable=()=>{
    setVoiceRecord(!voiceRecord);
  }
  
  useEffect(() => {
    GetInterviewDetails();
  }, []);

  /** Get the interview details by Mock ID / Interview ID */
  const GetInterviewDetails = async () => {
    try {
      const result = await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, interviewId));

      if (result.length > 0) {
        const jsonMockResp = JSON.parse(result[0].jsonMockResp);
        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0]);
      } else {
        console.error('No data found for the given interview ID');
      }
    } catch (error) {
      console.error('Error fetching interview details:', error);
    }
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Questions */}
        <QuestionsSection 
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />

        {/* Video / Audio Recording */}
        <RecordAnswerSection 
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
          nextDisable={nextDisable}
        />
      </div>
      <div className='flex justify-end gap-6'>
       {/* {activeQuestionIndex>0&& */}
       <Button className='bg-violet-700' disabled={activeQuestionIndex>0?false:true} onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>
       {/* } */}
       {/* {activeQuestionIndex!=mockInterviewQuestion?.length-1 && */}
       <Button className='bg-violet-700' disabled={((activeQuestionIndex!=mockInterviewQuestion?.length-1) && !voiceRecord)?false:true} onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>
       {/* } */}
       {/* {activeQuestionIndex==mockInterviewQuestion?.length-1 && */}
       <Link href={'/dashboard/interview/'+interviewData?.mockId+'/feedback'}>
       {/* (activeQuestionIndex==mockInterviewQuestion?.length-1) &&  */}
        <Button  className='bg-violet-700' disabled={((!voiceRecord))?false:true} >End Interview</Button>
       </Link>
       {/* } */}
      </div>
    </div>
  );
}

export default StartInterview;

















