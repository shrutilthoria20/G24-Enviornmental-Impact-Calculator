import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Result from "@/models/result";
import UserSurveyData from "@/models/UserSurveyData";

export async function POST(request){
    try {                
        const{session}= await request.json();
        console.log("dnjsdnv",session?.user?.name);
        await connectMongoDB();
        
        // Fetch data from the first collection
        const result_data_1 = await Result.findOne({ username: session?.user?.name });
        // const result_data_1 = await Result.findOne({ username: "raj"});

        // Fetch data from the second collection
        const result_data_2 = await UserSurveyData.findOne({ username: session?.user?.name });
        // const result_data_2 = await UserSurveyData.findOne({ username: "raj"});

        // Create a merged object to hold the combined data
        let mergedResult = {};

        // Merge properties of result_data_1 into mergedResult if result_data_1 exists
        if (result_data_1) {
            mergedResult = { ...mergedResult, ...result_data_1.toObject() };
        }

        // Merge properties of result_data_2 into mergedResult if result_data_2 exists
        if (result_data_2) {
            mergedResult = { ...mergedResult, ...result_data_2.toObject() };
        }

        console.log("Route data json: ", mergedResult);
        return NextResponse.json({ result_data: [mergedResult] });        
    } catch(error) {
        return NextResponse.json({ message: "Error Occurred" }, { status: 500 });
    }
}
