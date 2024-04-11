import { NextResponse } from "next/server";
import Question from "@/models/questions";
import connectMongoDB from "@/libs/mongodb";


  export async function POST(request){
    try {                
        const { message } = await request.json();
        console.log("Message",message);
        await connectMongoDB();

        // const response = await db.collection('Questions').findOne({ question: message });
        const res = await Question.findOne({ question: message });

        console.log("Res",res.answer);
        if (res) {
          // If a response is found, return it
          // return res.status(200).json({ answer: res.answer });
          return NextResponse.json({status: 200 , message: res.answer});  
        } else {
          // If no response is found, return an error
          // return res.status(404).json({ error: 'No answer found for the given message' });
          return NextResponse.json({status:404},{meesage:'No answer found for the given message'});  
        }

        // return NextResponse.json({'MMM': message });  
    } catch(error) {
        return NextResponse.json({ 'Error':error });  
    }
}

