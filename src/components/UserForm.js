import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import './UserForm'
import UserNavbar from "./UserNavbar";
import './UserForm.scss'
import API from "../api";

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.params=props.match.params;
        this.state={

            name:'John',
            lastName:'Doe',
            rut:'12.345.678-9'

        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        let user={
            name:this.state.name,
            last_name:this.state.lastName,
            rut:this.state.rut,
            avatar:event.target.files[0]
        };

        if (this.props.formType==='edit'){

            await API.put(`/users/${this.params.id}`, user)
                .then(res => {
                    console.log(res);
                    this.props.history.push(`/`);
                })

        } else {

            API.post(`/users`, user)
                .then(res => {
                    console.log(res);
                    this.props.history.push(`/`);
                })
        }

    };

    render() {

        return (
            <div>
                <UserNavbar/>
                <br/>
                <Form onSubmit={this.handleSubmit} id="userForm">
                    <FormGroup>
                        <Label for="userName" sm={2}>Name</Label>
                        <Col sm={5}>
                            <Input type="text" name="userName" id="userName" value={this.state.name}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userLastName" sm={2}>Last name</Label>
                        <Col sm={5}>
                            <Input type="text" name="userLastName" id="userLastName" value={this.state.lastName} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="rut" sm={2}>Rut</Label>
                        <Col sm={5}>
                            <Input type="text" name="rut" id="rut" value={this.state.rut}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Label for="picture" sm={2}>Picture</Label>
                        <Col sm={5}>
                            <Input type="file" name="picture" id="picture" />
                            <FormText color="muted">
                                Select an image that represents you.
                            </FormText>
                        </Col>

                    </FormGroup>

                    <FormGroup>
                        <Col sm={2}>
                            <Input type="submit" name="submit" id="submit_button" value="Send"/>
                        </Col>

                    </FormGroup>

                </Form>
            </div>
        );

    }
}



export default UserForm;