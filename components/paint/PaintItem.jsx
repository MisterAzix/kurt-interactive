import styled from "@emotion/styled"

export default function PaintItem (props) {

    return <PaintItemElement width={props.width} height={props.height} bottom={props.bottom} right={props.right} onClick={props.onClick} />
}

const PaintItemElement = styled.div`
   width: ${props => props.width};
   height: ${props => props.height};
   top: ${props => props.top};
   bottom: ${props => props.bottom};
   left: ${props => props.left};
   right: ${props => props.right};
   border-radius: 50%;
   filter: blur(20px);
   position: absolute;
   opacity: 0.75;
   background-color: white;
`