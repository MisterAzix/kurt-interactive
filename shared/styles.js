import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
    <Global
        styles={css`
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
);

export const Container = styled.div({
    height: "100vh",
    width: "100vw",
    maxWidth: "420px",
    overflow: "hidden",
    backgroundColor: "#FEFEF2",
});
