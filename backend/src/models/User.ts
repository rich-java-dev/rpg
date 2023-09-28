import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  pw: {
    type: String,
    minlength: 4,
    required: true,
  },
});

export const User = mongoose.model("User", UserSchema);


