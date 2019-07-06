import React from 'react';
import UserNavbar from './UserNavbar'
import './App.scss';
import UserTable from './UserTable'

class App extends React.Component{
    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <UserNavbar/>
                <UserTable tableType="index"/>
            </div>
        );
    }
}



export default App;
