import styled from "@emotion/styled";
import { Container } from "../shared/styles";
import Link from "next/link";

import Button from "../components/Button";
import Bike from "../drawings/Bike";
import Bird from "../drawings/Bird";
import Cloud from "../drawings/Cloud";
import House from "../drawings/House";
import Sun from "../drawings/Sun";
import Flower from "../drawings/Flower";
import Zigzag from "../drawings/Zigzag";
import Spring from "../drawings/Spring";
import Circle from "../drawings/Circle";
import Star from "../drawings/Star";

const Home = () => (
    <Container>
        <Grid>
            <Item name="title">
                <Title>kurt</Title>
            </Item>
            <Item name="button">
                <Link href="/introduction">
                    <Button>Commencer l’expérience</Button>
                </Link>
                <Link href="/credits">
                    <Button layout="secondary">Crédits</Button>
                </Link>
            </Item>
        </Grid>
        <Sun top="5" right="10" />
        <Cloud top="15" left="10" />
        <Bird top="35" right="10" />
        <Bike bottom="35" right="10" />
        <House bottom="30" left="10" />
        <Flower bottom="3" right="15" />
        <Zigzag top="35" left="20" />
        <Spring bottom="37" left="50" />
        <Circle bottom="5" left="15" />
        <Circle top="30" left="5" />
        <Circle top="42" right="38" />
        <Star top="48" left="20" />
        <Star bottom="13" left="25" />
        <Star bottom="25" right="15" />
    </Container>
);

export default Home;

const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    text-align: center;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
        "."
        "title"
        "button";
`;

const Item = styled.div`
    grid-area: ${(props) => props.name};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const Title = styled.h1`
    grid-area: title;
    font-family: "HeartVibes";
    font-size: 4.5rem;
`;
