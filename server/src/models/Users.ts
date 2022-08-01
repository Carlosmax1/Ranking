import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  id: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  url: { type: String, require: false },
  points: { type: Number, require: true },
});

export const User = mongoose.model('User', UserSchema);