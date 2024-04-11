import mongoose, { Schema, models } from "mongoose";

const SurveyDataSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    residency: {
      type: String,
      required: true,
    },
    motorbike_engine_type: {
      type: String,
      required: true,
    },
    motorbike_travel_per_year: {
      type: Number,
      required: true,      
    },
    self_transport_type:{
      type: String,
      required: true,        
    },
    self_transport_travel_per_day:{
        type: Number,
        required: true,        
    },
    car_engine_type:{
        type: String,
        required: true,        
    },
    car_travel_per_year:{
        type: Number,
        required: true,        
    },
    public_transport_type:{
        type: String,
        required: true,        
    },
    public_transport_per_week:{
        type: Number,
        required: true,        
    },
    flight_trip_type:{
        type: String,
        required: true,        
    },
    flight_per_year:{
        type: Number,
        required: true,        
    },    
  },
  { timestamps: true }
);


let UserSurveyData;

try {
  // Try to get the existing model to avoid redefining it
  UserSurveyData = mongoose.model('UserSurveyData');
  // UserSurveyData = mongoose.model('UserSurveyData', SurveyDataSchema);
} catch (error) {
  // If the model doesn't exist, define it
  UserSurveyData = mongoose.model('UserSurveyData', SurveyDataSchema);
}

// const UserSurveyData = models.UserSurveyData || mongoose.model("UserSurveyData", SurveyDataSchema);
export default UserSurveyData;