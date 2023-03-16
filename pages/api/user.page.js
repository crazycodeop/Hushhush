import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case "GET":
            try {
                const users = await User.findOne({
                    email: req.body.email,
                }); /* find all the data in our database */
                res.status(200).json({ success: true, data: users.ImageUrls });
            } catch (error) {
                res.status(400).json({ message: "User not found" });
            }
            break;
        case "POST":
            try {
                // console.log(req.body, "req");
                const IfUserExists = await User.findOne({
                    $or: [
                        { email: req.body.email },
                        { username: req.body.username },
                    ],
                });
                if (IfUserExists) {
                    res.status(400).json({ message: "User already exists" });
                } else {
                    const user = await User.create(
                        req.body
                    ); /* create a new document in the database */
                    console.log(user, "response");
                    res.status(201).json({ success: true, data: user });
                }
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
