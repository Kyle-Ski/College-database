import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import logo from '../beer.png'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
        dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
        dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <Nav pills>
            <NavItem>
                <NavLink href="#" active>Link</NavLink>
            </NavItem>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                Dropdown
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem header></DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
            </Nav>
        </div>
        );
    }
}

