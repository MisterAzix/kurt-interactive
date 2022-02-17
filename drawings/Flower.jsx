import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"
import { Player } from "@lottiefiles/react-lottie-player"
import flower from "../lib/lotties/flower.json"

export default function Flower (props) {
    return (
        <PlayerContainer
            src={flower}
            autoplay
            loop
            style={{
                position: "absolute",
                width: "75px",
                top: props.top + "%",
                left: props.left + "%",
                bottom: props.bottom + "%",
                right: props.right + "%"
            }}
        >
        </PlayerContainer>
    )
}

const PlayerContainer = styled(Player)`
    position: absolute;

    ${(props) =>
    props.top &&
    css`
            top: ${props.top}%;
        `}
    ${(props) =>
    props.bottom &&
    css`
            bottom: ${props.bottom}%;
        `}
    ${(props) =>
    props.left &&
    css`
            left: ${props.left}%;
        `}
    ${(props) =>
    props.right &&
    css`
            right: ${props.right}%;
        `}
`
