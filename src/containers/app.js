import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavComp from "../containers/nav"
import { AddComp } from "../components/add";
import { SubtractComp } from "../components/subtract";
import { ResetComp } from "../components/reset";

import { addAction, subtractAction, resetAction } from "../actions/action_math";

class App extends Component{
   
    Home(result){
        return(
            <div>
                <h1>HOME COMPONENT</h1>
                <h2>{result}</h2>
            </div>
        );
    }

    render(){
        return(    
            <Router>
                <div>
                    <NavComp />
                    <Switch>
                        <Route exact path="/" render={() => this.Home(this.props.math.result)} />
                        <Route path="/add" render={() => (<AddComp addResult={this.props.math} buttonClicked={() => this.props.addprop(1)} />)} />
                        <Route path="/subtract" render={() => (<SubtractComp subResult={this.props.math} buttonClicked={() => this.props.subtractprop(1)} />)}/>
                        <Route path="/reset" render={() => (<ResetComp resResult={this.props.math} buttonClicked={() => this.props.resetprop()} />)} />
                    </Switch>
                </div>              
            </Router>   
        );
            
    }
    
}

const mapStateToProps = (state) => {
    return {
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addprop: (integer) => {
            dispatch(addAction(integer));
        },
        subtractprop: (integer) => {
            dispatch(subtractAction(integer));
        },
        resetprop: () => {
            dispatch(resetAction());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
