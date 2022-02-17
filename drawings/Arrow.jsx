import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"

export default function Arrow (props) {
    return (
        <Svg {...props} width="123" height="57" viewBox="0 0 123 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.4487 23.0371C33.7982 23.1426 46.1512 23.4645 58.5015 23.1704C65.1102 23.0131 78.7077 23.0051 86.1643 20.5295C90.2709 19.1661 89.3643 18.0324 89.152 15.0343C88.9302 11.9012 88.6531 8.77527 88.4051 5.64441C88.3808 5.33828 87.3324 0.233029 88.9386 2.38996C94.9965 10.5249 102.7 17.8549 111.186 23.4105C114.041 25.2793 117.736 26.6989 120.123 29.2259C122.184 31.4084 117.816 33.4298 116.521 34.3743C108.73 40.0569 101.839 46.6382 94.3271 52.5939C93.4779 53.2672 92.1045 54.5987 91.0193 54.9414C90.5627 55.0856 90.6458 54.0331 90.6458 53.5542C90.6458 51.9547 90.7947 48.02 90.8326 46.7786C90.9519 42.8642 91.3068 38.7978 91.0727 34.8811C90.8088 30.4675 85.8286 31.9674 82.7498 32.3203C55.7241 35.4176 28.8885 39.0839 1.76194 41.2833"
                stroke="white" stroke-width="3" stroke-linecap="round"/>
        </Svg>
    )
}

const Svg = styled.svg`
    position: absolute;
    z-index: 1;

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
