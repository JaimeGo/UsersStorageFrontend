
import React from 'react';
import {withRouter} from 'react-router-dom'
import './UserItem.scss'


class UserItem extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick = () => {
        if (this.props.isClickable===true){
            this.props.history.push(`/users/${this.props.user.id}`);
        }

    };


    clickableClassName = ()=>{
        if (this.props.isClickable===true){
            return "clickable";
        } else {
            return ""
        }
    };

    render(props){

        return (
            <tr onClick={this.handleClick} className={this.clickableClassName()}>
                <td><img src={this.props.user.avatar_location} alt="avatar"/></td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.last_name}</td>
                <td>{this.props.user.rut}</td>
            </tr>


        );
    }




}

export default withRouter(UserItem);

