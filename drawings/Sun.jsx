import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"
import sun_blink from "../lib/lotties/sun_blink.json"
import { Player } from "@lottiefiles/react-lottie-player"

export default function Sun (props) {
    return (
        <PlayerContainer
            src={sun_blink}
            autoplay
            loop
            style={{
                position: "absolute",
                width: "133px",
                height: "133px",
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
