import styled from "@emotion/styled";
import { useEffect, useState } from "react";

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
                {artworks.reverse().map((artwork, key) => (
                    <div key={key}>
                        <img width="256px" src={artwork.image_link} alt="" />
                    </div>
                ))}
            </GaleryContainer>
        </Container>
    );
};

export default Galery;

const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    /* background: center / cover no-repeat url("/paper_texture_background.png"), #fefef2; */
    background-color: #fefef2;
`;

const GaleryContainer = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
`;
