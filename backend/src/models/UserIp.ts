import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserIpSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  ip: {
    type: String,
    minlength: 8,
    required: true,
  },
});

export const User = mongoose.model("UserIp", UserIpSchema);


