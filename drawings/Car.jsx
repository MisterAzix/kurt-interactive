import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"
import { Player } from "@lottiefiles/react-lottie-player"
import car from "../lib/lotties/car.json"

export default function Car (props) {
    return (
        <PlayerContainer
            src={car}
            autoplay
            loop
            style={{
                position: "absolute",
                width: "125px",
                top: props.top + "%",
                left: props.left + "%",
                bottom: props.bottom + "%",
                right: props.right + "%"
            }}
        />
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
