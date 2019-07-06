import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './UserNavbar.scss'


class UserNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <FontAwesomeIcon id="brandIcon" size="2x" icon={faAddressBook}/>
                    <NavbarBrand href="/">UserStorage</NavbarBrand>

                    <Nav className="ml-auto" navbar>
                        <NavItem>

                            <FontAwesomeIcon id="addUserIcon" icon={faUserPlus} />
                            <NavLink id="addUserLink" href="/users/new">Add User</NavLink>
                        </NavItem>

                    </Nav>

                </Navbar>
            </div>
        );
    }
}


export default UserNavbar;