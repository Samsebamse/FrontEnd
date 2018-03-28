import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Nav } from "../components/nav";
import { Add } from "../components/add";
import { Subtract } from "../components/subtract";
import { Reset } from "../components/reset";


class App extends React.Component{
    
   constructor(props){
       super(props);
   }
   
    Home(){
        return(
            <div>
                <h1>HOME COMPONENT</h1>  
            </div>
        );
    }

    componentWillMount(){
        this.props.addprop(100);
        this.props.addprop(100);
        this.props.deleteprop(180);
        console.log(this.props.math.result);
    }
    
    render(){
       
        return(    
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={this.Home}/>
                        <Route path="/add" component={Add}/>
                        <Route path="/subtract" component={Subtract}/>
                        <Route path="/reset" component={Reset}/>
                    </Switch>
                </div>
            </Router>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
        math: state.mathReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addprop: (integer) => {
            dispatch({
                type: 'ADD',
                payload: integer
            });
        },
        deleteprop: (integer) => {
            dispatch({
                type: 'SUBTRACT',
                payload: integer
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
