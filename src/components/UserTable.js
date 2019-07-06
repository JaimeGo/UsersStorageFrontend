
import React from 'react';
import UserItem from './UserItem'
import './UserTable.scss'

class UserTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        };

    }




    render(){
        if (this.props.tableType==="index") {
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
                        {this.props.users.map((user)=>{return <UserItem key={user.id} user={user} isClickable={true}/>})}
                        </tbody>

                    </table>
                </div>

            );

        } else if (this.props.tableType==="show"){
            return (
                <div>
                    <div className="table-users">
                        <div className="header">
                            User Detail
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
                            <UserItem user={this.props.user} isClickable={false} />
                            </tbody>

                        </table>

                    </div>

                </div>
            );

        }
    }
}




export default UserTable;
