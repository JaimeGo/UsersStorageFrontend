import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import './UserForm'
import UserNavbar from "./UserNavbar";
import './UserForm.scss'

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

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.formType==='edit'){
            console.log("Edit");
        } else {
            console.log("New");
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