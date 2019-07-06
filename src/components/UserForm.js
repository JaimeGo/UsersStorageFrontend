import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import './UserForm'
import UserNavbar from "./UserNavbar";
import './UserForm.scss'
import API from "../api";
import ImageUploader from 'react-images-upload';

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.params=props.match.params;
        this.state={

            name:'John',
            lastName:'Doe',
            rut:'12.345.678-9',
            avatar:null

        };
    }

    handleSubmit = async (event) => {
        console.log("Starting submission of form");
        event.preventDefault();

        /*let user={
            name:this.state.name,
            last_name:this.state.lastName,
            rut:this.state.rut,
            avatar:this.state.avatar
        };*/

        let bodyFormData = new FormData();
        bodyFormData.set('name', this.state.name);
        bodyFormData.set('last_name', this.state.lastName);
        bodyFormData.set('rut', this.state.rut);
        bodyFormData.append('avatar', this.state.avatar);



        if (this.props.formType==='edit'){

            await API.put(`/users/${this.params.id}`, bodyFormData)
                .then(res => {
                    console.log(res);
                    this.props.history.push(`/`);
                })
                .catch((err)=>{
                    console.error(err);
                })

        } else {

            API.post(`/users`, bodyFormData)
                .then(res => {
                    console.log(res);
                    this.props.history.push(`/`);
                })
                .catch((err)=>{
                    console.error(err);
                })
        }

        console.log("Submission of form finished");
    };

    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
    };

    handleLastNameChange=(event)=>{
        this.setState({lastName:event.target.value})
    };

    handleRutChange=(event)=>{
        this.setState({rut:event.target.value})
    };

    handleImageChange=(images)=>{
        console.log("IMAGESSS",images)
        this.setState({avatar:images[0]})
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
                            <Input onChange={this.handleNameChange} type="text" name="userName" id="userName" value={this.state.name}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userLastName" sm={2}>Last name</Label>
                        <Col sm={5}>
                            <Input onChange={this.handleLastNameChange} type="text" name="userLastName" id="userLastName" value={this.state.lastName} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="rut" sm={2}>Rut</Label>
                        <Col sm={5}>
                            <Input onChange={this.handleRutChange} type="text" name="rut" id="rut" value={this.state.rut}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Label for="picture" sm={2}>Picture</Label>
                        <Col sm={5}>
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose images'
                                onChange={this.handleImageChange}
                                imgExtension={['.jpg', '.jpeg', '.png']}
                                maxFileSize={5242880}
                            />
                            <FormText color="muted">
                                Select an image that represents you.
                            </FormText>
                        </Col>

                    </FormGroup>

                    <FormGroup>
                        <Col sm={2}>
                            <Input type="submit" name="submit" id="submit_button" value="Send" />
                        </Col>

                    </FormGroup>

                </Form>
            </div>
        );

    }
}



export default UserForm;