import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamps: { type: Number } }]
})

const URLModel = mongoose.model("url", URLSchema);

export default URLModel;