import styled from "@emotion/styled";
import { Container } from "../shared/styles";
import Link from "next/link";
import Head from "next/head";

import Header from "../components/Header";
import Button from "../components/Button";

import Zigzag from "../drawings/Zigzag";
import Spring from "../drawings/Spring";
import Circle from "../drawings/Circle";

const Credits = () => {
    return (
        <>
            <Head>
                <title>Kurt - Crédits</title>
                <meta
                    name="description"
                    content="Kurt Interactive est un projet étudiant réalisé dans le cadre du projet Narration Interactive de la formation MMI Bordeaux en partenariat avec le musée des Beaux-Arts de Bordeaux. Découvrez l’équipe ayant travaillé sur cette expérience."
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="kurt-interactive.vercel.app/credits" />
                <meta property="og:title" content="Kurt - Crédits" />
                <meta
                    property="og:description"
                    content="Kurt Interactive est un projet étudiant réalisé dans le cadre du projet Narration Interactive de la formation MMI Bordeaux en partenariat avec le musée des Beaux-Arts de Bordeaux. Découvrez l’équipe ayant travaillé sur cette expérience."
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/hf10ee93o/image/upload/v1645299203/Meta_image_-_Cr%C3%A9dits_jdfrpa.jpg"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="kurt-interactive.vercel.app/credits" />
                <meta property="twitter:title" content="Kurt - Crédits" />
                <meta
                    property="twitter:description"
                    content="Kurt Interactive est un projet étudiant réalisé dans le cadre du projet Narration Interactive de la formation MMI Bordeaux en partenariat avec le musée des Beaux-Arts de Bordeaux. Découvrez l’équipe ayant travaillé sur cette expérience."
                />
                <meta
                    property="twitter:image"
                    content="https://res.cloudinary.com/hf10ee93o/image/upload/v1645299203/Meta_image_-_Cr%C3%A9dits_jdfrpa.jpg"
                />
            </Head>
            <Container>
                <Grid>
                    <Item name="header">
                        <Header />
                    </Item>
                    <Item name="content">
                        <Title>Crédits</Title>
                        <CreditsContainer>
                            <p>
                                <a target="_blank" rel="noreferrer" href="https://www.mmibordeaux.com/">
                                    MMI Bordeaux
                                </a>{" "}
                                &<br />
                                <a target="_blank" rel="noreferrer" href="https://www.musba-bordeaux.fr/">
                                    Musée des Beaux-Arts
                                </a>
                            </p>
                        </CreditsContainer>
                        <CreditsContainer>
                            <h2>Concept</h2>
                            <p>Toute l’équipe</p>
                        </CreditsContainer>
                        <CreditsContainer>
                            <h2>Chef de projet</h2>
                            <p>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arthur-blanc33/">
                                    Arthur Blanc
                                </a>
                            </p>
                            <p>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alexandredupin/">
                                    Alexandre dupin
                                </a>
                            </p>
                        </CreditsContainer>
                        <CreditsContainer>
                            <h2>
                                Direction Artistique &<br /> Illustrations
                            </h2>
                            <p>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.linkedin.com/in/marie-simonek-524843194/"
                                >
                                    Marie Simonek
                                </a>
                            </p>
                        </CreditsContainer>
                        <CreditsContainer>
                            <h2>
                                Direction Artistique &<br /> Design d’interface
                            </h2>
                            <p>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/regis-cosaque/">
                                    Régis Cosaque
                                </a>
                            </p>
                            <p>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/avocaraw/">
                                    Sébastien Bonnemaison
                                </a>
                            </p>
                        </CreditsContainer>
                        <CreditsContainer>
                            <h2>Développement</h2>
                            <p>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/maxence-breuilles/">
                                    Maxence Breuilles
                                </a>
                            </p>
                            <p>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/clement-renou/">
                                    Clément renou
                                </a>
                            </p>
                        </CreditsContainer>
                    </Item>
                    <Item name="button">
                        <Link href="/">
                            <Button arrow="left">Retour</Button>
                        </Link>
                    </Item>
                </Grid>
                <Zigzag top="20" right="15" />
                <Spring bottom="15" right="10" />
                <Circle bottom="45" left="10" />
            </Container>
        </>
    );
};

export default Credits;

const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    text-align: center;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr 20vh;
    grid-template-areas:
        "header"
        "content"
        "button";
`;

const Item = styled.div`
    position: relative;
    grid-area: ${(props) => props.name};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const Title = styled.h1`
    margin: 0;
`;

const CreditsContainer = styled.div`
    h2 {
        font-size: 1rem;
        font-weight: 300;
        line-height: 1;
        margin: 8px;
    }

    p {
        font-size: 1.2rem;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1;
        margin: 4px;

        a {
            color: #000000;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
