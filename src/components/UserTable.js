
import React from 'react';
import UserItem from './UserItem'
import './UserTable.scss'
import { Button } from 'reactstrap';

const state={
    userIds:[1,2,3,4,5]
};

const UserTable = (props)=>{
    if (props.tableType==="index") {

        return (
            <div className="table-users">
                <div className="header">
                    Users
                </div>

                <table cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th id="lastTableHead">Rut</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.users.map((user)=>{return <UserItem user={user} isClickable={true}/>})}
                    </tbody>

                </table>
            </div>

        );

    } else if (props.tableType==="show"){
        return (
            <div>
                <div className="table-users">
                    <div className="header">
                        User
                    </div>

                    <table cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th id="lastTableHead">Rut</th>
                            </tr>
                        </thead>

                        <tbody>
                            <UserItem userId={props.userId} isClickable={false}/>
                        </tbody>

                    </table>

                </div>

            </div>
        );

    }

};


export default UserTable;
