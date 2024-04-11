import mongoose,{Schema} from "mongoose";

const topicSchema= new mongoose.Schema(
    {
    // title: String,
    // description: String,
    name:String,
    email:String,
    password:String
    },
    // {
    //     timestamps: true,
    // }
);

// const Topic= mongoose.model.Topic || mongoose.model("Topic",topicSchema);
let Topic;

try {
  // Try to get the existing model to avoid redefining it
  Topic = mongoose.model('Topic');
} catch (error) {
  // If the model doesn't exist, define it
  Topic = mongoose.model('Topic', topicSchema);
}

export default Topic;
    
