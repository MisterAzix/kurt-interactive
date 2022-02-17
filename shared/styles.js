import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

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

                &::-webkit-scrollbar {
                    background-color: transparent;
                    width: 0.6rem;
                    height: 0.6rem;
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 1rem;
                    background: #1a1a1a;
                }
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
                font-size: 14px;
            }
        `}
    />
);

export const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    max-width: 420px;
    overflow: hidden;
    background: right / cover no-repeat url("/paper_texture_background.png"), #fefef2;
`;
