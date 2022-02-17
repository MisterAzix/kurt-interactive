import { Container } from "../shared/styles"
import { useState } from "react"
import styled from "@emotion/styled"
import PostIt from "../components/PostIt"
import Button from "../components/Button"
import { css } from "@emotion/react"
import Header from "../components/Header"
import Dialog from "../components/Dialog"
import Link from "next/link"
import Scheme from "../drawings/Scheme"
import Pen from "../drawings/Pen"
import Pencil from "../drawings/Pencil"
import Brush from "../drawings/Brush"
import Tube from "../drawings/Tube"

export default function conclusion () {
    const [slide, setSlide] = useState(1)

    const handleNext = () => {
        setSlide(slide + 1)
    }

    switch (slide) {
        case 1:
            return <Container>
                <Grid slide="1">
                    <Item name="header">
                        <Header/>
                    </Item>
                    <Item name="illustration">
                        <Illustration src="/illustrations/director.png"/>
                    </Item>
                    <Item name="postit">
                        <PostIt>Une dame s’approche de toi !
                            C’est la directrice du musée !
                            Elle regarde attentivement ton dessin...</PostIt>
                    </Item>
                    <Item name="button">
                        <Button onClick={handleNext} arrow="right">Suivant</Button>
                    </Item>
                </Grid>
            </Container>
        case 2:
            return <Container>
                <Grid slide="2">
                    <Item name="header">
                        <Header/>
                    </Item>
                    <Item name="illustration">
                        <Illustration src="/illustrations/mother_looking_draw.png"/>
                    </Item>
                    <Item name="postit">
                        <PostIt>Ta maman vous rejoint. Elle aussi regarde ton dessin. Elle est intriguée.</PostIt>
                    </Item>
                    <Item name="button">
                        <Button onClick={handleNext} arrow="right">Suivant</Button>
                    </Item>
                </Grid>
            </Container>
        case 3:
            return <Container>
                <Grid slide="3">
                    <Item name="header">
                        <Header style={{ marginBottom: "1rem" }}/>
                    </Item>
                    <Item name="illustration">
                        <Illustration src="/illustrations/mother&director.png"/>
                    </Item>
                    <Item name="postit">
                        <PostIt>La directrice du musée parle à ta mère.</PostIt>
                    </Item>
                    <Item name="dialog">
                        <Dialog name="Directrice du Musée :">
                            Je trouve que le dessin de votre fils est très créatif, vous devriez laisser s’exprimer sa
                            créativité, car dans l’art il y a aussi de l’amusement !
                        </Dialog>
                    </Item>
                    <Item name="button">
                        <Button onClick={handleNext} arrow="right">Suivant</Button>
                    </Item>
                </Grid>
            </Container>
        case 4:
            return <Container>
                <Grid slide="4">
                    <Item name="header">
                        <Header/>
                    </Item>
                    <Item name="illustration">
                        <Illustration src="/illustrations/mother_laughing.png"/>
                    </Item>
                    <Item name="postit">
                        <PostIt>Je n’avais pas vu cela sous cet angle ! <br/>
                            Kurt, tu es très créatif, je suis fier de toi
                            !</PostIt>
                    </Item>
                    <Item name="button">
                        <Button onClick={handleNext} arrow="right">Suivant</Button>
                    </Item>
                </Grid>
            </Container>
        case 5:
            return <Container>
                <Grid slide="5">
                    <Item name="header">
                        <Header/>
                    </Item>
                    <Item name="postit" style={{ justifyContent: "center" }}>
                        <PostIt>Tu as accompli ton objectif !<br/><br/>
                            Ta mère t’a inscrit à un cours de dessin !<br/><br/>
                            Tu peux partager ton tableau et regarder celui des précédents joueurs !</PostIt>
                    </Item>
                    <Item name="button" style={{ display: "flex", gap: "1rem" }}>
                        <Link href="/galery">
                            <Button>Accéder à la galerie</Button>
                        </Link>
                        <Link href="/">
                            <Button layout="secondary">
                                Retourner à l’accueil
                            </Button>
                        </Link>
                    </Item>
                </Grid>
                <Scheme top="10"/>
                <Pen bottom="2"/>
                <Pencil bottom="20" left="0"/>
                <Tube right="0" bottom="5"/>
                <Brush top="5" right="0"/>
            </Container>
    }
}

const Illustration = styled.img`
    height: 24rem;
  `

const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    text-align: center;
    grid-template-columns: 1fr;
    ${(props) => {
    switch (props.slide) {
        case "3":
            return css`
                grid-template-rows: min-content 1fr min-content min-content 20vh;
                grid-template-areas:
                        "header"
                        "illustration"
                        "postit"
                        "dialog"
                        "button";
                img {
                  height: 18rem;
                }
            `
        case "5":
            return css`
                grid-template-rows: min-content 1fr min-content min-content 20vh;
                grid-template-areas:
                        "header"
                        "postit"
                        "button";
            `
        default:
            return css`
                     grid-template-rows: min-content 1fr auto 20vh;
                    grid-template-areas:
                        "header"
                        "illustration"
                        "postit"
                        "button";
                `
    }
}}
`

const Item = styled.div`
    position: relative;
    grid-area: ${(props) => props.name};
    display: flex;
    flex-direction: column;
    align-items: center;
    ${(props) => {
    switch (props.name) {
        case "button":
            return css`
                justify-content: center;
                `
        case "postit":
            return css`
               top: -24px;
               margin-bottom: 1rem;
                `
        case "illustration":
            return css`
                justify-content: flex-end;
                `
    }
}

}
`