import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        postText: {
            type: String,
            required: true,
            trim: true,
        },

        likes: [
            {
                type: Array,
                default: [],
            },
        ],

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);

export default Post;