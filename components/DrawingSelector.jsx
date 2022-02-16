import React from "react";

import Tree from "../drawings/Tree";
import Bike from "../drawings/Bike";
import Bird from "../drawings/Bird";
import Boat from "../drawings/Boat";
import Bridge from "../drawings/Bridge";
import Cart from "../drawings/Cart";
import Cloud from "../drawings/Cloud";
import Dog from "../drawings/Dog";
import Horse from "../drawings/Horse";
import Lion from "../drawings/Lion";
import Saber from "../drawings/Saber";
import Tiger from "../drawings/Tiger";

export default function DrawingSelector(props) {
    switch (props.drawing) {
        case "tree":
            return <Tree />;
        case "donkey":
            return <Horse />;
        case "bridge":
            return <Bridge />;
        case "boat":
            return <Boat />;
        case "bird":
            return <Bird />;
        case "bike":
            return <Bike />;
        case "cloud":
            return <Cloud />;
        case "dog":
            return <Dog />;
        case "cart":
            return <Cart />;
        case "lion":
            return <Lion />;
        case "saber":
            return <Saber />;
        case "tiger":
            return <Tiger />;
        default:
            return <Horse />;
    }
}
