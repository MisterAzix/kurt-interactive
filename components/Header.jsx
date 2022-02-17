import styled from "@emotion/styled"
import { Player } from "@lottiefiles/react-lottie-player"
import kurt from "../lib/lotties/kurt.json"

export default function Header () {
    return <HeaderElement
        src={kurt}
        autoplay
        loop
        style={{
            width: "4rem",
            transform: "translateX(10px)",
            margin: "1rem 0"
        }}
    />
}

const HeaderElement = styled(Player)`
    font-family: "HeartVibes";
    text-align: center;
    font-size: 1.5rem;
    margin: 2rem 0;
`
