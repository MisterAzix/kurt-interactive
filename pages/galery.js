import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Container } from "../shared/styles";

const Galery = () => {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        fetchArtwork();
        let fetchInterval = setInterval(fetchArtwork, 10000);

        return () => {
            clearInterval(fetchInterval);
        };
    }, []);

    const fetchArtwork = async () => {
        let res = await fetch("/api/artwork");
        let json = await res.json();

        setArtworks(json);
    };

    return (
        <Container>
            <GaleryContainer>
                {artworks.map((artwork, key) => (
                    <div key={key}>
                        <img width="100px" src={artwork.image_link} alt="" />
                    </div>
                ))}
            </GaleryContainer>
        </Container>
    );
};

export default Galery;

const GaleryContainer = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
`;
