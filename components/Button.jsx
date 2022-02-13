import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export default function Button(props) {
    return <Btn layout={props.layout} arrow={props.arrow}>{props.children}</Btn>;
}

const btnBaseStyle = css`
    border: none;
    outline: none;
    font-family: Gopher, sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s ease;
`;

const primaryBtn = css`
    color: #ffffff;
    background-color: #1a1a1a;

    &:hover {
        background-color: #333333;
    }
`;

const secondaryBtn = css`
    box-shadow: inset 0 0 0 1px #1a1a1a;
    color: #1a1a1a;
    background: none;

    &:hover {
        box-shadow: inset 0 0 0 2px #1a1a1a;
    }
`;

const leftArrow = css`
    &:before {
        content: "← ";
    }
`;

const rightArrow = css`
    &:after {
        content: " →";
    }
`;

const Btn = styled.button`
    ${btnBaseStyle}
    ${(props) => (props.layout === "secondary" ? secondaryBtn : primaryBtn)}
    ${(props) => props.arrow === "left" && leftArrow}
    ${(props) => props.arrow === "right" && rightArrow}
`;
