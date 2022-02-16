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
                            <Painting src="/paints/la_chasse_aux_lions.jpeg" alt=""/>
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
                            <Painting src="/paints/la_chasse_aux_lions.jpeg" alt=""/>
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
                src: "tiger",
                width: "24%",
                height: "68%",
                top: "10%",
                left: "70%",
                opacity: "0.1"
            },
                {
                    src: "lion",
                    width: "38%",
                    height: "56%",
                    top: "0%",
                    left: "14%",
                    opacity: "0.2"
                },
                {
                    src: "saber",
                    width: "24%",
                    height: "16%",
                    bottom: "21%",
                    left: "51%",
                    opacity: "0.5"
                }]
            return <Paint filename="la_chasse_aux_lions.jpeg" href="/artwork" paintItem={paintItem}/>
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
