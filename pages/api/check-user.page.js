import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case "POST":
            try {
                const IfUserExists = await User.findOne({
                    $or: [
                        { email: req.body.email },
                        { username: req.body.username },
                    ],
                });
                if (IfUserExists) {
                    res.status(400).json({ message: "User already exists" });
                } else {
                    res.status(201).json({ success: true });
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
