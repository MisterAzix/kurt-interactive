import { connectToDatabase } from "../../lib/mongodb";
import { v2 as cloudinary } from "cloudinary";
/* import multer from "multer"; */
import nc from "next-connect";

/* const upload = multer({ dest: '/tmp' }); */

if (process.env.CLOUDINARY_URL) {
    const { hostname: cloud_name, username: api_key, password: api_secret } = new URL(process.env.CLOUDINARY_URL);

    cloudinary.config({
        cloud_name,
        api_key,
        api_secret,
    });
}

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
});

handler.get(async (req, res) => {
    let db = await connectToDatabase();
    let artworks = await db.collection("artworks").find({}).sort({ published: -1 }).toArray();

    res.json(artworks);
});

handler.post(/* upload.single('artworkImage'), */ async (req, res) => {
    try {
        let artworkImage;
        if (req.body.image_url) {
            const image = await cloudinary.uploader.upload(req.body.image_url, {
                folder: 'kurt_interactive',
                /* width: 472,
                height: 278, */
                crop: "fill",
            });
            artworkImage = image.secure_url;
        }

        let db = await connectToDatabase();
        await db.collection("artworks").insertOne({
            username: "",
            image_link: artworkImage,
        });

        return res.json({
            message: "Artwork added successfully!",
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
});

export default handler;
