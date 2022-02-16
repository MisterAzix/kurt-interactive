import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";
import { Container } from "../shared/styles";
import Link from "next/link";

import Header from "../components/Header";
import PostIt from "../components/PostIt";
import Button from "../components/Button";
import Dialog from "../components/Dialog";

const Introduction = () => {
    const [slide, setSlide] = useState(0);

    const handleNext = () => {
        setSlide(slide + 1);
    };

    switch (slide) {
        case 1:
            return (
                <Container>
                    <Grid slide="1">
                        <Item name="header">
                            <Header />
                        </Item>
                        <Item name="illustration">
                            <Illustration width={90} src="/illustrations/painting.png" alt="" />
                        </Item>
                        <Item name="dialog">
                            <Dialog name="KURT :">Maman, comment devenir un grand artiste ?</Dialog>
                        </Item>
                        <Item name="button">
                            <Button arrow="right" onClick={handleNext}>
                                Continuer
                            </Button>
                        </Item>
                    </Grid>
                </Container>
            );
        case 2:
            return (
                <Container>
                    <Grid slide="1">
                        <Item name="header">
                            <Header />
                        </Item>
                        <Item name="illustration">
                            <Illustration width={50} src="/illustrations/mother.png" alt="" />
                        </Item>
                        <Item name="dialog">
                            <Dialog name="MÈRE DE KURT :">
                                Tu sais Kurt, pour être un artiste, il faut être une grande personne et avoir beaucoup
                                de connaissances.
                            </Dialog>
                        </Item>
                        <Item name="button">
                            <Button arrow="right" onClick={handleNext}>
                                Continuer
                            </Button>
                        </Item>
                    </Grid>
                </Container>
            );
        case 3:
            return (
                <Container>
                    <Grid slide="2">
                        <Item name="header">
                            <Header />
                        </Item>
                        <Item name="illustration">
                            <Illustration width={90} src="/illustrations/hands.png" alt="" />
                        </Item>
                        <Item name="postit">
                            <PostIt rotation={-5}>
                                Tu n’es pas d’accord ! Toi aussi tu veux être un artiste !
                                <br />
                                <br />
                                Tu te munis de ton carnet et pars à la découverte du musée.
                            </PostIt>
                        </Item>
                        <Item name="button">
                            <Button arrow="right" onClick={handleNext}>
                                Continuer
                            </Button>
                        </Item>
                    </Grid>
                </Container>
            );
        case 4:
            return (
                <Container>
                    <Grid slide="2">
                        <Item name="header">
                            <Header />
                        </Item>
                        <Item name="illustration">
                            <Illustration width={90} src="/illustrations/museum_interior.png" alt="" />
                        </Item>
                        <Item name="postit">
                            <PostIt>
                                Ton objectif est de te déplacer dans le musée des Beaux Arts pour récupérer des éléments
                                des oeuvres d’art.
                            </PostIt>
                        </Item>
                        <Item name="button">
                            <Link href="/chapter/1">
                                <Button arrow="right">C'est parti !</Button>
                            </Link>
                        </Item>
                    </Grid>
                </Container>
            );
        default:
            return (
                <Container>
                    <Grid slide="0">
                        <Item name="header">
                            <Header />
                        </Item>
                        <Item name="illustration">
                            <Illustration src="/illustrations/museum_front.png" alt="" />
                            <PostItContainer>
                                <PostIt>
                                    Hello Kurt, aujourd’hui ta maman t’emmène visiter le Musée des beaux arts de
                                    Bordeaux. Tu vas pouvoir admirer les oeuvres de grands artistes !
                                </PostIt>
                            </PostItContainer>
                        </Item>
                        <Item name="button">
                            <Button arrow="right" onClick={handleNext}>
                                Continuer
                            </Button>
                        </Item>
                    </Grid>
                </Container>
            );
    }
};

export default Introduction;

const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    text-align: center;
    grid-template-columns: 1fr;
    ${(props) => {
        switch (props.slide) {
            case "1":
                return css`
                    grid-template-rows: min-content 1fr min-content 20vh;
                    grid-template-areas:
                        "header"
                        "illustration"
                        "dialog"
                        "button";
                `;
            case "2":
                return css`
                    grid-template-rows: min-content 1fr 1fr 20vh;
                    grid-template-areas:
                        "header"
                        "illustration"
                        "postit"
                        "button";
                `;
            default:
                return css`
                    grid-template-rows: min-content 1fr 10vh 20vh;
                    grid-template-areas:
                        "header"
                        "illustration"
                        "."
                        "button";
                `;
        }
    }}
`;

const Item = styled.div`
    position: relative;
    grid-area: ${(props) => props.name};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;

const Illustration = styled.img`
    width: ${(props) => props.width || 90}%;
`;

const PostItContainer = styled.div`
    position: absolute;
    top: 80%;
`;
