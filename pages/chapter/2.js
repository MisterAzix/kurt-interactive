import styled from "@emotion/styled"
import { Container } from "../../shared/styles"
import { useEffect, useState } from "react"

import Header from "../../components/Header"
import Button from "../../components/Button"
import PostIt from "../../components/PostIt"

import Footstep from "../../drawings/Footstep"
import Clic from "../../drawings/Clic"
import Paint from "../../components/paint/paint"

const Chapter = () => {
    const [slide, SetSlide] = useState(0)
    const [start, setStart] = useState(false)

    useEffect(() => {
        let startTimeout = setTimeout(() => setStart(true), 5000)

        return () => {
            clearTimeout(startTimeout)
        }
    }, [])

    const handleNextSlide = () => {
        SetSlide(slide + 1)
    }

    switch (slide) {
        default:
            return (
                <Container>
                    <Grid>
                        <Item name="header">
                            <Header/>
                        </Item>
                        <Item name="illustration">
                            <Painting src="/paints/vue_des_falaises_de_houlgate.jpeg" alt=""/>
                            <Footstep top="90"/>
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
                </Container>
            )
        case 1:
            return (
                <Container>
                    <Grid>
                        <Item name="header">
                            <Header/>
                        </Item>
                        <Item name="illustration">
                            <Painting src="/paints/vue_des_falaises_de_houlgate.jpeg" alt=""/>
                            <Clic top="100"/>
                        </Item>
                        <Item name="postit">
                            <PostItContainer>
                                <PostIt>
                                    Pour jouer, selectionne les éléments dans le tableau puis ajoute les dans ton
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
                </Container>
            )
        case 2:
            const paintItem = [{
                src: "cart",
                width: "24%",
                height: "17%",
                bottom: "13%",
                left: "76%",
                opacity: "0.4"
            },
                {
                    src: "human",
                    width: "30%",
                    height: "23%",
                    bottom: "5%",
                    left: "35%",
                    opacity: "0.6"

                }, {
                    src: "dog",
                    width: "14%",
                    height: "13%",
                    bottom: "-2%",
                    left: "72%",
                    opacity: "0.7"
                }]
            return <Paint filename="vue_des_falaises_de_houlgate.jpeg" href="/chapter/3" paintItem={paintItem}/>
    }
}

export default Chapter

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
`

const Item = styled.div`
    position: relative;
    grid-area: ${(props) => props.name};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`

const Painting = styled.img`
    width: ${(props) => props.width || 90}%;
    padding: 4rem;
    background: center / contain no-repeat url("/frame.svg");
`

const PostItContainer = styled.div`
    margin-top: 4rem;
`
