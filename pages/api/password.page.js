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
                const usersData = await User.findOne({
                    email: email,
                }); /* find all the data in our database */
                if (usersData !== null) {
                    const selectedImagesUrl = selectedImages?.reduce(
                        (acc, curr) => {
                            acc = `${acc}|${curr.id}${curr.imageURL}|`;
                            return acc;
                        },
                        ""
                    );
                    const currentHashValue =
                        CryptoJS.SHA256(selectedImagesUrl).toString();
                    const isPatternMatched =
                        currentHashValue === usersData.hashedSelectedImagesUrl;
                    if (isPatternMatched) {
                        res.status(200).json({
                            success: true,
                            message: "Successful login!",
                        });
                    } else {
                        res.status(400).json({
                            message: "Login failed! Pattern invalid",
                        });
                    }
                } else {
                    return res
                        .status(400)
                        .json({ message: "Login failed! Pattern invalid" });
                }
                // }
            } catch (error) {
                console.log(error, "error");
                return res.status(400).json({ message: "Login failed" });
            }
    }
}
