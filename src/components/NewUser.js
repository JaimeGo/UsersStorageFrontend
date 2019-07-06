import React from 'react';
import UserForm from './UserForm'
import UserNavbar from './UserNavbar';


const NewUser = () => {
    return (
        <div>
            <UserNavbar/>
            <UserForm formType="new"/>
        </div>


    );
};

export default NewUser;