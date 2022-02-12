import styled from "@emotion/styled";
import React from "react";

export default function Button(props) {
    return <Btn>{props.children}</Btn>;
}

const Btn = styled.button({
    border: "none",
    outline: "none",
    color: "#FFFFFF",
    background: "#1A1A1A",
    fontFamily: "Gopher, sans-serif",
    padding: "1rem 1.5rem",
    cursor: "pointer",
});
