import { Button } from '@/components/ui/button';
import { MockInterview, UserAnswer } from '@/utils/schema';
import { useRouter } from 'next/navigation';
// import { useUser } from '@clerk/nextjs'
import React from 'react'
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { toast } from 'sonner';
import { FaCheckCircle } from 'react-icons/fa';
function InterviewItemCard({interview, GetInterviewList}) {
    const router=useRouter();
    // const {user} = useUser();
    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId);
    }
    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview?.mockId+'/feedback');
    }


    const onDeletePress=async()=>{
      // router.push('/dashboard/delete');
      try {
        // Delete related user answers first, using the interview's mockId
        const deleteAnswersResult = await db
          .delete(UserAnswer)
          .where(eq(UserAnswer.mockIdRef, interview?.mockId)); // Use interview's mockId as reference for UserAnswer
          toast.success(
            <div className="flex items-center">
              
              <FaCheckCircle className="text-green-500 mr-2" />
              <strong>Interview Deleted Succesfully</strong> 
            </div>, 
            { 
              duration: 5000, // Duration for the toast (3 seconds)
            }
          );
          console.log('Deleted UserAnswer Records:', deleteAnswersResult);
    
        // Now, delete the mock interview record using the mockId
        const deleteInterviewResult = await db
          .delete(MockInterview)
          .where(eq(MockInterview.mockId, interview?.mockId)); // Delete interview by mockId
    
        console.log('Deleted Interview Record:', deleteInterviewResult);
  
        GetInterviewList();
        router.push('/dashboard');  //Redirect to home route
      } catch (error) {
        console.error('Error deleting interview and answers:', error);
      }
    }
    const onPrees=()=>{
      toast.success(
        <div className="flex items-center">
          
          <FaCheckCircle className="text-green-500 mr-2" />
          <strong>Interview Deleted Succesfully</strong> 
        </div>, 
        { 
          duration: 5000, // Duration for the toast (5 seconds)
        }
      );
    }
  return (
    <div className='border shadow-sm rounded-lg p-3 hover:scale-105 hover:shadow-md cursor-pointer transition-all bg-orange-50'>
        <div className='flex justify-between'>
        <h2 className='font-bold text-primary text-violet-700'>{interview?.jobPosition}</h2>
        <Button className='bg-red-400' onClick={onDeletePress}>Delete</Button>
        </div>
        <h2 className='text-sm text-gray-600'>{interview.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-400'>Created At: {interview.createdAt}</h2>
        <div className='flex justify-between mt-2 gap-5'>
            <Button onClick={onFeedbackPress} size="sm" variant="outline" className="w-full">Feedback</Button>
            <Button onClick={onStart} size="sm" className="w-full bg-violet-600">Retake</Button>
        </div>
    </div>
  )
}


function QuestionsItemCard({interview}) {
    const router=useRouter();
    const onQuestionPress=()=>{
        router.push('/dashboard/interview/'+interview?.mockId+'/question');
    }
  return (
    <div className='border shadow-sm rounded-lg p-3 hover:scale-105 hover:shadow-md cursor-pointer transition-all bg-orange-50'>
        <h2 className='font-bold text-primary text-violet-700'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>{interview.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-400'>Created At: {interview.createdAt}</h2>
        <div className='flex justify-between mt-2 gap-5'>
            {/* <Button onClick={onFeedbackPress} size="sm" variant="outline" className="w-full">Feedback</Button> */}
            <Button onClick={onQuestionPress} size="sm" className="w-full bg-violet-600">View Questions</Button>
        </div>
    </div>
  )
}
export {InterviewItemCard, QuestionsItemCard};