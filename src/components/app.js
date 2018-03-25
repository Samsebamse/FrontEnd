var React = require('react');

var Nav = require('./nav');
var Add = require('./add');
var Subtract = require('./subtract');
var Reset = require('./reset');

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;



class App extends React.Component{

    Home(){
        return(
            <h1>HOME COMPONENT</h1>
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
                </div>
            </Router>
        );
    }
}

module.exports = App;
