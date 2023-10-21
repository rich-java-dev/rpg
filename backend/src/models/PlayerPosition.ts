import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PlayerPositionSchema = new Schema({

    name: { type: String, required: true, unique: true },

    posX: { type: Number, required: true, default: 0 },
    poxY: { type: Number, required: true, default: 0 },
  

});

export const PlayerPosition = mongoose.model("PlayerPosition", PlayerPositionSchema);