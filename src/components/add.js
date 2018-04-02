import React from "react";
import { Button } from 'reactstrap';


export const AddComp = (props) => {
    return(
        <div>
            <h2>ADD COMPONENT</h2>
            <h4>{props.addResult.result}</h4>
            <Button color="success" onClick={props.buttonClicked}>ADD</Button>
        </div>
    );
}

