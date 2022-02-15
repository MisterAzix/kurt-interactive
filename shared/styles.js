import { css, Global } from "@emotion/react"
import styled from "@emotion/styled"

export const globalStyles = (
    <Global
        styles={css`
            @font-face {
                font-family: "HeartVibes";
                src: url("/HeartVibes-Handwriting.woff");
                font-style: normal;
                font-weight: 800;
                font-display: swap;
            }

            * {
                box-sizing: border-box;
            }

            html,
            body {
                display: flex;
                justify-content: center;
                margin: 0;
                font-family: "Gopher", sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                background-color: #1a1a1a;
            }
        `}
    />
)

export const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    max-width: 420px;
    overflow: hidden;
    background: right / cover no-repeat url("/paper_texture_background.png"), #fefef2;
`
