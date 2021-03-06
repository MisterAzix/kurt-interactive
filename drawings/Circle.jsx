import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"
import { motion } from "framer-motion"

export default function Circle (props) {
    return (
        <Svg {...props} animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, ease: "linear", duration: 4 }} width="9"
             height="9" viewBox="0 0 9 9" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.00258065 3.34773C0.00118182 2.71287 0.166631 2.08879 0.482354 1.538C0.871172 0.985592 1.42605 0.571597 2.06631 0.356202C3.48856 -0.157147 5.05223 -0.114303 6.44424 0.47615C6.89426 0.716025 7.26268 1.08445 7.50256 1.53447C8.02551 2.37646 8.31752 3.3413 8.34922 4.33197C8.43388 6.27928 6.76526 8.0361 5.46 8.25834C4.85011 8.3922 4.218 8.38786 3.61001 8.24563C3.00203 8.1034 2.43358 7.82689 1.94637 7.43638C1.31986 6.95921 0.816541 6.33914 0.478408 5.62789C0.140274 4.91664 -0.0228731 4.13485 0.00258065 3.34773V3.34773ZM0.821019 3.2419C0.690493 4.86466 2.05573 6.67439 3.50916 7.14358C4.96258 7.61277 6.17613 7.14358 6.91695 5.78893C7.18573 5.30642 7.33612 4.767 7.35575 4.21503C7.37537 3.66307 7.26368 3.11433 7.02984 2.61396C6.7441 1.90841 6.51832 1.28753 5.57289 1.10056C4.90967 0.970029 4.28879 0.747783 3.60441 0.89242C3.40908 0.919676 3.21241 0.936164 3.01527 0.941809C1.62534 1.08645 0.863352 1.86608 0.821019 3.2419V3.2419Z"
            />
        </Svg>
    )
}

const Svg = styled(motion.svg)`
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
