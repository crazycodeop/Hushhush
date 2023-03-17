import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
const CryptoJS = require("crypto-js");

export default async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case "POST":
            try {
                const { email, selectedImages } = req.body;
                const selectedImagesUrl = selectedImages?.reduce(
                    (acc, curr) => {
                        acc = `${acc}|${curr.id}${curr.imageURL}|`;
                        return acc;
                    },
                    ""
                );
                const hashValue = CryptoJS.SHA256(selectedImagesUrl).toString();

                /* create a new document in the database */
                const filter = { email: req.body.email };
                const update = { hashedSelectedImagesUrl: hashValue };

                const user = await User.findOneAndUpdate(filter, update);
                console.log(user, "usercreated");
                console.log(hashValue, "hashValue");
                res.status(201).json({ success: true, data: user });
            } catch (error) {
                console.log(error, "error");
                res.status(400).json({ success: false });
            }
            break;
        default:
            console.log(error, "error");
            res.status(400).json({ success: false });
            break;
    }
}
