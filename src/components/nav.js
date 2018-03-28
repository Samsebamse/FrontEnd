var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component{
    render(){
        return(
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/add">Add</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/subtract">Subtract</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/reset">Reset</NavLink>
                </li>
          </ul>
        );
    }
}

module.exports = Nav;
