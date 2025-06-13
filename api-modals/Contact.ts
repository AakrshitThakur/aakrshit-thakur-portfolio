import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  message: {
    type: String,
    required: [true, "Please provide a message"],
  },
  social: {
    type: String,
  },
});

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
