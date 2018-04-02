import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';


export class NavComp extends Component{

    constructor() {
        super();
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }

    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }

    render(){
        return(
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="ml-auto"></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={!this.state.collapsed} navbar >
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


        // <ul>
        //     <li>
        //         <NavLink activeClassName="active" to="/"> Home </NavLink>
        //     </li>
        //     <li>
        //         <NavLink activeClassName="active" to="/add"> Add </NavLink>
        //     </li>
        //     <li>
        //         <NavLink activeClassName="active" to="/subtract"> Subtract </NavLink>
        //     </li>
        //     <li>
        //         <NavLink activeClassName="active" to="/reset"> Reset </NavLink>
        //     </li>
        // </ul>

