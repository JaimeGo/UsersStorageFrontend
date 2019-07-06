
import React from 'react';
import {withRouter} from 'react-router-dom'
import './UserItem.scss'


class UserItem extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick = () => {
        if (this.props.isClickable===true){
            this.props.history.push(`/users/${this.props.userId}`);
        }

    };


    clickableClassName = ()=>{
        if (this.props.isClickable===true){
            return "clickable";
        } else {
            return ""
        }
    };

    render(){

        return (
            <tr onClick={this.handleClick} className={this.clickableClassName()}>
                <td><img src="http://lorempixel.com/100/100/people/1" alt=""/></td>
                <td>Jane</td>
                <td>Doe</td>
                <td>12.123.123-1</td>
            </tr>


        );
    }




}

export default withRouter(UserItem);

