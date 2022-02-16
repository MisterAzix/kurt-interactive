import styled from "@emotion/styled";
import { connectToDatabase } from "../lib/mongodb";
import { Container } from "../shared/styles";

const Galery = ({ artworks }) => (
    <Container>
        <GaleryContainer>
            {artworks &&
                JSON.parse(artworks).map((artwork, key) => (
                    <div key={key}>
                        <img width="100px" src={artwork.image_link} alt="" />
                    </div>
                ))}
        </GaleryContainer>
    </Container>
);

export default Galery;

export const getServerSideProps = async () => {
    let db = await connectToDatabase();
    let artworks = await db.collection("artworks").find({}).sort({ published: -1 }).toArray();

    return { props: { artworks: JSON.stringify(artworks) } };
};

const GaleryContainer = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
`;