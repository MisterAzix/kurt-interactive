import styled from "@emotion/styled";
import { Container } from "../../shared/styles";
import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Button from "../../components/Button";
import PostIt from "../../components/PostIt";

import Footstep from "../../drawings/Footstep";
import Paint from "../../components/paint/paint";
import Bike from "../../drawings/Bike";
import Car from "../../drawings/Car";
import Truck from "../../drawings/Truck";
import Star from "../../drawings/Star";
import Circle from "../../drawings/Circle";

const Chapter = () => {
    const [slide, SetSlide] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        let startTimeout = setTimeout(() => setStart(true), 5000);

        return () => {
            clearTimeout(startTimeout);
        };
    }, []);

    const handleNextSlide = () => {
        SetSlide(slide + 1);
    };

    switch (slide) {
        default:
            return (
                <Container>
                    <Grid>
                        <Item name="header">
                            <Header />
                        </Item>
                        <Item name="illustration">
                            <Painting src="/paints/vue_des_falaises_de_houlgate.jpeg" alt="" />
                            <Footstep top="90" />
                        </Item>
                        <Item name="postit">
                            <PostItContainer>
                                <PostIt>Dirige-toi maintenant vers le tableau avec un ballon en dessous.</PostIt>
                            </PostItContainer>
                        </Item>
                        <Item name="button">
                            {start && (
                                <Button arrow="right" onClick={handleNextSlide}>
                                    J’y suis !
                                </Button>
                            )}
                        </Item>
                    </Grid>
                    <Bike bottom="5" right="-5" />
                    <Car bottom="15" left="0" />
                    <Truck bottom="15" right="15" />
                    <Star top="48" left="24" />
                    <Circle top="52" right="25" />
                </Container>
            );

        case 1:
            const paintItem = [
                {
                    src: "cart",
                    width: "24%",
                    height: "17%",
                    bottom: "13%",
                    left: "76%",
                    opacity: "0.4",
                },
                {
                    src: "human",
                    width: "30%",
                    height: "23%",
                    bottom: "5%",
                    left: "35%",
                    opacity: "0.6",
                },
                {
                    src: "dog",
                    width: "14%",
                    height: "13%",
                    bottom: "-2%",
                    left: "72%",
                    opacity: "0.7",
                },
            ];
            return <Paint filename="vue_des_falaises_de_houlgate.jpeg" href="/chapter/3" paintItem={paintItem} />;
    }
};

export default Chapter;

const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    text-align: center;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr 1fr 20vh;
    grid-template-areas:
        "header"
        "illustration"
        "postit"
        "button";
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

const Painting = styled.img`
    width: 24rem;
    padding: 4rem;
    background: center / calc(100% + -0.5rem) 100% no-repeat url("/frame.svg");
    background-position-x: calc(50% - 0.25rem);
`;

const PostItContainer = styled.div`
    z-index: 1;
    margin-top: 4rem;
`;
