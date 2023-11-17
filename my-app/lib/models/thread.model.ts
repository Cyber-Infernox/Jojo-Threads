import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, // This type refers to id of object (Will store another user id)
    ref: "User",
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId, // Stores another community id
    ref: "Community",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  parentId: {
    type: String,
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId, // Stores another thread id
      ref: "Thread", // One thread can have more than one threads (Recursion of threads)
    },
  ],
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;
