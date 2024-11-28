"use client"
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Input} from '@/components/ui/input';
import {Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAiModal';
import { LoaderCircle } from 'lucide-react';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { MockInterview } from '@/utils/schema';
import { useRouter } from 'next/navigation';
// import { Input } from 'postcss';

  
function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [jobExperience, setJobExperience] = useState();
    const [loading, setLoading] = useState(false);
    const [JsonResponse, setJsonResponse] = useState([]);
    const router=useRouter();
    const {user}=useUser();

    // const onSubmit=async(e)=>{
    //     setLoading(true);
    //     e.preventDefault();
    //     console.log(jobPosition, jobDesc, jobExperience);
    //     // setOpenDialog(false);
    //     const InputPrompt="Job position: "+jobPosition+", Job Description: "+jobDesc+"& Years of experience:"+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+". Depends on job position , Job description & years of experience give us 5 most important and vital interview questions along with answer in JSON formate. Give us question and answer field on JSON."
    //     const result=await chatSession.sendMessage(InputPrompt);
    //     const MockJsonRes=(result.response.text()).replace('```json','').replace('```','');
    //     console.log(JSON.parse(MockJsonRes));
    //     setJsonResponse(MockJsonRes);
    //     if(MockJsonRes){

       
    //     const resp=await db.insert(MockInterview)
    //     .values({
    //         mockId:uuidv4(),
    //         jsonMockResp:MockJsonRes,
    //         jobPosition:jobPosition,
    //         jobDesc:jobDesc,
    //         jobExperience:jobExperience,
    //         createdBy:user?.primaryEmailAddress.emailAddress,
    //         createdAt:moment().format('DD-MM-YYYY')
    //     }).returning({mockId:MockInterview.mockId})
    //     console.log("Inserted id: ",resp);
    // }else{
    //     console.log("ERROR!!!");
    // }
    //     setLoading(false);
    //     if(resp){
    //         setOpenDialog(false);
    //         router.push('/dashboard/interview/'+resp[0]?.mockId);
    //     }
    // }


    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(jobPosition, jobDesc, jobExperience);
    
        const InputPrompt =
            "Job position: " +
            jobPosition +
            ", Job Description: " +
            jobDesc +
            "& Years of experience:" +
            jobExperience +
            ". Depends on job position , Job description & years of experience give us 5 most important and vital interview questions along with answer in JSON format. Give us question and answer field on JSON.";
    
        const result = await chatSession.sendMessage(InputPrompt);
        const MockJsonRes = result.response
            .text()
            .replace('```json', '')
            .replace('```', '');
    
        console.log(JSON.parse(MockJsonRes));
        setJsonResponse(MockJsonRes);
    
        if (MockJsonRes) {
            const resp = await db.insert(MockInterview)
                .values({
                    mockId: uuidv4(),
                    jsonMockResp: MockJsonRes,
                    jobPosition: jobPosition,
                    jobDesc: jobDesc,
                    jobExperience: jobExperience,
                    createdBy: user?.primaryEmailAddress.emailAddress,
                    createdAt: moment().format('DD-MM-YYYY'),
                })
                .returning({ mockId: MockInterview.mockId });
    
            console.log("Inserted id: ", resp);
    
            setOpenDialog(false);
            router.push('/dashboard/interview/' + resp[0]?.mockId);
        } else {
            console.log("ERROR!!!");
        }
        setLoading(false);
    };
    
  return (
    <div>
        <div className='p-10 border rounded-lg bg-violet-50 hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={()=>setOpenDialog(true)}
        >
            <h2 className='text-lg text-center'>+ Add New</h2>
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
                <DialogContent className='max-w-2xl'>
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>Tell us more about your job interview</DialogTitle>
                    <DialogDescription>
                        <form onSubmit={onSubmit}>
                    {/* <div> */}
                        <div>
                            <h2>Add Details about your job position/role, job description and years of experience</h2>
                            <div className='mt-7 my-3'>
                                <label >Job Role/Job Position</label>
                                <Input placeholder="Ex. Full Stack Developer" required onChange={(event)=>setJobPosition(event.target.value)}/>
                            </div>

                            <div className='my-3'>
                                <label >Job Description/Tech Stack (In short)</label>
                                <Textarea placeholder="Ex. Express, Node.js, MongoDB, MySql etc..." required onChange={(event)=>setJobDesc(event.target.value)}/>
                            </div>

                            <div className='mt-7 my-3'>
                                <label >Years of experience</label>
                                <Input placeholder="Ex.5" type="number" max="90" required onChange={(event)=>setJobExperience(event.target.value)}/>
                            </div>
                        </div>
                        <div className='flex gap-5 justify-end'>
                            <Button variant="ghost" type='button' onClick={()=>setOpenDialog(false)}>Cancel</Button>
                            <Button className=' bg-indigo-700' type='submit' disabled={loading}>
                                {loading?<><LoaderCircle className='animate-spin'/>'Generating from AI'</>:'Start Interview'}</Button>
                        </div>
                        </form>
                    </DialogDescription>
                    {/* </div> */}
                </DialogHeader>
            </DialogContent>
        </Dialog>

    </div>
  )
}

export default AddNewInterview