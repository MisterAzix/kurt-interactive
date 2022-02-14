import styled from "@emotion/styled";
import React from "react";

export default function PostIt(props) {
    return (
        <PostItContainer>
            <div>
                <p>{props.children}</p>
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.81195 4.20673C6.62674 2.40355 15.5889 13.2226 15.5889 13.2226L31.2694 7.57869L43.4713 13.2226L53.4824 11.4194L63.3873 13.2226L78.457 11.4194L96.0362 4.20673L103.219 7.8131L116.496 13.2226L126.348 11.4194C126.348 11.4194 144.379 4.20673 147.034 4.20673C149.69 4.20673 159.98 13.2226 159.98 13.2226H169.659L189.283 7.8131L206.782 11.4194L222.715 18.6322L239.471 10.5179H255.005L271.841 7.8131L286.605 13.2226L299.086 9.61627H306.362L316.984 13.2226V0H0.983887V5.39684C2.17884 5.00014 3.18792 4.60343 3.81195 4.20673Z"
                        fill="#FBDF7D"
                    />
                </svg>
            </div>
        </PostItContainer>
    );
}

const PostItContainer = styled.div`
    width: fit-content;
    transform: rotate(5deg);
    z-index: 1;

    div {
        position: relative;
        width: fit-content;
        padding: 1.5rem;
        background-color: #fbdf7d;
        filter: drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.25));

        p {
            font-size: 1.1rem;
            font-weight: 500;
            max-width: 276px;
        }

        svg {
            position: absolute;
            left: .43rem;
            width: 100%;
            top: calc(100% - 0.5rem);
        }
    }

    &:before,
    &:after {
        content: "";
        z-index: 1;
        position: absolute;
        top: -1rem;
        background-color: #8092b3;
        height: 2rem;
        width: 1rem;
    }

    &:before {
        left: 2rem;
        transform: rotateZ(-10deg);
    }

    &:after {
        right: 2rem;
        transform: rotateZ(10deg);
    }
`;
