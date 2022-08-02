import mongoose, { Schema } from "mongoose";

const AdminSchema: Schema = new Schema({
  name: { type: String, require: true },
  password: { type: String, require: true }
})

export const Admin = mongoose.model('Admin', AdminSchema);