import mongoose from "mongoose";

const rankingSchema = new mongoose.Schema(
  {
    nick: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Ranking = mongoose.model("Ranking", rankingSchema);
