import { useRef, useState } from "react";
import { Container } from "../shared/styles";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import axios from "axios";
import Link from "next/link";

import { useInventoryContext } from "../lib/context";

import Header from "../components/Header";
import PostIt from "../components/PostIt";
import Button from "../components/Button";
import DrawingSelector from "../components/DrawingSelector";

const Artwork = () => {
    const [artworkState, setArtworkState] = useState(0);
    const { inventory, setInventory } = useInventoryContext([]);
    const [board, setBoard] = useState([]);
    const containerRef = useRef();
    const containerFinalRef = useRef();

    const handleStart = () => {
        setArtworkState(artworkState + 1);
    };

    const handleEnd = () => {
        html2canvas(containerRef.current).then(async function (canvas) {
            containerFinalRef.current.appendChild(canvas);
            let res = await axios.post("/api/artwork", { image_url: canvas.toDataURL() });
        });

        setArtworkState(artworkState + 1);
    };

    const handleUse = (e) => {
        console.log(e.target);

        setBoard([...board, inventory[e.target.id]]);
        setInventory((prevState) => prevState.filter((_, i) => i != e.target.id));
    };

    switch (artworkState) {
        case 2:
            return (
                <Container>
                    <Grid layout="end">
                        <Item name="header">
                            <Header />
                        </Item>
                        <Item name="postit">
                            <PostIt rotation={-5}>Ton dessin est terminé !</PostIt>
                        </Item>
                        <Item name="board">
                            <Board ref={containerFinalRef}/>
                        </Item>
                        <Item name="button">
                            <Link href="/conclusion">
                                <Button arrow="right">Suivant</Button>
                            </Link>
                        </Item>
                    </Grid>
                </Container>
            );
        case 1:
            return (
                <Container>
                    <Grid layout="progress">
                        <Item name="header">
                            <Header />
                        </Item>
                        <Item name="postit">
                            <PostIt>Fais glisser les éléments sur la feuille pour créer ton œuvre.</PostIt>
                        </Item>
                        <Item name="board">
                            <Board ref={containerRef}>
                                {board.map((item, key) => (
                                    <Drawing
                                        scale="6"
                                        key={key}
                                        drag
                                        dragConstraints={containerRef}
                                        dragMomentum={false}
                                    >
                                        <DrawingSelector drawing={item} />
                                    </Drawing>
                                ))}
                            </Board>
                            <Inventory>
                                {inventory.map((item, key) => (
                                    <Drawing scale="4" onClick={handleUse} id={key} key={key}>
                                        <DrawingSelector drawing={item} />
                                    </Drawing>
                                ))}
                            </Inventory>
                        </Item>
                        <Item name="button">
                            <Button onClick={handleEnd}>J’ai terminé</Button>
                        </Item>
                    </Grid>
                </Container>
            );
        default:
            return (
                <Container>
                    <Grid layout="start">
                        <Item name="header">
                            <Header />
                        </Item>
                        <Item name="postit">
                            <PostIt>Chouette ! Tu as récupéré tous les éléments pour créer ton oeuvre.</PostIt>
                        </Item>
                        <Item name="button">
                            <Button onClick={handleStart}>Je crée mon oeuvre</Button>
                        </Item>
                    </Grid>
                </Container>
            );
    }
};

export default Artwork;

const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    text-align: center;
    grid-template-columns: 1fr;
    ${(props) => {
        switch (props.layout) {
            case "end":
                return css`
                    grid-template-rows: min-content 10vh 1fr 20vh;
                    grid-template-areas:
                        "header"
                        "postit"
                        "board"
                        "button";
                `;
            case "progress":
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
                    grid-template-rows: min-content 1fr 1fr 20vh;
                    grid-template-areas:
                        "header"
                        "postit"
                        "postit"
                        "button";
                `;
        }
    }}
`;

const Item = styled.div`
    grid-area: ${(props) => props.name};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;

const Board = styled.div`
    position: relative;
    width: 90%;
    height: 50%;
    border: 2px #1a1a1a solid;
    border-radius: 4px;

    div {
        position: absolute;
        display: inline-block;
        top: 40%;
        left: 40%;
    }
`;

const Inventory = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 80%;
    /* height: 20%; */
    padding: 1rem;
    border: 2px #1a1a1a solid;
    border-radius: 4px;
`;

const Drawing = styled(motion.div)`
    position: relative;
    height: ${(props) => props.scale || 8}rem;
    width: ${(props) => props.scale || 8}rem;

    svg {
        position: absolute;
        left: 0;
        top: 0;
        max-height: 100%;
        max-width: 100%;
        pointer-events: none;
    }
`;
