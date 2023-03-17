import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case "POST":
            try {
                const usersData = await User.findOne({
                    email: req.body.email,
                }); /* find all the data in our database */
                if (usersData !== null) {
                    return res.status(200).json({
                        success: true,
                        data: usersData?.ImageUrls,
                    });
                } else {
                    console.log(usersData, "usersdata");
                    return res.status(400).json({ message: "User not found" });
                }
                // }
            } catch (error) {
                console.log(error, "error");
                return res.status(400).json({ message: "User not found" });
            }
    }
}
