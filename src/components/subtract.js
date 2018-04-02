import React from "react";
import { Button } from 'reactstrap';


export const SubtractComp = (props) => {
    return(
        <div>
            <h2>SUBTRACT COMPONENT</h2>
            <h4>{props.subResult.result}</h4>
            <Button color="danger" onClick={props.buttonClicked}>SUBTRACT</Button>
        </div>
    );
}
