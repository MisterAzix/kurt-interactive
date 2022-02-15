import styled from "@emotion/styled";
import { useState } from "react";
import { Container } from "../shared/styles";

import Header from "../components/Header";
import PostIt from "../components/PostIt";
import Button from "../components/Button";
import { css } from "@emotion/react";

const Introduction = () => {
    const [slide, setSlide] = useState(0);

    const handleNext = () => {
        setSlide(slide + 1);
    };

    switch (slide) {
        case 1:
            return <Container></Container>;
        case 2:
            return <Container></Container>;
        case 3:
            return <Container></Container>;
        case 4:
            return <Container></Container>;
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
                    grid-template-rows: min-content 10vh 1fr 20vh;
                    grid-template-areas:
                        "header"
                        "postit"
                        "board"
                        "button";
                `;
            case "2":
                return css`
                    grid-template-rows: min-content 10vh 1fr 20vh;
                    grid-template-areas:
                        "header"
                        "postit"
                        "board"
                        "button";
                `;
            default:
                return css`
                    grid-template-rows: min-content 1fr 20vh;
                    grid-template-areas:
                        "header"
                        "illustration"
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
    width: 100%;
`;

const PostItContainer = styled.div`
    position: absolute;
    top: 75%;
`;
