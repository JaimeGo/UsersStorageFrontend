import React from 'react';
import UserNavbar from './UserNavbar'
import './App.scss';
import UserTable from './UserTable'
import API from '../apis/UserAPI'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        };
    }

    componentDidMount() {
        API.get('/users')
            .then((res)=>{
                console.log(res);
                this.setState({users:res.data})
            })
            .catch((err)=>{
                console.error(err);
            })
    }

    render() {
        return (
            <div className="App">
                <UserNavbar/>
                <UserTable tableType="index" users={this.state.users}/>
            </div>
        );
    }
}



export default App;
