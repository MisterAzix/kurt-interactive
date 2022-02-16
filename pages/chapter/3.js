import styled from "@emotion/styled"
import { Container } from "../../shared/styles"
import { useEffect, useState } from "react"

import Header from "../../components/Header"
import Button from "../../components/Button"
import PostIt from "../../components/PostIt"

import Footstep from "../../drawings/Footstep"
import Paint from "../../components/paint/paint"
import Bear from "../../drawings/Bear"
import Truck from "../../drawings/Truck"
import Star from "../../drawings/Star"
import Zigzag from "../../drawings/Zigzag"
import Circle from "../../drawings/Circle"

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
                                <PostIt>Dirige-toi maintenant vers le tableau avec un jouet en dessous.</PostIt>
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
                    <Bear bottom="2" right="0"/>
                    <Truck bottom="15" left="0"/>
                    <Star bottom="48" left="24"/>
                    <Zigzag bottom="20" left="40"/>
                    <Circle bottom="52" right="25"/>
                </Container>
            )
        case 1:
            const paintItem = [{ src: "tiger", width: "24%", height: "68%", top: "10%", left: "70%", opacity: "0.1" },
                { src: "lion", width: "38%", height: "56%", top: "0%", left: "14%", opacity: "0.2" },
                { src: "saber", width: "24%", height: "16%", bottom: "21%", left: "51%", opacity: "0.5" }]
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
    background: center / calc(100% + -0.5rem) 100% no-repeat url("/frame.svg");
    background-position-x: calc(50% - 0.25rem);
`

const PostItContainer = styled.div`
    z-index: 1;
    margin-top: 4rem;
`
