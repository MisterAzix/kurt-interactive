import React from "react"

import { Container } from "../shared/styles"
import { Player } from "@lottiefiles/react-lottie-player"

import transition from "../lotties/transition.json"
import styled from "@emotion/styled"

export default function Transition () {
    return (<Container>
            <h1>Transition</h1>
            <PlayerContainer>
                <Player
                    src={transition}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    autoplay
                    loop
                />
            </PlayerContainer>
        </Container>
    )
}

const PlayerContainer = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   svg {
       width: 100%;
       height: 100%;
   }
`