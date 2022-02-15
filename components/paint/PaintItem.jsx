import styled from "@emotion/styled"

export default function PaintItem (props) {

    return <PaintItemElement width={props.width} height={props.height} top={props.top} bottom={props.bottom} left={props.left} onClick={props.onClick} />
}

const PaintItemElement = styled.div`
   width: ${props => props.width};
   height: ${props => props.height};
   top: ${props => props.top};
   bottom: ${props => props.bottom};
   left: ${props => props.left};
   border-radius: 50%;
   filter: blur(20px);
   position: absolute;
   opacity: 0.75;
   background-color: white;
`