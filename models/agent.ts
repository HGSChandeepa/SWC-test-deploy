import { Schema, model, models } from "mongoose";

const AgentSchema: Schema = new Schema({
  email: {
    type: String,
    unique: [true, "Email Already exists"],
    required: [true, "Email is required"],
  },
  first_name: {
    type: String,
    required: [true, "First Name is required"],
  },
  last_name: {
    type: String,
    required: [true, "Last Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  // Use 'Date' data type for the date field
  date: { type: Date, required: false },
  image: {
    type: String,
  },
  role: {
    type: String,
  },
  policy: {
    type: String,
  },
  auth: {
    type: String,
    required: [true, "Auth is required"],
  },
});

const Agent = models.Agent || model("Agent", AgentSchema); // Use singular name "Agent"

export default Agent;
