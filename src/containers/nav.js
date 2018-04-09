import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

import { collapseAction } from "../actions/action_navbar";


class NavComp extends Component{

    render(){
        return(
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="ml-auto"></NavbarBrand>
                    <NavbarToggler onClick={() => this.props.togglenav()} />
                    <Collapse isOpen={this.props.toggle.isOpen} navbar >
                        <Nav navbar >
                            <div className="ml-auto">
                            <NavItem>
                                <NavLink activeClassName="active" to="/"> Home </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" to="/add"> Add </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" to="/subtract"> Subtract </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" to="/reset"> Reset </NavLink>
                            </NavItem>
                            </div>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );     
    } 
}


const mapStateToProps = (state) => {
    return {
        toggle: state.toggle
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        togglenav: () => {
            dispatch(collapseAction());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(NavComp);