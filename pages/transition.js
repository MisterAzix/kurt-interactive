import React, { useRef } from "react"

import { Container } from "../shared/styles"
import { Player } from "@lottiefiles/react-lottie-player"

import transition from "../lib/lotties/transition.json"
import styled from "@emotion/styled"

export default function Transition () {
    const player = useRef()

    return (<Container>
            <h1>Transition</h1>
            <button onClick={() => {
                player.current.play()
            }}>Play
            </button>
            <PlayerContainer>
                <Player
                    src={transition}
                    ref={player}
                    style={{
                        width: "100%",
                        height: "100vh"
                    }}
                    onEvent={(event) => {
                        (event === "load") && player.current.container.querySelector("svg").setAttribute("preserveAspectRatio", "none")
                    }}
                    keepLastFrame
                    speed={0.75}
                />
            </PlayerContainer>
        </Container>
    )
}

const PlayerContainer = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   pointer-events: none;
`