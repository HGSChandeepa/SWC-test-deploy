import { Schema, model, models } from "mongoose";

const CustomerSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    unique: [true, "Email Already exists"],
    required: [true, "Email is required"],
  },
  phone: {
    type: Number,
    required: [true, "Please provide a phone number"],
  },
  address: {
    type: Object,
    required: [true, "Please provide an address"],
  },
  orderNumber: {
    type: [Object], // Changed to an array of objects
    required: [true, "Please provide an order number"],
  },
});

// Use the existing model if available or create a new one
const Customer = models.Customer || model("Customer", CustomerSchema);

export default Customer;
