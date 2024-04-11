import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,    
  }
});

// const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);
let Question;

try {
  // Try to get the existing model to avoid redefining it
  Question = mongoose.model('Questions');
  // UserSurveyData = mongoose.model('UserSurveyData', SurveyDataSchema);
} catch (error) {
  // If the model doesn't exist, define it
  Question = mongoose.model('Questions', questionSchema);
}


export default Question;



