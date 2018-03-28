var React = require('react');
var connect = require('react-redux').connect;

var Nav = require('./nav');
var Add = require('./add');
var Subtract = require('./subtract');
var Reset = require('./reset');

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component{
    
   constructor(props){
       super(props);
       this.Home = this.Home.bind(this);
   }
   

    Home(){
        return(
            <div>
                <h1>HOME COMPONENT</h1>  
                <h2>{this.props.calculate}</h2>
            </div>
        );
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
                    <h1>{this.props.math.result}</h1>   
                    <h2>{this.props.setValue({type: 'ADD', payload: 100000})}</h2>   
                </div>
            </Router>
            
            
        );
    }
}

var addInt = {
    type: 'ADD',
    payload: 100
}

var mapStateToProps = function(state){
    return {
        math: state.math
    };
};

var mapDispatchToProps = function(dispatch){
    return {
        setValue: function(integer){
            return dispatch(integer);
        }
    };
};



module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
