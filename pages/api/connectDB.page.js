// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const bcrypt = require("bcrypt");
const saltRounds = 10;

export default async function handler(req, res) {
	const imagesSet = req.body.imagesSet;
	const selectedImagesSet = req.body.selectedImagesSet;
	try {
		const selectedHashImages = selectedImagesSet.reduce((acc, currImage) => {
			const salt = bcrypt.genSaltSync(saltRounds);
			const hash = bcrypt.hashSync(currImage.imageURL, salt);
			acc.push({ id: currImage.id, imageURL: hash });
			return acc;
		}, []);

		console.log(selectedHashImages, "selectedHashImages");

		res.status(200).json({ name: "John Doe" });
	} catch (error) {
		console.log("error", error.toString());
	}
}
