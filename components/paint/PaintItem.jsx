import styled from "@emotion/styled";

export default function PaintItem(props) {
    return (
        <PaintItemElement
            width={props.width}
            height={props.height}
            top={props.top}
            bottom={props.bottom}
            left={props.left}
            opacity={props.opacity}
            onClick={props.onClick}
        />
    );
}

const PaintItemElement = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    border-radius: 50%;
    filter: blur(20px);
    position: absolute;
    opacity: ${(props) => props.opacity};
    background-color: white;
    animation: fadeIn 1s infinite alternate;
    animation-delay: ${(props) => props.opacity}s;
    cursor: pointer;

    @keyframes fadeIn {
        from {
            opacity: ${(props) => props.opacity - 0.2};
            transform: scale(0.9);
        }
        to {
            opacity: ${(props) => props.opacity};
            transform: scale(1);
        }
    }
`;
