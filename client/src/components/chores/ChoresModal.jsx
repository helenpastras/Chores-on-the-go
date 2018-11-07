import React from 'react';
import API from "../../routes/api";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from 'reactstrap';
import AddBtn from "../../components/addButton";
import {Input} from "./Input";
import "./ChoressModal.css";
import axios from "axios"


class ChoresModal extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        modal: false,
        title: "",
        // allDay: false,
        startYear: "",
        startMonth: "",
        startDate: "",
        startTime: "",
        // endYear: "",
        // endMonth: "",
        // endDate: "",
        // endTime: "",
        description: "",
        user: null
    };

    this.toggle = this.toggle.bind(this);
    }

    toggle() {
    this.setState({
        modal: !this.state.modal
    });
    }

    // handleInputChange  (Chores) {
    //     const target ={ name, value } = this.target;
    //     this.setState({
    //         [name]: value
    //     });
    // }

    componentDidMount() {
        axios.get('/user').then(response => {
            if (!!response.data.user) {
              console.log('THERE IS A USER')
              console.log(response.data.user.local.username)
              this.setState({
                user: response.data.user
              });
            } 
        });       
    }

    // handleFormSubmit = event => {
    //     Chores.preventDefault();
    //     console.log("click")
    //     console.log(this.state.user._id)
    //     API.saveEvent({
    //         title: this.state.title,
    //         start: `${this.state.startYear}-${this.state.startMonth}-${this.state.startDate} ${this.state.startTime}`,
    //        // end: `${this.state.endYear}-${this.state.endMonth}-${this.state.endDate} ${this.state.endTime}`,
    //         description: this.state.description,
    //         user: this.state.user._id
    //     })
    //         .catch(err => console.log(err));
            
    // }

    searchDb = () => {
        API.gets()
        .then(res => {
            for(let i = 0; i < res.data.length; i++){
                res.data[i].start = new Date(res.data[i].start)
                res.data[i].end = new Date(res.data[i].end)
            }
            this.setState({ s: res.data });
        })
        .catch(err => console.log(err));
    };

    render() {
    return (
        <div>
        <Button className="addBtn" onClick={this.toggle}>Add </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Add a </ModalHeader>
            <ModalBody>
            <Form>
            <FormGroup>
                <Label for="title"> Title</Label>
                <Input 
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="What are you up to?" />
            </FormGroup> 
            <FormGroup>
                <Label for="description"> Description </Label>
                <Input 
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description" 
                    placeholder="Tell me more." />
            </FormGroup> 
            <h3> Start</h3>
            <div className="row">
            <div className="col-sm">
            <FormGroup>
                <Label for="startYear">Year </Label>
                    <Input 
                        value={this.state.startYear}
                        onChange={this.handleInputChange}
                        name="startYear" 
                        placeholder="YYYY" />
            </FormGroup>
            </div>
            <div className="col-sm">
            <FormGroup>
            <Label for="startMonth">Month </Label>
                <Input 
                    value={this.state.startMonth}
                    onChange={this.handleInputChange}
                    name="startMonth" 
                    placeholder="MM" />
            </FormGroup>
            </div>
            </div>
            <div className="row">
            <div className="col-sm">
            <FormGroup>
            <Label for="startDate">Date </Label>
                <Input 
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                    name="startDate" 
                    placeholder="DD" />
            </FormGroup>
            </div>
            <div className="col-sm">
            <FormGroup>
            <Label for="startTime">Time </Label>
                <Input 
                    value={this.state.startTime}
                    onChange={this.handleInputChange}
                    name="startTime" 
                    placeholder="HH:MM (military time)" />
            </FormGroup>
            </div>
            </div>
            <h3> End</h3>
            <div className="row">
            <div className="col-sm">
            <FormGroup>
                <Label for="endYear">Year </Label>
                    <Input 
                        value={this.state.endYear}
                        onChange={this.handleInputChange}
                        name="endYear" 
                        placeholder="YYYY" />
            </FormGroup>
            </div>
            <div className="col-sm">
            <FormGroup>
            <Label for="endMonth">Month </Label>
                <Input 
                    value={this.state.endMonth}
                    onChange={this.handleInputChange}
                    name="endMonth" 
                    placeholder="MM" />
            </FormGroup>
            </div>
            </div>
            <div className="row">
            <div className="col-sm">
            <FormGroup>
            <Label for="endDate">Date </Label>
                <Input 
                    value={this.state.endDate}
                    onChange={this.handleInputChange}
                    name="endDate" 
                    placeholder="DD" />
            </FormGroup>
            </div>
            <div className="col-sm">
            <FormGroup>
            <Label for="endTime">Time </Label>
                <Input 
                    value={this.state.endTime}
                    onChange={this.handleInputChange}
                    name="endTime" 
                    placeholder="HH:MM (military time)" />
            </FormGroup>
            </div>
            </div>
            </Form>
            </ModalBody>
            <ModalFooter>
            <AddBtn onClick={this.handleFormSubmit} />{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel </Button>
            </ModalFooter>
        </Modal>
        </div>
    );
    }
}

export default ChoresModal