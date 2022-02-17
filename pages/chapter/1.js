import styled from "@emotion/styled";
import { Container } from "../../shared/styles";
import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Button from "../../components/Button";
import PostIt from "../../components/PostIt";

import Footstep from "../../drawings/Footstep";
import Clic from "../../drawings/Clic";
import Paint from "../../components/paint/paint";
import Bear from "../../drawings/Bear";
import Truck from "../../drawings/Truck";
import Bike from "../../drawings/Bike";
import Car from "../../drawings/Car";
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
                            <Painting src="/paints/vue_de_bordeaux_prise_de_floirac.jpg" alt="" />
                            <Footstep top="90" />
                        </Item>
                        <Item name="postit">
                            <PostItContainer>
                                <PostIt>Dirige-toi maintenant vers le tableau avec une peluche en dessous.</PostIt>
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
                    <Bear bottom="2" right="0" />
                    <Truck bottom="15" left="0" />
                    <Star bottom="48" left="24" />
                    <Circle bottom="52" right="25" />
                </Container>
            );
        case 1:
            return (
                <Container>
                    <Grid>
                        <Item name="header">
                            <Header />
                        </Item>
                        <Item name="illustration">
                            <Painting src="/paints/vue_de_bordeaux_prise_de_floirac.jpg" alt="" />
                            <Clic top="100" />
                        </Item>
                        <Item name="postit">
                            <PostItContainer>
                                <PostIt>
                                    Pour jouer, sélectionne les éléments dans le tableau puis ajoute les dans ton
                                    inventaire.
                                </PostIt>
                            </PostItContainer>
                        </Item>
                        <Item name="button">
                            <Button arrow="right" onClick={handleNextSlide}>
                                C’est parti !
                            </Button>
                        </Item>
                    </Grid>
                    <Bike bottom="5" right="-5" />
                    <Car bottom="5" left="-5" />
                    <Truck bottom="15" right="15" />
                    <Star top="48" left="24" />
                    <Circle top="52" right="25" />
                </Container>
            );
        case 2:
            const paintItem = [
                { src: "boat", width: "14%", height: "12%", bottom: "24%", left: "13%", opacity: "0.8" },
                { src: "tree", width: "34%", height: "54%", top: "7%", left: "69%", opacity: "0.4" },
                { src: "donkey", width: "9%", height: "19%", bottom: "6%", left: "49%", opacity: "0.7" },
                { src: "bridge", width: "30%", height: "10%", bottom: "31%", left: "51%", opacity: "0.7" },
            ];
            return <Paint filename="vue_de_bordeaux_prise_de_floirac.jpg" href="/chapter/2" paintItem={paintItem} />;
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
    margin-top: 4rem;
    z-index: 1;
`;
