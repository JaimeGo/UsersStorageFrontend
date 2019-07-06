import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import './UserForm'
import UserNavbar from "./UserNavbar";
import './UserForm.scss'
import API from "../apis/UserAPI";
import ImageUploader from 'react-images-upload';
import rutValidator from '../utils/RutValidation'

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.params=props.match.params;
        this.state={

            name:'John',
            lastName:'Smith',
            rut:'12.312.312-3',
            avatar:null

        };
    }

    componentDidMount = () => {
        if (this.props.formType==='edit'){
            API.get(`/users/${this.params.id}`)
                .then(res => {
                    console.log(res);
                    this.setState({name:res.data.name});
                    this.setState({lastName:res.data.last_name});
                    this.setState({rut:res.data.rut});
                })
                .catch((err)=>{
                    console.error(err);
                })



        }
    };



    handleSubmit = async (event) => {

        event.preventDefault();

        if (!rutValidator(this.state.rut)){
            alert('Rut is invalid')
        } else {


            let bodyFormData = new FormData();
            bodyFormData.set('name', this.state.name);
            bodyFormData.set('last_name', this.state.lastName);
            this.state.rut.replace('-','');
            let pos=this.state.rut.length-1;
            bodyFormData.set('rut', this.state.rut.slice(0, pos) + '-' + this.state.rut.slice(pos));
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

                await API.post(`/users`, bodyFormData)
                    .then(res => {
                        console.log(res);
                        this.props.history.push(`/`);
                    })
                    .catch((err)=>{
                        console.error(err);
                    })
            }

        }


    };

    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
        console.log(this.state.name)
    };

    handleLastNameChange=(event)=>{
        this.setState({lastName:event.target.value})
    };

    handleRutChange=(event)=>{
        this.setState({rut:event.target.value})
    };

    handleImageChange=(images)=>{
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
                            <Input onChange={this.handleNameChange} type="text" name="userName" id="userName" placeholder={this.state.name} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userLastName" sm={2}>Last name</Label>
                        <Col sm={5}>
                            <Input onChange={this.handleLastNameChange} type="text" name="userLastName" id="userLastName" placeholder={this.state.lastName} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="rut" sm={2}>Rut</Label>
                        <Col sm={5}>
                            <Input onChange={this.handleRutChange} type="text" name="rut" id="rut" placeholder={this.state.rut}/>
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
                                buttonText='Choose an Image'
                                label='Max size accepted: 5mb, formats: jpg|jpeg|png'
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