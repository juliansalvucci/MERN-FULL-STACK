import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, //quita los espacios vacios al principio y al final. de paso evita ingresar solo '  '.
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      public_id: String,
      url: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Post", postSchema);