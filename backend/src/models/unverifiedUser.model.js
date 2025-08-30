import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
// schema for UnverifiedUser
const unverifiedUserSchema = new Schema(
  {
    name: {
      type: String,
      required: true, 
    },
    email: {
      type: String,
      required: true, 
      unique: true, 
    },
    password: {
      type: String,
      required: true, 
    },
    userType: {
      type: String,
      required: true
    },
  },
  { timestamps: true } 
);


unverifiedUserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//pre save ehook to pritect paswd using salt val
unverifiedUserSchema.pre("save", async function (next) {
  // If the password is not modified, proceed to the next middleware
  if (!this.isModified("password")) {
    next();
  }
  // Hash the password with a salt factor of 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
});


export const UnverifiedUser = mongoose.model("UnverifiedUser", unverifiedUserSchema);
