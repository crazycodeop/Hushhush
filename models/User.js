import mongoose from "mongoose";

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    ImageUrls: [{ id: Number, imageURL: String }],
    hashedSelectedImagesUrl: {
        type: String,
    },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
