import mongoose, { Schema, models } from "mongoose";

const resultSchema = new mongoose.Schema(
  {    
    username: {
      type: String,
      required: true,
    },
    residency: {
      type: String,
      required: true,
    },
    flight_emission: {
      type: Number,
      required: true,
    },
    pt_emission: {
      type: Number,
      required: true,
    },
    car_emission: {
      type: Number,
      required: true,      
    },
    motorbike_emission:{
      type: Number,
      required: true,        
    },
    st_emission:{
        type: Number,
        required: true,        
    },        
    trees_needed:{
      type: Number,
      required: true,        
    },        
    total_emission:{
      type: Number,
      required: true,        
    },        
    avg_annual_red:{
      type: Number,
      required: true,        
    },          
  },
  { timestamps: true }
);


let Result;

try {
  // Try to get the existing model to avoid redefining it
  Result = mongoose.model('Result');
  // UserSurveyData = mongoose.model('UserSurveyData', SurveyDataSchema);
} catch (error) {
  // If the model doesn't exist, define it
  Result = mongoose.model('Result', resultSchema);
}

// const UserSurveyData = models.UserSurveyData || mongoose.model("UserSurveyData", SurveyDataSchema);
export default Result;
