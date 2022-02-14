import { connectToDatabase } from "../../lib/mongodb";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import nc from "next-connect";

const upload = multer({ dest: '/tmp' });

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

handler.post(upload.single('artworkImage'), async (req, res) => {
    try {
        let artworkImage;
        console.log(req.file);
        if (req.file) {
            const image = await cloudinary.uploader.upload(req.file.path, {
                folder: 'kurt_interactive',
                /* width: 512,
                height: 512,
                crop: "fill", */
            });
            artworkImage = image.secure_url;
            console.log(artworkImage);
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

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
