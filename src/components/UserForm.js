import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './UserForm'

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (true){
            console.log("HOLAAA")
        }

    };

    render() {

        if (this.props.formType==="edit") {
            return (
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="userName">Name</Label>
                        <Input type="text" name="userName" id="userName" placeholder="John" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userLastName">Last name</Label>
                        <Input type="text" name="userLastName" id="userLastName" placeholder="Doe" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="rut">Rut</Label>
                        <Input type="text" name="rut" id="rut" placeholder="12.345.678-9" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="picture">Picture</Label>
                        <Input type="file" name="picture" id="picture" />
                        <FormText color="muted">
                            Select an image that represents you.
                        </FormText>
                    </FormGroup>

                    <FormGroup>
                        <Input type="submit" name="submit" id="submit" value="Send"/>

                    </FormGroup>

                </Form>
            );
        } else {
            return <h1>New</h1>
        }
    }
}



export default UserForm;