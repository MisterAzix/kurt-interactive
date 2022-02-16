import styled from "@emotion/styled";
import { Container } from "../shared/styles";
import Link from "next/link";

import Header from "../components/Header";
import Button from "../components/Button";

import Zigzag from "../drawings/Zigzag";
import Spring from "../drawings/Spring";
import Circle from "../drawings/Circle";

const Credits = () => {
    return (
        <Container>
            <Grid>
                <Item name="header">
                    <Header />
                </Item>
                <Item name="content">
                    <h1>Crédits</h1>
                    <CreditsContainer>
                        <h2>Concept</h2>
                        <p>Toute l’équipe</p>
                    </CreditsContainer>
                    <CreditsContainer>
                        <h2>Chef de projet</h2>
                        <p>
                            Arthur Blanc
                            <a href="https://www.linkedin.com/in/arthur-blanc33/" />
                        </p>
                        <p>
                            Alexandre dupin
                            <a href="https://alexandredupin.com/" />
                        </p>
                    </CreditsContainer>
                    <CreditsContainer>
                        <h2>
                            Direction Artistique <br />& Illustrations
                        </h2>
                        <p>
                            Marie Simonek
                            <a href="https://www.linkedin.com/in/marie-simonek-524843194/" />
                        </p>
                    </CreditsContainer>
                    <CreditsContainer>
                        <h2>
                            Direction Artistique <br />& Design d’interface
                        </h2>
                        <p>
                            Régis Cosaque
                            <a href="https://www.linkedin.com/in/regis-cosaque/" />
                        </p>
                        <p>
                            Sébastien Bonnemaison
                            <a href="https://www.instagram.com/avocaraw/" />
                        </p>
                    </CreditsContainer>
                    <CreditsContainer>
                        <h2>Développement</h2>
                        <p>
                            Maxence Breuilles
                            <a href="https://github.com/MisterAzix" />
                        </p>
                        <p>
                            Clément renou
                            <a href="https://github.com/FlanB" />
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
    gap: 2rem;
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
    }
`;
