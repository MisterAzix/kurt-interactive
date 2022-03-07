import styled from "@emotion/styled";
import Head from "next/head";
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
        let newJson = json.reverse();
        /* newJson.length = 14; */

        setArtworks(newJson);
    };

    return (
        <>
            <Head>
                <title>Kurt - Galerie</title>
                <meta
                    name="description"
                    content="Retrouvez les oeuvres de toutes les personnes ayant participées à l’aventure Kurt Interactive."
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="kurt-interactive.vercel.app/galery" />
                <meta property="og:title" content="Kurt - Galerie" />
                <meta
                    property="og:description"
                    content="Retrouvez les oeuvres de toutes les personnes ayant participées à l’aventure Kurt Interactive."
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/hf10ee93o/image/upload/v1645299205/Meta_image_-_Galerie_zcoorm.jpg"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="kurt-interactive.vercel.app/galery" />
                <meta property="twitter:title" content="Kurt - Galerie" />
                <meta
                    property="twitter:description"
                    content="Retrouvez les oeuvres de toutes les personnes ayant participées à l’aventure Kurt Interactive."
                />
                <meta
                    property="twitter:image"
                    content="https://res.cloudinary.com/hf10ee93o/image/upload/v1645299205/Meta_image_-_Galerie_zcoorm.jpg"
                />
            </Head>
            <Container>
                <Title>Galerie</Title>
                <GaleryContainer>
                    {artworks.map((artwork, key) => (
                        <div key={key}>
                            <img width="256px" src={artwork.image_link} alt="" />
                        </div>
                    ))}
                </GaleryContainer>
            </Container>
        </>
    );
};

export default Galery;

const Container = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    /* background: center / cover no-repeat url("/paper_texture_background.png"), #fefef2; */
    /* background-color: #fefef2; */
    background-color: #1a1a1a;
`;

const GaleryContainer = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
`;

const Title = styled.h1`
    display: none;
`;
