import React from "react";
import { Button } from 'reactstrap';


export const ResetComp = (props) => {
    return(
        <div>
            <h2>RESET COMPONENT</h2>
            <h4>{props.resResult.result}</h4>
            <Button color="warning" onClick={props.buttonClicked}>RESET</Button>
        </div>
    );
}
