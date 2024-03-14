import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
       videoFile: {
        type: String, // Cloudinary url
        required: true
       },
       thumbnail: {
        type: String, // Cloudinary url
        required: true
       },
       title: {
        type: String,
        required: true
       },
       description: {
        type: String,
        required: true
       },
       duration: {
        type: Number, // Cloudinary url
        required: url
       },
       views: {
        type: Number,
        default: 0
       },
       isPublished: {
        type: boolean,
        default: true
       },
       owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
       }
    },
    {
        timestamps: true
    }
)

export const Video = mongoose.model("Video", videoSchema)