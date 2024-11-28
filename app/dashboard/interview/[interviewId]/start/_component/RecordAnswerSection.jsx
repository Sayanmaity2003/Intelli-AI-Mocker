// "use client"
// import Webcam from 'react-webcam';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import useSpeechToText from 'react-hook-speech-to-text';
// import { Mic } from 'lucide-react';
// function RecordAnswerSection() {
//   const [userAnswer, setUserAnswer] = useState('');
//   const {
//     error,
//     interimResult,
//     isRecording,
//     results,
//     startSpeechToText,
//     stopSpeechToText,
//   } = useSpeechToText({
//     continuous: true,
//     useLegacyResults: false
//   });

//   useEffect(()=>{
//     results.map((result)=>(
//       setUserAnswer(prevAns=>prevAns+result?.transcript)
//     ))
//   }, results);


//   return (

//     <div className='flex items-center justify-center flex-col'>
//         <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
//             <Image src={'/webcam2.png'} width={150} height={150} className='absolute' alt='logo'/>
//             <Webcam
//             mirrored={true}
//             style={{ 
//               height:300, 
//               width:'100%', 
//               zIndex: 10,
//             }}/>
//         </div>

//         <Button variant="outline" className='my-10'
//         onClick={isRecording?stopSpeechToText:startSpeechToText}
//         >
//           {isRecording?
//           <h2 className='text-red-600'>
//             <Mic/>'Recording....'
//           </h2>
//             :
          
//           "Record Answer"}
//         </Button>

//         <Button onClick={()=>console.log(userAnswer)}>Show User Answer</Button>
//     </div>
//   )
// }

// export default RecordAnswerSection









"use client"
import Webcam from 'react-webcam';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAiModal';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
function RecordAnswerSection({mockInterviewQuestion, activeQuestionIndex, interviewData, nextDisable}) {





  const [userAnswer, setUserAnswer] = useState('');
  const {user}=useUser();
  const [loading, setLoading] = useState(false);

  

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  // useEffect

  useEffect(() => {
    // Concatenate new results to the current userAnswer
    // if (results && results.length > 0) {
    //   setUserAnswer((prevAns) => prevAns + results[results.length - 1]?.transcript);
    // }
    results?.map((result)=>(
      setUserAnswer(prevAns=>prevAns+result?.transcript)
    ))
  }, [results]); // Update whenever `results` changes

  useEffect(()=>{
    if(!isRecording && userAnswer.length>10){
      UpdateUserAnswer();
    }

    
  }, [userAnswer])

  const StartStopRecording = async()=>{
    if(isRecording){
      nextDisable();

      stopSpeechToText();
    }else{
      startSpeechToText();
      nextDisable();
    }
  }


  // const UpdateUserAnswer=async()=>{
  //   // console.log(userAnswer);
  //   setLoading(true);
  //   const feedbackPrompt="Questions"+mockInterviewQuestion[activeQuestionIndex]?.question+", User Answer:"+userAnswer+", Depends on question and user answer for given interview question"+
  //     "Please give us a rating for answer and feedback as area of improvement if any "+
  //     "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

  //     const result = await chatSession.sendMessage(feedbackPrompt);
  //     const mockJsonResp=(result.response.text()).replace('```json','').replace('```','');
  //     console.log(mockJsonResp);
  //     const JsonFeedbackResp=JSON.parse(mockJsonResp);

  //     const resp=await db.insert(userAnswer)
  //     .values({
  //       mockIdRef : interviewData?.mockId,
  //       question : mockInterviewQuestion[activeQuestionIndex]?.question,
  //       correctAnswer : mockInterviewQuestion[activeQuestionIndex]?.answer,
  //       userAns : userAnswer,
  //       feedback : JsonFeedbackResp?.feedback,
  //       rating : JsonFeedbackResp?.rating,
  //       userEmail : user?.primaryEmailAddress?.emailAddress,
  //       createdAt : moment().format('DD-MM-yyyy')
  //     })

  //     if(resp){
  //       toast('User Answer recorded successfully');
  //     }
  //     setUserAnswer('');
  //     setLoading(false);
  // }



  const UpdateUserAnswer = async () => {
    // console.log(userAnswer);
    setLoading(true);
  
    // Validate interviewData
    if (!interviewData?.mockId) {
      console.error("Error: 'mockId' is missing in 'interviewData'.", interviewData);
      toast('Failed to record answer: mock interview ID is missing.');
      setLoading(false);
      return;
    }
  
    const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, User Answer: ${userAnswer}. ` +
      `Depends on question and user answer for given interview question. Please give us a rating and feedback ` +
      `in JSON format with "rating" and "feedback" fields.`;
  
    let JsonFeedbackResp;
    try {
      const result = await chatSession.sendMessage(feedbackPrompt);
      const mockJsonResp = (await result.response.text())
        .replace('```json', '')
        .replace('```', '');
      JsonFeedbackResp = JSON.parse(mockJsonResp);
    } catch (error) {
      console.error("Error parsing feedback JSON:", error);
      toast('Failed to parse feedback response.');
      setLoading(false);
      
      return;
    }
  
    // Insert data into the database
    try {

      // console.log(interviewData?.mockId);
      console.log(userAnswer);
      console.log(JsonFeedbackResp);
      const resp = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-yyyy'),
      });
  
      if (resp) {
        toast('User Answer recorded successfully');
        setUserAnswer('');
        setResults([]);
      }
    } catch (error) {
      console.error("Error inserting user answer:", error);
      toast('Error saving user answer. Please try again.');
    } finally {
      setResults([]);
      // nextDisable();
      setLoading(false);
    }
  };
  

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
        <Image src={'/webcam2.png'} width={150} height={150} className='absolute' alt='logo'/>
        <Webcam
          mirrored={true}
          style={{ 
            height: 300, 
            width: '100%', 
            zIndex: 10,
          }}
        />
      </div>

      <Button 
        disabled={loading}
        variant="outline" 
        className='my-10'
        onClick={StartStopRecording}
      >
        {isRecording ?
          <h2 className='text-red-600 flex gap-2'>
            <Mic /> Stop Recording
          </h2>
          :
          "Record Answer"
        }
      </Button>

      {/* <Button className='bg-violet-700' onClick={() => console.log(userAnswer)}>Show User Answer</Button> */}
    </div>
  );
}

export default RecordAnswerSection;
