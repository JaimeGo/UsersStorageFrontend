import React from 'react';
import UserNavbar from './UserNavbar'
import UserForm from './UserForm'


const EditUser = () => {
    return (
        <div>
            <UserNavbar/>
            <UserForm formType="edit"/>
        </div>
    );
};

export default EditUser;