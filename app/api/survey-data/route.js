import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import UserSurveyData from "@/models/UserSurveyData";
import Result from "@/models/result";


export async function POST(request){
    try{                
        const{datas}= await request.json();
        console.log("Route: ",datas);        
        await connectMongoDB();
        const existingRecord = await UserSurveyData.findOneAndUpdate(
            { username: datas.username },
            {
                residency: datas.selectedRadioValue,
                motorbike_engine_type: datas.Motor_Radio,
                motorbike_travel_per_year: datas.Motor_Range,
                self_transport_type: datas.Self_Radio,
                self_transport_travel_per_day: datas.Self_Range,
                car_engine_type: datas.Car_Radio,
                car_travel_per_year: datas.Car_Range,
                public_transport_type: datas.Public_Radio,
                public_transport_per_week: datas.Public_Range,
                flight_trip_type: datas.Flight_Radio,
                flight_per_year: datas.Flight_Range
            },
            { new: true, upsert: true } // Create a new document if no match is found
        );

        const motorbike_emission = () => {
            if(datas.Motor_Radio == "Petrol"){
                const motorbike_result = datas.Motor_Range * 119.6;                
                console.log("Motorbike Result : ",motorbike_result);
                return parseFloat(motorbike_result,2);
            }
            else if(datas.Motor_Radio == "Electric"){
                const motorbike_result = datas.Motor_Range * 6;
                console.log("Motorbike Result : ",motorbike_result);
                return parseFloat(motorbike_result,2);
            }            
        }

        const st_emission = () => {
            if(datas.Self_Radio == "Foot-Walk"){
                const st_result = datas.Self_Range * 39;
                console.log("Self transport Result : ",st_result);
                return parseFloat(st_result,2);
            }
            else if(datas.Self_Radio == "Bicycle"){
                const st_result = datas.Self_Range * 19;
                console.log("lf transport Result : ",st_result);
                return parseFloat(st_result,2);
            }            
        }

        const car_emission = () => {
            if(datas.Car_Radio == "Diesel"){
                const car_result = datas.Car_Range * 171;
                console.log("Car Result : ",car_result);
                return parseFloat(car_result,2);
            }
            else if(datas.Car_Radio == "Petrol"){
                const car_result = datas.Car_Range * 170;
                console.log("Car Result : ",car_result);
                return parseFloat(car_result,2);
            }
            else if(datas.Car_Radio == "Bio-Fuel"){
                const car_result = datas.Car_Range * 192;
                console.log("Car Result : ",car_result);
                return parseFloat(car_result,2);
            }
            else if(datas.Car_Radio == "Electric"){
                const car_result = datas.Car_Range * 47;
                console.log("Car Result : ",car_result);
                return parseFloat(car_result,2);
            }            
        }

        const pt_emission = () => {
            if(datas.Public_Radio == "City-Metro"){
                const pt_result = datas.Public_Range * 32.38;
                console.log("Public Transport Result : ",pt_result);
                return parseFloat(pt_result,2);
            }
            else if(datas.Public_Radio == "Bus"){
                const pt_result = datas.Public_Range * 96.6;
                console.log("Public Transport Result : ",pt_result);
                return parseFloat(pt_result,2);
            }
            else if(datas.Public_Radio == "Train"){
                const pt_result = datas.Public_Range * 41;
                console.log("Public Transport Result : ",pt_result);
                return parseFloat(pt_result,2);
            }                        
        }

        const flight_emission = () => {
            if(datas.Flight_Radio == "Medium-Haul"){
                const flight_result = datas.Flight_Range * 156;
                console.log("Flight Result : ",flight_result);
                return parseFloat(flight_result,2);
            }
            else if(datas.Flight_Radio == "Short-Haul"){
                const flight_result = datas.Flight_Range * 255;
                console.log("Flight Result : ",flight_result);
                return parseFloat(flight_result,2);
            }
            else if(datas.Flight_Radio == "Long-Haul"){
                const flight_result = datas.Flight_Range * 150;
                console.log("Flight Result : ",flight_result);
                return parseFloat(flight_result,2);
            }
        }

        
        motorbike_emission();
        st_emission();
        car_emission();
        pt_emission();
        flight_emission();

        const existingResultRecord = await Result.findOneAndUpdate(
            { username: datas.username },
            {
                
                residency: datas.selectedRadioValue,
                motorbike_emission: motorbike_emission(),
                st_emission: st_emission(),
                car_emission: car_emission(),
                pt_emission: pt_emission(),
                flight_emission: flight_emission()
            },
            { new: true, upsert: true } // Create a new document if no match is found
        );



        return NextResponse.json({message:"User Data Collected and Calculated"},{status:201});
    }catch(error){
        
        return NextResponse.json({message:"Error Occured while collecting userdatas"},{status:500});
    }
}
