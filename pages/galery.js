import { connectToDatabase } from "../lib/mongodb";
import { Container } from "../shared/styles";

const Galery = ({ artworks }) => (
    <Container>
        {/* <form action="/api/artwork" method="POST" encType="multipart/form-data">
            <input type="file" name="artworkImage"></input>
            <input type="submit"></input>
        </form> */}
        {artworks &&
            JSON.parse(artworks).map((artwork, key) => (
                <div key={key}>
                    ${artwork._id}
                    <img width="100px" src={artwork.image_link} alt="" />
                </div>
            ))}
    </Container>
);

export default Galery;

export const getStaticProps = async () => {
    let db = await connectToDatabase();
    let artworks = await db.collection("artworks").find({}).sort({ published: -1 }).toArray();

    return { props: { artworks: JSON.stringify(artworks) } };
};
