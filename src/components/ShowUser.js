import React from 'react';
import UserNavbar from './UserNavbar'
import UserTable from "./UserTable";
import {Button} from "reactstrap";
import {withRouter} from 'react-router-dom'
import './ShowUser.scss'


class ShowUser extends React.Component{
    constructor(props){
        super(props);
        this.params=props.match.params;
    }



    handleEdit = () => {
        this.props.history.push(`/users/${this.params.id}/edit`);
    };

    handleNew = () => {
        this.props.history.push(`/`);
    };

    render() {

        return (
            <div>
                <UserNavbar/>
                <UserTable tableType="show" userId={this.params.id}/>
                <Button onClick={this.handleEdit} className="table_button" id="edit_button"> Edit </Button>
                <Button onClick={this.handleNew} className="table_button" id="delete_button"> Delete </Button>
            </div>


        );
    }

}






export default withRouter(ShowUser);