import mongoose, { Schema, models } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      // required: true,
      default:'',
    },
    password_reset_token:{
      type: String,
      required: false,        
    },
  },
  { timestamps: true }
);


let User;

try {
  // Try to get the existing model to avoid redefining it
  User = mongoose.model('User');
} catch (error) {
  // If the model doesn't exist, define it
  User = mongoose.model('User', userSchema);
}

// const User = models.User || mongoose.model("User", userSchema);
export default User;